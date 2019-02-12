import { Component, OnInit } from '@angular/core';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-line-chart-scatter',
  templateUrl: './line-chart-scatter.component.html',
  styleUrls: ['./line-chart-scatter.component.css']
})
export class LineChartScatterComponent implements OnInit {

  private xAxis = [171, 86, 65, 66, 102, 140, 169, 211, 284, 300, 295, 249 ];
  private yAxis = [7727, 4305, 6226, 6380, 4948, 8000, 8542, 8431, 11654, 14831, 10301, 9589 ];

  // each point on the graph must have an x&y value
  private coords = this.xAxis.map( (v,i) => ({ x: v, y: this.yAxis[i] }) );

  public lineChartLabelsScatter = ['Q1', 'Q2', 'Q3', 'Q4'];
  public lineChartDataScatter = [{ 
    showLine: false, 
    backgroundColor: 'black', 
    data: this.coords,
    lineTension: 0.1, 
    label: 'Ssample Scatter Data' }]
    // { data: [{x: -10, y: 0}, {x: 40,y: 20}, {x: 30,y: 15}, {x: 1, y: 5}, {x: 12, y: 2}, {x: 23, y: 5}, {x: 1, y: 15}, {x: 23,y: 15}, {x: 33,y: 22}, {x: 12,y: 25}, {x: 23,y: 3}, {x: 11, y: 11}], label: '2017' },
    
    
    
  //   options: {
  //     scales: {
  //         xAxes: [{
  //             type: 'linear',
  //             position: 'bottom'
  //         }]},}
  //       }
  // ];

 
  // public lineChartOptionsScatter = {
  //   options: {
  //     scales: {
  //         xAxes: [{
  //             type: 'linear',
  //             position: 'bottom'
  //         }]
  //     }
  // }
  
  // }

public lineChartOptionsScatter = {
  tooltips: {
    mode: 'index',
    intersect: true
  },
  scales: {
    // xAxes: [{
    //   ticks: {
    //       beginAtZero: true,
    //       max: 8
    //   },
    //   type: 'linear',
    //   position: 'bottom'
    // }],
  //   yAxes: [{
  //     ticks: {
  //         beginAtZero: true,
  //         max: 16
  //     }
  // }]

    xAxes: [{
      ticks: {
        autoSkip: true,
        beginAtZero: false
      },
      type: 'linear',
      position: 'bottom',
      scaleLabel: {
        labelString: 'ADADADA',
        display: true
      }

    }],

    yAxes: [{
      type: 'linear',
      position: 'left',
      ticks: {
        beginAtZero: true
      }
    }]
}
  //   ticks: {
  //     beginAtZero: true,
    
  //   },
  //   type: 'linear'
  // }
}


  public lineChartTypeScatter = 'scatter';


  constructor() { }

  ngOnInit() {
  }

}


// { data: [ { x: 171, y: 7727 }, 
//   { x: 86, y: 4305 },
//   { x: 65, y: 6226 },
//   { x: 66, y: 6380 },
//   { x: 102, y: 4948 },
//   { x: 140, y: 8000 },
//   { x: 169, y: 8542 },
//   { x: 211, y: 8431 },
//   { x: 284, y: 11654 },
//   { x: 300, y: 14831 },
//   { x: 295, y: 10301 },
//   { x: 249, y: 9589 } ], label: '2017' },
