import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock'
import { StockService} from '../stock.service'

@Component({
  selector: 'stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {

  portfolio: Stock[] = []

  @Input() stock: Stock;

  constructor(private stockService: StockService) { }

  ngOnInit() {
  }

  addToPortfolio() {
    this.portfolio.push(this.stock)
  }

}
