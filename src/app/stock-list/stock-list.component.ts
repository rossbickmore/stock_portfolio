import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service'
import { Stock } from '../stock'
import { SYMBOLS } from '../stock-symbol-list'
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

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
  stockData: any
  loading: boolean
  source$: Observable<any>
  
  constructor(
    private stockService: StockService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  getStock(searchTerm: string) {
    this.spinner.show()
    this.source$ = this.stockService.getStock(searchTerm).pipe(share())
    this.source$
    .subscribe( val => {
      this.spinner.hide();
    })
    this.source$
      .subscribe(res => 
        this.stock = {
          name: res.quoteType.shortName,
          symbol: res.quoteType.symbol,
          price: res.summaryDetail.previousClose.raw,
          sector: res.summaryProfile.sector,
          industry: res.summaryProfile.industry,
          description: res.summaryProfile.longBusinessSummary,
          recommendation: res.financialData.recommendationKey,
          website: res.summaryProfile.website
        }
      )
  }

  addToPortfolio() {
    this.portfolio.push(this.stock)
  }
}
