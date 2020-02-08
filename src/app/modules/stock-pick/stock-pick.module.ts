import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./stock-pick.routing";
import { StockDisplayComponent } from "./stock-display/stock-display.component";
import { PortfolioDisplayComponent } from "./portfolio-display/portfolio-display.component";
import { StockPickComponent } from "./stock-pick.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AlertModule } from "ngx-bootstrap";

import { NgxSpinnerModule } from "ngx-spinner";

import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ChartsModule } from "ng2-charts";

@NgModule({
  imports: [
    CommonModule,
    routing,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FontAwesomeModule,
    ChartsModule
  ],
  declarations: [
    StockPickComponent,
    StockDisplayComponent,
    PortfolioDisplayComponent
  ]
})
export class StockPickModule {}
