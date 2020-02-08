import { Component, OnInit } from "@angular/core";
import { StockService } from "../../services/stock.service";
import { Stock } from "../../stock";

@Component({
  selector: "portfolio-display",
  templateUrl: "./portfolio-display.component.html"
})
export class PortfolioDisplayComponent implements OnInit {
  portfolio: Stock[] = [];
  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.portfolio = this.stockService.getPortfolio();
  }

  deletePortfolio() {
    console.log("delete");
    this.stockService.deletePortfolio();
    this.portfolio = this.stockService.getPortfolio();
  }
}
