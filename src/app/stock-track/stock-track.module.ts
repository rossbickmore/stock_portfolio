import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./stock-track.routing";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";

import { ChartsModule } from "ng2-charts";
import { StockTrackComponent } from './stock-track.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ChartsModule
  ],
  declarations: [
    LineChartComponent,
    ProgressBarComponent,
    StockTrackComponent
  ]
})
export class StockTrackModule {}
