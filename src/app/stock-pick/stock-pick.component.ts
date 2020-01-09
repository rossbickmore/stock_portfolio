import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service'
import { Stock } from '../stock'
import { STOCKS, SYMBOLS } from '../stock-symbol-list'
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import {FormControl} from '@angular/forms';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'stock-pick',
  templateUrl: './stock-pick.component.html',
})
export class StockPickComponent implements OnInit {
  searchTerm: string = "AAPL"
  exampleStocks = STOCKS
  stockData: any
  loading: boolean
  source$: Observable<any>
  symbols: string[] = SYMBOLS
  control = new FormControl();
  filteredSymbols: Observable<string[]>
  stock: Stock

  constructor(
    private stockService: StockService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.filteredSymbols = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.getStock(this.searchTerm)
  }

  private _filter(value: string): string[] {
    return this.symbols.filter(symbol => symbol.includes(value));
  }

  getStock(searchTerm: string) {
    console.log(searchTerm)
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

}
