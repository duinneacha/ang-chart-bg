import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart-a',
  templateUrl: './line-chart-a.component.html',
  styleUrls: ['./line-chart-a.component.css']
})
export class LineChartAComponent implements OnInit {

  
//  Elec = [160092, 146177, 155827, 125807, 124253, 123216, 128177, 119955, 124437, 129675, 128465, 124820, 133603, 131010, 128671, 122492, 113237, 103523, 101432, 105042, 106997, 111605, 126611, 133033, 143074, 119539, 124098, 105285, 111292, 107663, 106199, 109127, 107808, 115854]
//  Gas = [243544, 191957, 176568, 84213, 66248, 42974, 32267, 30632, 41294, 69272, 98168, 139115, 213080, 178696, 155770, 133459, 38998, 6406, 7707, 5460, 7402, 66685, 159558, 164461, 173953, 142705, 108339, 65268, 42105, 6594, 4883, 5859, 8211, 69762]
  
  

  // public lineChartLabelsA = ['Q1', 'Q2', 'Q3', 'Q4'];

  public lineChartLabelsA = ["01/01/2015", "01/02/2015", "01/03/2015", "01/04/2015", "01/05/2015", "01/06/2015", "01/07/2015", "01/08/2015", "01/09/2015", "01/10/2015", "01/11/2015", "01/12/2015", "01/01/2016", "01/02/2016", "01/03/2016", "01/04/2016", "01/05/2016", "01/06/2016", "01/07/2016", "01/08/2016", "01/09/2016", "01/10/2016", "01/11/2016", "01/12/2016", "01/01/2017", "01/02/2017", "01/03/2017", "01/04/2017", "01/05/2017", "01/06/2017", "01/07/2017", "01/08/2017", "01/09/2017", "01/10/2017"]
  public lineChartDataA = [
    { data: [160092, 146177, 155827, 125807, 124253, 123216, 128177, 119955, 124437, 129675, 128465, 124820, 133603, 131010, 128671, 122492, 113237, 103523, 101432, 105042, 106997, 111605, 126611, 133033, 143074, 119539, 124098, 105285, 111292, 107663, 106199, 109127, 107808, 115854], label: 'Electric'},
    { data: [243544, 191957, 176568, 84213, 66248, 42974, 32267, 30632, 41294, 69272, 98168, 139115, 213080, 178696, 155770, 133459, 38998, 6406, 7707, 5460, 7402, 66685, 159558, 164461, 173953, 142705, 108339, 65268, 42105, 6594, 4883, 5859, 8211, 69762], label: 'Gas' }
    
  ];
  public lineChartTypeA = 'line';

  public lineChartOptionsA:any = {
    responsive: true
    ,
   
    // UnCommenting this will provide straighter lines on the line graph
  //   elements: {
  //     line: {
  //         tension: 0
      
  //     }
  // }
  };

  public lineChartColorsA:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
    // ,
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];



  constructor() { }

  ngOnInit() {
  }

}
