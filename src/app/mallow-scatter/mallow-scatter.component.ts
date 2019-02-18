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

  private linex = [0,300];
  private liney = [60,100];



  // each point on the graph must have an x&y value
  private coords = this.xAxis.map((v, i) => ({ x: v, y: this.yAxis[i] }));


  private regCoords = this.xAxis.map((b,n) => ([b,this.yAxis[n]]));

  private lineCoords = this.linex.map((v, i) => ({ x: v, y: this.liney[i] }));

  
  

  // public result = regression('linear', this.coords);
  // public result = regression.linear([this.coords,{order: 1}]);


  public result = regression.linear([this.coords,{order: 1}]);
  
  
  public atest = [[3,5], [6,14], [34,56]];
  // public reg = regression('linear', this.atest );
  public reg = regression.linear(this.regCoords);


  // public lineChartLabelsScatter = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12'];
  public chartDetails = [{
    type: 'line',
    label: 'Scatter Data',
    showLine: false,
    backgroundColor: 'black',
    data:  this.coords
     
  },{
    type: 'line',
    label: 'Line Chart',
    showLine: true,
    fill: false,
    pointRadius: 0,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    data: this.lineCoords,
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
        beginAtZero: true
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

    // console.log("result:- " + this.result);
    console.log(this.coords);
    console.log(this.lineCoords);
    console.log(this.atest);
    console.log(this.reg);
    console.log(this.regCoords);

  }

}
