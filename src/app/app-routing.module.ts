import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { LineChartAComponent } from './line-chart-a/line-chart-a.component';
import { LineChartScatterComponent } from './line-chart-scatter/line-chart-scatter.component';
import { MallowScatterComponent} from './mallow-scatter/mallow-scatter.component';



const routes: Routes = [
  { path: 'line-chart-a', component: LineChartAComponent },
  { path: 'line-chart-scatter', component: LineChartScatterComponent },
  { path: 'mallow-scatter', component: MallowScatterComponent },
  { path: 'bar-chart', component: MyBarChartComponent },
  { path: 'doughnut-chart', component: MyDoughnutChartComponent },
  { path: 'radar-chart', component: MyRadarChartComponent },
  { path: 'pie-chart', component: MyPieChartComponent },
  { path: '**', component: MyBarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
