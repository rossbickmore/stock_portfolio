import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./stock-pick.routing";
import { StockDisplayComponent } from "./stock-display/stock-display.component";
import { PortfolioDisplayComponent } from "./portfolio-display/portfolio-display.component";
import { StockPickComponent } from "./stock-pick.component";

import { SpinnerComponent } from './spinner/spinner.component' 


@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    StockPickComponent,
    StockDisplayComponent,
    PortfolioDisplayComponent,
    SpinnerComponent
  ]
})
export class StockPickModule {}
