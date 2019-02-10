import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.css']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    { data: [123, 231, 543, 34], label: '2017' },
    { data: [323, 431, 243, 344], label: '2018' }
  ];
  public radarChartType = 'radar';


  constructor() { }

  ngOnInit() {
  }

}
