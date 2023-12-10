import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-type-seg',
  templateUrl: './type-seg.component.html',
  styleUrls: ['./type-seg.component.scss']
})
export class TypeSegComponent implements OnInit {

  typeSeg: any[] = [];
  chart: Chart;

  constructor(private dataService: DataService) {
    this.chart = this.initializeChart();
  }

  ngOnInit(): void {
    this.dataService.getTypeSeg().subscribe(
      (response: any) => {
        if (response && response.rows && Array.isArray(response.rows)) {
          this.typeSeg = response.rows;
          this.updateChartData();
        } else {
          console.error('Resposta do serviço de segmentos inválidos:', response);
        }
      },
      error => {
        console.error('Erro ao obter dados do usuário', error);
      }
    );
  }

  initializeChart(): Chart {
    return new Chart({
      chart: {
        type: 'pie',
        height: '210px',
        spacing: [0, 0, 0, 0]
      },
      title: {
        text: 'Segmentos',
        style: {
          fontSize: '16px',
          margin: '0px'
        },
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          center: ['50%', '50%'],
          dataLabels: {
            enabled: true
          },
          showInLegend: true,
          tooltip: {
            pointFormat: '{point.name}: {point.y} ({point.percentage:.1f}%)',
            headerFormat: ''
          }
        }
      },
      series: [{
        name: 'Segmentos',
        type: 'pie',
        data: []
      }]
    });
  }

  updateChartData(): void 
  {
    const dataPoints = this.typeSeg.map((item: { name: any, y: any }) => ({
      name: String(item.name),
      y: Number(item.y)
    }));

    this.chart.ref$.subscribe(chartInstance => {
      chartInstance.update({
        series: [{
          type: 'pie',
          data: dataPoints
        }]
      });
    });
  }
}
