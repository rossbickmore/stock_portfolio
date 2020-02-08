import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./stock-pick.routing";
import { StockDisplayComponent } from "./stock-display/stock-display.component";
import { PortfolioDisplayComponent } from "./portfolio-display/portfolio-display.component";
import { StockPickComponent } from "./stock-pick.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxSpinnerModule } from "ngx-spinner";

import { MatAutocompleteModule } from "@angular/material/autocomplete";


@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  declarations: [
    StockPickComponent,
    StockDisplayComponent,
    PortfolioDisplayComponent
  ]
})
export class StockPickModule {}
