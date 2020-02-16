import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock'
import { SearchTerm } from '../models/search-term'

import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../store/reducer'
import { getSearchTerms, getSelectedStock, getIsLoading, getPortfolio, getSelectedSearchTerm, getData, getApplicationState   } from '../store/selectors'
import * as actions from '../store/actions'

import { Observable } from 'rxjs'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'stock-pick',
  templateUrl: './stock-pick.component.html',
})

export class StockPickComponent implements OnInit {
  
  selectedSearchTerm$: Observable<SearchTerm>
  searchTerms$: Observable<SearchTerm[]>
  isLoading$: Observable<boolean>
  selectedStock$: Observable<Stock>
  portfolio$: Observable<Stock[]>
  myControl = new FormControl();
  filteredOptions$: Observable<string[]>;
  portfolio: Observable<Stock[]>;

  constructor(
    private store: Store<ApplicationState>
  ) { }

  ngOnInit() {
    this.searchTerms$ = this.store.pipe(select(getSearchTerms))
    this.selectedSearchTerm$ = this.store.pipe(select(getSelectedSearchTerm))
    this.isLoading$ = this.store.pipe(select(getIsLoading))
    this.portfolio$ = this.store.pipe(select(getPortfolio))
    this.selectedStock$ = this.store.pipe(select(getSelectedStock))
  }

  onSelectStockButtonclicked(searchTerm) {
    this.store.dispatch( new actions.selectSearchTerm(searchTerm.symbol))
    this.store.dispatch( new actions.loadConfig())
  }
}
