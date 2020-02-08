import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./stock-track.routing";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";

import { HttpClientModule } from "@angular/common/http";

import { AlertModule } from "ngx-bootstrap";

import { NgxSpinnerModule } from "ngx-spinner";

import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ChartsModule } from "ng2-charts";
import { StockTrackComponent } from './stock-track.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    AlertModule.forRoot(),
    NgxSpinnerModule,
    MatAutocompleteModule,
    FontAwesomeModule,
    ChartsModule
  ],
  declarations: [
    LineChartComponent,
    ProgressBarComponent,
    StockTrackComponent
  ]
})
export class StockTrackModule {}
