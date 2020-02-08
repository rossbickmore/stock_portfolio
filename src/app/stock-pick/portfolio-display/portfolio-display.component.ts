import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "portfolio-display",
  templateUrl: "./portfolio-display.component.html"
})
export class PortfolioDisplayComponent implements OnInit {
  constructor(private stockService: DataService) {}

  ngOnInit() {
  }

  deletePortfolio() {
  }
}
