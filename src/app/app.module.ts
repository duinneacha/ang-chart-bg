import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
// import {regression} from 'regression';

// import { Regression } from './../../node_modules/regression/src/regression';
//import { Regression } from '../../node_modules/regression/src/regression';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { LineChartAComponent } from './line-chart-a/line-chart-a.component';
import { LineChartScatterComponent } from './line-chart-scatter/line-chart-scatter.component';
import { MallowScatterComponent } from './mallow-scatter/mallow-scatter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    LineChartAComponent,
    LineChartScatterComponent,
    MallowScatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
