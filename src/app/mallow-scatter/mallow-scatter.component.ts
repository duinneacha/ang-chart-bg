import { Component, OnInit } from '@angular/core';
import * as regression from 'regression';


@Component({
  selector: 'app-mallow-scatter',
  templateUrl: './mallow-scatter.component.html',
  styleUrls: ['./mallow-scatter.component.css']
})
export class MallowScatterComponent implements OnInit {


  private xAxis = [281, 246, 231, 198, 126, 69, 44, 54, 91, 117, 228, 286];
  private yAxis = [103.197, 89.849, 79.284, 68.074, 67.132, 76.098, 70.000, 68.571, 76.532, 84.565, 101.520, 100.337];

  // private xAxis = [171, 86, 65, 66, 102, 140, 169, 211, 284, 300, 295, 249, 125];
  // private yAxis = [49847, 45024, 44567, 46314, 44882, 44535, 51097, 50193, 54705, 55048, 51762, 50028, 48828];

  // private xAxis = [1015.961538, 1797.251908, 2581.332312, 2528.418217, 2477.310513, 1562.142857, 2429.595506, 803.2620321, 1064.819277, 1024.897959, 1877.802198, 399.0566038, 1611.09375, 935.5988858, 451.6496945, 2643.398438, 1459.961089, 2716.276596, 1447.766497, 879.8882682, 2061.1875];
  // private yAxis = [1070.210228, 1404.865644, 2127.008225, 2748.031642, 2039.259735, 1669.042685, 1583.336619, 914.4585886, 739.0246548, 983.3613126, 874.648541, 830.8902689, 953.1600829, 854.307989, 986.3469592, 1371.463273, 785.7132332, 2884.790698, 1986.585028, 1851.058874, 2263.834949];

  
  
 
  


  // Each point on the graph must have an x&y value in the format: { x: 999, y: 999 }
  private scatterCoordinates = this.xAxis.map((v, i) => ({ x: v, y: this.yAxis[i] }));


  // The coordinates need to be passed into the regression.js function as an array: [[999,999], [999,999] ...]
  private regressionCoordinates = this.xAxis.map((b,n) => ([b,this.yAxis[n]]));

  
  // Pass 
  public regressionObject = regression.linear(this.regressionCoordinates, {order: 2, precision: 5});
  private interceptLine = this.regressionObject.points.map(([xa, ya]) => ({x: xa, y: ya}));


  public chartDetails = [{
    type: 'line',
    label: 'Scatter Data',
    showLine: false,
    backgroundColor: 'black',
    data:  this.scatterCoordinates
     
  },{
    type: 'line',
    label: 'Line Chart',
    showLine: true,
    fill: false,
    pointRadius: 0,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    data: this.interceptLine,
  }
]


public lineChartTypeScatter = 'scatter';
  


public lineChartOptionsScatter = {

  scales: {

    xAxes: [{
      type: 'linear',
      position: '',
      scaleLabel: {
        labelString: 'Combined KWh',
        display: true
      },
      ticks: {
        beginAtZero: false
      }

    }],

    yAxes: [{
      type: 'linear',
      position: 'left',
      scaleLabel: {
        labelString: 'HDD Scale',
        display: true
      },
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

  constructor() { }

  ngOnInit() {

    console.log(this.regressionCoordinates);
    console.log(this.regressionObject);
  }

}
