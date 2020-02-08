import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Stock } from "../../stock";

@Component({
  selector: "portfolio-display",
  templateUrl: "./portfolio-display.component.html"
})
export class PortfolioDisplayComponent implements OnInit {
  portfolio: Stock[] = [];
  constructor(private stockService: DataService) {}

  ngOnInit() {
    this.portfolio = this.stockService.getPortfolio();
  }

  deletePortfolio() {
    this.stockService.deletePortfolio();
    this.portfolio = this.stockService.getPortfolio();
  }
}
