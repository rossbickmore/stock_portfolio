import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Stock } from "../../stock";

@Component({
  selector: "stock-display",
  templateUrl: "./stock-display.component.html"
})
export class StockDisplayComponent implements OnInit {
  constructor(private stockService: DataService) {}
  @Input() stock: Stock;

  ngOnInit() {}

  addToPortfolio() {
    this.stockService.addToPortfolio(this.stock);
  }
}