const express = require('express');
const cors = require('cors'); // Importe o módulo cors
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dashboard',
    password: '2002',
    port: 5432,
});

// Use o middleware cors
app.use(cors());

app.get('/userCount', async (req, res) => 
{
    try 
    {
        const result = await pool.query('select count(id) from users');
        res.json(result);
    } 
    catch (error) 
    {
        console.error('erro ao buscar dados', error);
        res.status(500).send('erro no banco de dados');
    }
});

app.get('/pagesCount', async (req, res) => 
{
    try
    {
        const result = await pool.query('select sum(pages_process) from extracts');
        res.json(result);
    }
    catch(error)
    {
        console.console.error('erro ao buscar quantia de paginas', error);
        re.status(500).send('erro no banco de dados');
    }
});

app.get('/docCount', async (req, res) => 
{
    try
    {
        const result = await pool.query('select count(id) from extracts');
        res.json(result);
    }
    catch(error)
    {
        console.console.error('erro ao buscar quantia de documentos', error);
        re.status(500).send('erro no banco de dados');
    }
});

app.get('/seasonality', async (req, res) => 
{
    try
    {
        const result = await pool.query('WITH months AS (SELECT generate_series(1, 12) AS "month") SELECT count(extracts.id), months.month FROM months LEFT JOIN extracts ON extract(month FROM extracts.created_at) = months.month GROUP BY months.month ORDER BY months.month;');
        res.json(result);
    }
    catch(error)
    {
        console.console.error('erro ao buscar sazonalidade', error);
        re.status(500).send('erro no banco de dados');
    }
});

app.get('/typeSeg', async (req, res) =>
{
    try
    {
        const result = await pool.query('select initcap(segment) as name, count(users.id) as y from users group by segment')        ;
        res.json(result);
    }
    catch(error)
    {
        console.console.error('erro ao buscar tipos de segmento', error);
        re.status(500).send('erro no banco de dados');
    }
});

app.get('/docDis', async (req, res) =>
{
    try
    {
        const result = await pool.query("select initcap(replace(doc_type, '_', ' ')) as doc_type, count(id) from extracts group by doc_type");
        res.json(result);
    }
    catch(error)
    {
        console.console.error('erro ao buscar tipos de documento', error);
        re.status(500).send('erro no banco de dados');
    }
})

app.get('/docPerSeg', async (req, res) =>
{
    try
    {
        const result = await pool.query('select initcap(users.segment) as segment, count(extracts.id) from users inner join extracts on extracts.user_id = users.id group by users.segment');
        res.json(result);
    }
    catch(error)
    {
        console.console.error('erro ao buscar tipos de documento', error);
        re.status(500).send('erro no banco de dados');
    }
})

app.get('/pgPerDoc', async (req, res) =>
{
    try
    {
        const result = await pool.query('select round((sum(pages_process) / count(id))::numeric, 2) from extracts');
        res.json(result);
    }
    catch(error)
    {
        console.console.error('erro ao buscar tipos de documento', error);
        re.status(500).send('erro no banco de dados');
    }
})

app.listen(port, () => 
{
    console.log(`Servidor rodando em: http://localhost:${port}`);
});