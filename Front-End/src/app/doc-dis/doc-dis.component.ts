import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-doc-dis',
  templateUrl: './doc-dis.component.html',
  styleUrls: ['./doc-dis.component.scss']
})
export class DocDisComponent implements OnInit {
  docDis: any[] = [];
  chart: Chart;

  constructor(private dataService: DataService) {
    this.chart = this.initializeChart();
  }

  ngOnInit(): void {
    this.dataService.getDocDis().subscribe(
      (response: any) => {
        if (response && response.rows && Array.isArray(response.rows)) {
          this.docDis = response.rows;
          this.updateChartData();
        } else {
          console.error('Resposta do serviço de tipos de documentos inválidos:', response);
        }
      },
      error => {
        console.error('Erro ao obter dados de documentos', error);
      }
    );
  }

  initializeChart(): Chart {
    return new Chart({
      chart: {
        type: 'pie',
        height: '210px',
        spacing: [0, 0, 0, 0],
        style:
        {
          
        }
      },
      title: {
        text: 'Tipos de Documentos',
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
            enabled: true,
            format: '{point.name}: {point.percentage:.1f}%'
          },
          showInLegend: true,
          tooltip: {
            pointFormat: '<b>{point.name}:</b> {point.y} ({point.percentage:.1f}%)',
            headerFormat: ''
          }
        }
      },
      series: [{
        name: 'Tipo de Documento',
        type: 'pie',
        data: []
      }]
    });
  }

  updateChartData(): void {
    const dataPoints = this.docDis.map((item: { doc_type: any, count: any }) => ({
      name: String(item.doc_type),
      y: Number(item.count)
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
