import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DataService } from '../data.service';
import { color } from 'highcharts';

@Component({
  selector: 'app-doc-per-seg',
  templateUrl: './doc-per-seg.component.html',
  styleUrls: ['./doc-per-seg.component.scss']
})
export class DocPerSegComponent implements OnInit 
{
  docPerSeg: any[] = [];
  categories: any[] = [];

  dataPoints: any[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void 
  {
    this.dataService.getDocPerSeg().subscribe((response: any) => 
    {
        // Verificar se a resposta contém um array de dados
        if (response && response.rows && Array.isArray(response.rows)) 
        {
          this.docPerSeg = response.rows;
          this.dataPoints = this.docPerSeg.map((item: { segment: String, count: any; }) => Number(item.count));
          this.categories = this.docPerSeg.map((item: { segment: String, count: any; }) => String(item.segment));
          this.updateChart();
        } 
        else 
        {
          console.error('Resposta do serviço de sazonalidade inválida:', response);
        }
      },
      error => 
      {
        console.error('Erro ao obter dados do usuário', error);
      }
    ); 
  }

  chart = new Chart(
    {
      chart: 
      {
        type: '',
        height: '210px',
        spacing: [0, 0, 0 , 0]
      },
      title: {
        text: 'Documentos por Segmento',
        style: {
          fontSize: '16px',
          margin: '0px'
        },
      },
      xAxis: {
        categories: this.categories,
      },
      yAxis: {
        title: {
          text: 'Quantidade'
        }
      },
      credits:
      {
        enabled: false
      },
      legend:
      {
        enabled: false
      },
      series: 
      [
        {
          name: 'Documentos',
          type: 'bar',
          data: this.dataPoints,
          color: '#ed1ced'
        }
      ]
    });

  updateChart(): void
  {
    this.chart.ref$.subscribe(chartInstance => 
    {
      // Atualizar os dados da série no gráfico
      chartInstance.update(
      {
        series: 
        [
          {
            type: 'bar',
            data: this.dataPoints
          }
        ],
        xAxis:
        {
          categories: this.categories
        }
      });
    }); 
  }
}