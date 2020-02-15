import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock'
import { SearchTerm } from '../models/search-term'

import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../store/reducer'
import { getSearchTerms, getSelectedStock, getIsLoading, getPortfolio } from '../store/selectors'
import * as actions from '../store/actions'

import { SYMBOLS } from '../SEARCH_TERMS'
import { Observable } from 'rxjs'
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'stock-pick',
  templateUrl: './stock-pick.component.html',
})

export class StockPickComponent implements OnInit {
  
  selectedSearchTerm$: Observable<SearchTerm>
  searchTerms$: Observable<SearchTerm[]>
  isLoading$: Observable<boolean>
  selectedStock: Stock
  portfolio$: Observable<Stock[]>

  myControl = new FormControl();
  options: string[] = SYMBOLS
  filteredOptions: Observable<string[]>;
  portfolio: Observable<Stock[]>;
  constructor(
    private store: Store<ApplicationState>
  ) { }

  ngOnInit() {
    this.searchTerms$ = this.store.pipe(select(getSearchTerms))
    this.isLoading$ = this.store.pipe(select(getIsLoading))
    this.portfolio$ = this.store.pipe(select(getPortfolio))
    this.store.pipe(select(getSelectedStock)).subscribe( data => this.selectedStock = data)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
