import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service'
import { Stock } from '../stock'
import { SYMBOLS } from '../stock-symbol-list'

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  searchTerm: string
  stock: Stock
  portfolio: Stock[] = []
  symbols = SYMBOLS

  constructor(private stockService: StockService) { }

  ngOnInit() {
  }

  getStock(searchTerm: string) {
    this.stockService
      .getStock(searchTerm)
      .subscribe(response => 
        this.stock = {
          name: response.price.shortName,
          symbol: response.symbol,
          price: response.price.regularMarketTime
        }
      )
  }
  addToPortfolio() {
    this.portfolio.push(this.stock)
  }
}
