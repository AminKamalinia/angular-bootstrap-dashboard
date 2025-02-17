import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-chart-js',
    templateUrl: './chart-js.component.html',
    styleUrls: ['./chart-js.component.scss'],
    standalone: false
})
export class ChartJsComponent implements OnInit {

  public barChart: Chart;
  public pieChart: Chart;
  public areaChart: Chart;
  public lineChart: Chart;
  public radarChart: Chart;
  public doughnutChart: Chart;
  public polarAreaChart: Chart;
  public horizontalBarChart: Chart;

  public optionsForTrueScales: any;
  public optionsForFalseScales: any;

  constructor() {
    this.optionsForTrueScales = {
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    };

    this.optionsForFalseScales = {
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    };
  }

  ngOnInit(): void {
    this.lineChartInitializer();
    this.areaChartInitializer();
    this.barChartInitializer();
    this.horizontalBarChartInitializer();
    this.radarChartInitializer();
    this.polarAreaChartInitializer();
    this.doughnutChartInitializer();
    this.pieChartInitializer();
  }

  private lineChartInitializer(): void {
    const lineChart = document.getElementById('lineChart');
    this.lineChart = new Chart(lineChart, {
      type: 'line',
      data: {
        labels: ['test 0', 'test 1', 'test 2'],
        datasets: [
          {
            label: 'Series 0',
            data: [30, 400, 50],
            borderColor: '#3cba9f',
            fill: false
          },
          {
            label: 'Series 1',
            data: [90, 110, 570],
            borderColor: '#ffcc00',
            fill: false
          },
          {
            label: 'Series 2',
            data: [300, 55, 200],
            borderColor: '#ed0815',
            fill: false
          }
        ]
      },
      options: this.optionsForTrueScales
    });
  }

  private areaChartInitializer(): void {
    const areaChart = document.getElementById('areaChart');
    this.areaChart = new Chart(areaChart, {
      type: 'line',
      data: {
        labels: ['test 0', 'test 1', 'test 2'],
        datasets: [
          {
            label: 'Series 0',
            data: [30, 400, 50],
            borderColor: '#3cba9f',
            backgroundColor: '#3cba9f70',
            fill: true
          },
          {
            label: 'Series 1',
            data: [90, 110, 570],
            borderColor: '#ffcc00',
            backgroundColor: '#ffcc006e',
            fill: true
          },
          {
            label: 'Series 2',
            data: [300, 55, 200],
            borderColor: '#ed0815',
            backgroundColor: '#ed081578',
            fill: true
          }
        ]
      },
      options: this.optionsForTrueScales
    });
  }

  private barChartInitializer(): void {
    const barChart = document.getElementById('barChart');
    this.barChart = new Chart(barChart, {
      type: 'bar',
      data: {
        labels: ['test 0', 'test 1', 'test 2'],
        datasets: [
          {
            label: 'Series 0',
            data: [30, 400, 50],
            backgroundColor: '#3cba9f',
            fill: false
          },
          {
            label: 'Series 1',
            data: [90, 110, 570],
            backgroundColor: '#ffcc00',
            fill: false
          },
          {
            label: 'Series 2',
            data: [300, 55, 200],
            backgroundColor: '#ed0815',
            fill: false
          }
        ]
      },
      options: this.optionsForTrueScales
    });
  }

  private horizontalBarChartInitializer(): void {
    const horizontalBarChart = document.getElementById('horizontalBarChart');
    this.horizontalBarChart = new Chart(horizontalBarChart, {
      type: 'horizontalBar',
      data: {
        labels: ['test 0', 'test 1', 'test 2'],
        datasets: [
          {
            label: 'Series 0',
            data: [30, 400, 50],
            backgroundColor: '#3cba9f',
            fill: false
          },
          {
            label: 'Series 1',
            data: [90, 110, 570],
            backgroundColor: '#ffcc00',
            fill: false
          },
          {
            label: 'Series 2',
            data: [300, 55, 200],
            backgroundColor: '#ed0815',
            fill: false
          }
        ]
      },
      options: this.optionsForTrueScales
    });
  }

  private radarChartInitializer(): void {
    const radarChart = document.getElementById('radarChart');
    this.radarChart = new Chart(radarChart, {
      type: 'radar',
      data: {
        labels: ['test 0', 'test 1', 'test 2'],
        datasets: [
          {
            label: 'Series 0',
            data: [450, 300, 700],
            borderColor: '#3cba9f',
            backgroundColor: '#3cba9f70',
            fill: true
          },
          {
            label: 'Series 1',
            data: [700, 110, 570],
            borderColor: '#ffcc00',
            backgroundColor: '#ffcc006e',
            fill: true
          },
          {
            label: 'Series 2',
            data: [200, 400, 800],
            borderColor: '#ed0815',
            backgroundColor: '#ed081578',
            fill: true
          }
        ]
      },
      options: this.optionsForFalseScales
    });
  }

  private polarAreaChartInitializer(): void {
    const polarAreaChart = document.getElementById('polarAreaChart');
    this.polarAreaChart = new Chart(polarAreaChart, {
      type: 'polarArea',
      data: {
        labels: ['test 0', 'test 1', 'test 2'],
        datasets: [
          {
            data: [700, 300, 570],
            backgroundColor: [
              '#3cba9f',
              '#ffcc00',
              '#ed0815'],
            fill: true
          }
        ]
      },
      options: this.optionsForFalseScales
    });
  }

  private doughnutChartInitializer(): void {
    const doughnutChart = document.getElementById('doughnutChart');
    this.doughnutChart = new Chart(doughnutChart, {
      type: 'doughnut',
      data: {
        labels: ['test 0', 'test 1', 'test 2'],
        datasets: [
          {
            data: [70, 110, 220],
            backgroundColor: [
              '#3cba9f',
              '#ffcc00',
              '#ed0815'],
            fill: true
          }
        ]
      },
      options: this.optionsForFalseScales
    });
  }

  private pieChartInitializer(): void {
    const pieChart = document.getElementById('pieChart');
    this.pieChart = new Chart(pieChart, {
      type: 'pie',
      data: {
        labels: ['test 0', 'test 1', 'test 2'],
        datasets: [
          {
            data: [70, 110, 220],
            backgroundColor: [
              '#3cba9f',
              '#ffcc00',
              '#ed0815'],
            fill: true
          }
        ]
      },
      options: this.optionsForFalseScales
    });
  }
}
