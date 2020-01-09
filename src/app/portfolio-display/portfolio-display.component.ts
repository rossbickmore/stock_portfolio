import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service'
import { Stock } from '../stock'

@Component({
  selector: 'portfolio-display',
  templateUrl: './portfolio-display.component.html',
})
export class PortfolioDisplayComponent implements OnInit {
  portfolio: Stock[] = []
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.portfolio = this.stockService.getPortfolio()
  }

}
