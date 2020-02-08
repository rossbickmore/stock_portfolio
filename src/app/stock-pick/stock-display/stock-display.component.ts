import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "stock-display",
  templateUrl: "./stock-display.component.html"
})
export class StockDisplayComponent implements OnInit {
  constructor(private stockService: DataService) {}
  @Input() stock;
  @Input() isLoading: boolean;
  ngOnInit() {}

}
