import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {getPortfolio, getSelectedFilter, getFilters, getValues} from '../store/selectors'
import { Observable } from 'rxjs';
import { Stock } from '../models/stock'
import * as actions from '../store/actions'

@Component({
  selector: 'stock-track',
  templateUrl: './stock-track.component.html'
})
export class StockTrackComponent implements OnInit {
  
  // default to profit margin
  portfolio$: Observable<Stock[]>
  filters$: Observable<string[]>
  selectedFilter: Observable<string>
  maxValue$: Observable<Number>
  values$: Observable<Number[]>

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.selectedFilter = this.store.select(getSelectedFilter)
    this.filters$ = this.store.select(getFilters)
    this.portfolio$ = this.store.select(getPortfolio)
    this.setUpProgressBars()
  }

  onSelectFilterButtonClicked(filter: string) {
    this.store.dispatch(new actions.selectFilter(filter))
  }

  setUpProgressBars() {
    this.store.select(getValues).subscribe( val => console.log(val))
  }
}
