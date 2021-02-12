import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts.src';
import highcharts3D from 'highcharts/highcharts-3d.src';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {
  constructor() {
    highcharts3D(Highcharts);
  }

  ngOnInit(): void {
    this.lineChart();
    this.areaChart();
    this.barChart();
    this.horizontalBarChart();
    this.pieChart();
    this.dynamicUpdateChart();
    this.pieDonutChart();
    this.barChart3d();
  }

  private lineChart(): void {
    let chartOptions: any = {

      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },

      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },

      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2017'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    };
    Highcharts.chart('lineChart', chartOptions);
  }

  private areaChart(): void {
    let chartOptions: any = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Area chart with negative values'
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      credits: {
        enabled: true
      },
      series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
      }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    };
    Highcharts.chart('areaChart', chartOptions);
  }

  private barChart(): void {
    let chartOptions: any = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Average Rainfall'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

      }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

      }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

      }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

      }]
    };
    Highcharts.chart('barChart', chartOptions);
  }

  private horizontalBarChart(): void {
    let chartOptions: any = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
      }, {
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
      }]
    };
    Highcharts.chart('horizontalBarChart', chartOptions);
  }

  private pieChart(): void {
    let chartOptions: any = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Browser market shares. January, 2018'
      },
      subtitle: {
        text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },

      accessibility: {
        announceNewData: {
          enabled: true
        },
        point: {
          valueSuffix: '%'
        }
      },

      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            {
              name: "Chrome",
              y: 62.74,
              drilldown: "Chrome"
            },
            {
              name: "Firefox",
              y: 10.57,
              drilldown: "Firefox"
            },
            {
              name: "Internet Explorer",
              y: 7.23,
              drilldown: "Internet Explorer"
            },
            {
              name: "Safari",
              y: 5.58,
              drilldown: "Safari"
            },
            {
              name: "Edge",
              y: 4.02,
              drilldown: "Edge"
            },
            {
              name: "Opera",
              y: 1.92,
              drilldown: "Opera"
            },
            {
              name: "Other",
              y: 7.62,
              drilldown: null
            }
          ]
        }
      ],
      drilldown: {
        series: [
          {
            name: "Chrome",
            id: "Chrome",
            data: [
              [
                "v65.0",
                0.1
              ],
              [
                "v64.0",
                1.3
              ],
              [
                "v63.0",
                53.02
              ],
              [
                "v62.0",
                1.4
              ],
              [
                "v61.0",
                0.88
              ],
              [
                "v60.0",
                0.56
              ],
              [
                "v59.0",
                0.45
              ],
              [
                "v58.0",
                0.49
              ],
              [
                "v57.0",
                0.32
              ],
              [
                "v56.0",
                0.29
              ],
              [
                "v55.0",
                0.79
              ],
              [
                "v54.0",
                0.18
              ],
              [
                "v51.0",
                0.13
              ],
              [
                "v49.0",
                2.16
              ],
              [
                "v48.0",
                0.13
              ],
              [
                "v47.0",
                0.11
              ],
              [
                "v43.0",
                0.17
              ],
              [
                "v29.0",
                0.26
              ]
            ]
          },
          {
            name: "Firefox",
            id: "Firefox",
            data: [
              [
                "v58.0",
                1.02
              ],
              [
                "v57.0",
                7.36
              ],
              [
                "v56.0",
                0.35
              ],
              [
                "v55.0",
                0.11
              ],
              [
                "v54.0",
                0.1
              ],
              [
                "v52.0",
                0.95
              ],
              [
                "v51.0",
                0.15
              ],
              [
                "v50.0",
                0.1
              ],
              [
                "v48.0",
                0.31
              ],
              [
                "v47.0",
                0.12
              ]
            ]
          },
          {
            name: "Internet Explorer",
            id: "Internet Explorer",
            data: [
              [
                "v11.0",
                6.2
              ],
              [
                "v10.0",
                0.29
              ],
              [
                "v9.0",
                0.27
              ],
              [
                "v8.0",
                0.47
              ]
            ]
          },
          {
            name: "Safari",
            id: "Safari",
            data: [
              [
                "v11.0",
                3.39
              ],
              [
                "v10.1",
                0.96
              ],
              [
                "v10.0",
                0.36
              ],
              [
                "v9.1",
                0.54
              ],
              [
                "v9.0",
                0.13
              ],
              [
                "v5.1",
                0.2
              ]
            ]
          },
          {
            name: "Edge",
            id: "Edge",
            data: [
              [
                "v16",
                2.6
              ],
              [
                "v15",
                0.92
              ],
              [
                "v14",
                0.4
              ],
              [
                "v13",
                0.1
              ]
            ]
          },
          {
            name: "Opera",
            id: "Opera",
            data: [
              [
                "v50.0",
                0.96
              ],
              [
                "v49.0",
                0.82
              ],
              [
                "v12.1",
                0.14
              ]
            ]
          }
        ]
      }
    };
    Highcharts.chart('pieChart', chartOptions);
  }

  private dynamicUpdateChart(): void {
    let chartOptions: any = {
      chart: {
        type: 'spline',
        animation: Highcharts.SVGElement, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {

            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
              var x = (new Date()).getTime(), // current time
                y = Math.random();
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },

      time: {
        useUTC: false
      },

      title: {
        text: 'Live random data'
      },

      accessibility: {
        announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: function (allSeries, newSeries, newPoint) {
            if (newPoint) {
              return 'New point added. Value: ' + newPoint.y;
            }
            return false;
          }
        }
      },

      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },

      yAxis: {
        title: {
          text: 'Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },

      legend: {
        enabled: false
      },

      exporting: {
        enabled: false
      },

      series: [{
        name: 'Random data',
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random()
            });
          }
          return data;
        }())
      }]
    };
    Highcharts.chart('dynamicUpdateChart', chartOptions);
  }

  private pieDonutChart(): void {
    let chartOptions: any = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45
        }
      },
      title: {
        text: 'Contents of Highsoft\'s weekly fruit delivery'
      },
      subtitle: {
        text: '3D donut in Highcharts'
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 45
        }
      },
      series: [{
        name: 'Delivered amount',
        data: [
          ['Bananas', 8],
          ['Kiwi', 3],
          ['Mixed nuts', 1],
          ['Oranges', 6],
          ['Apples', 8],
          ['Pears', 4],
          ['Clementines', 4],
          ['Reddish (bag)', 1],
          ['Grapes (bunch)', 1]
        ]
      }]
    };
    Highcharts.chart('pieDonutChart', chartOptions);
  }

  private barChart3d(): void {
    let chartOptions: any = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70
        }
      },
      title: {
        text: '3D chart with null values'
      },
      subtitle: {
        text: 'Notice the difference between a 0 value and a null point'
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      xAxis: {
        categories: Highcharts.getOptions().lang.shortMonths,
        labels: {
          skew3d: true,
          style: {
            fontSize: '16px'
          }
        }
      },
      yAxis: {
        title: {
          text: null
        }
      },
      series: [{
        name: 'Sales',
        data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3]
      }]
    };
    Highcharts.chart('barChart3d', chartOptions);
  }
}
