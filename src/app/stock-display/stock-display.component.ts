import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock'

@Component({
  selector: 'stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {

  portfolio: Stock[] = []
  
  @Input() stock: Stock;

  constructor() { }

  ngOnInit() {
  }

  addToPortfolio() {
    this.portfolio.push(this.stock)
  }

}
