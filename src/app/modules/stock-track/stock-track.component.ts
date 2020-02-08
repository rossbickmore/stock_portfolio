import { Component, OnInit } from '@angular/core';
import { StockService } from '../../stock.service';
import {Stock} from '../../stock'

@Component({
  selector: 'stock-track',
  templateUrl: './stock-track.component.html'
})
export class StockTrackComponent implements OnInit {
  options = [
    {raw: "profitMargin", english: "Profit Margin (raw)" },
    {raw: "returnOnEquity", english: "Return on Equity (raw)" },
    {raw: "price", english: "price" }
  ]
  // default to profit margin
  selectedOption = this.options[0]
  filteredStocks = this.filterStocksByMetric(this.selectedOption.raw, this.stockService.getPortfolio())
  maxValue = this.findTheMaxValue(this.selectedOption.raw, this.stockService.getPortfolio())

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit() {
  }

  filterStocksByMetric(metric: string, array: Stock[]) {
    this.filteredStocks = []
    array.forEach( stock => {
      let obj:any = {}
      obj.name = stock.name
      obj.value = stock[metric]
      this.filteredStocks.push(obj)
    })
    console.log(this.filteredStocks)
    return this.filteredStocks
  }

  findTheMaxValue(metric: string, array: Stock[]) {
    return array.sort( (a,b) => b[metric] - a[metric])[0][metric]
  }

  setOption(option) {
    this.selectedOption = option
    this.filteredStocks = this.filterStocksByMetric(this.selectedOption.raw, this.stockService.getPortfolio())
    this.maxValue = this.findTheMaxValue(this.selectedOption.raw, this.stockService.getPortfolio())
  }
}
