import { Component, OnInit } from '@angular/core';
import * as regression from 'regression';

@Component({
  selector: 'app-mallow-scatter',
  templateUrl: './mallow-scatter.component.html',
  styleUrls: ['./mallow-scatter.component.css']
})
export class MallowScatterComponent implements OnInit {


  private xAxis = [281, 246, 231, 198, 126, 69, 44, 54, 91, 117, 228, 286 ];
  private yAxis = [103.197, 89.849, 79.284, 68.074, 67.132, 76.098, 70.000, 68.571, 76.532, 84.565, 101.520, 100.337 ];

  // each point on the graph must have an x&y value
  private coords = this.xAxis.map( (v,i) => ({ x: v, y: this.yAxis[i] }) );

  


  // public result = regression('linear', this.coords);
  public result = regression.linear([this.coords]);
  public num1:number = this.result.equation[0];
  public num2:number = this.result.equation[1];
  public num3 = this.result.equation[2];
  public num4 = this.result.equation[3];
  //console(result);


  public lineChartLabelsScatter = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12'];
  public lineChartDataScatter = [{ 
    showLine: false, 
    backgroundColor: 'black', 
    data: this.coords,
    lineTension: 0.1, 
    label: 'Mallow Scatter Data' }]

    
public lineChartOptionsScatter = {
  tooltips: {
    mode: 'index',
    intersect: true
  },
  scales: {

    xAxes: [{
      ticks: {
        autoSkip: true,
        beginAtZero: false,
        scaleLabel: {
          labelString: 'HDD',
          display: true
        }
      },
      type: 'linear',
      position: 'bottom',
      scaleLabel: {
        labelString: 'Combined KWh',
        display: true
      }

    }],

    yAxes: [{
      type: 'linear',
      position: 'left',
      scaleLabel: {
        labelString: 'HDD',
        display: true
      },
      ticks: {
        beginAtZero: true
      }
    }]
}
  
}


  public lineChartTypeScatter = 'scatter';


  
  constructor() { }

  ngOnInit() {
  }

}
