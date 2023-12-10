import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts'
import { DataService } from '../data.service';

@Component({
  selector: 'app-seasonality',
  templateUrl: './seasonality.component.html',
  styleUrls: ['./seasonality.component.scss']
})
export class SeasonalityComponent implements OnInit {
  seasonality: any[] = [];
  categories = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

  dataPoints: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void 
  {
    this.dataService.getSeasonality().subscribe(
      (response: any) => {
        // Verificar se a resposta contém um array de dados
        if (response && response.rows && Array.isArray(response.rows)) {
          this.seasonality = response.rows;
          this.dataPoints = this.seasonality.map((item: { count: any; }) => Number(item.count));
          this.updateChart();
        } else {
          console.error('Resposta do serviço de sazonalidade inválida:', response);
        }
      },
      error => {
        console.error('Erro ao obter dados do usuário', error);
      }
    );
  }

  chart = new Chart(
  {
    chart: 
    {
      type: 'line',
      height: '210px',
      spacing: [0, 0, 0 , 0]
    },
    title: {
      text: 'Sazonalidade',
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
        text: 'Documentos'
      }
    },
    credits: {
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
        type: 'line',
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
      chartInstance.update({
        series: [
          {
            type: 'line',
            data: this.dataPoints
          }
        ]
      });
    });
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}