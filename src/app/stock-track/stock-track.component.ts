import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {getPortfolio,  getProgressBarSelectedFilter, getProgressBarFilters, getProgressBarValues} from '../store/selectors'
import { Observable } from 'rxjs';
import { scan, map, pluck, tap, filter } from 'rxjs/operators'
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
  stockValues$: Observable<any[]>

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.selectedFilter = this.store.select(getProgressBarSelectedFilter)
    this.filters$ = this.store.select(getProgressBarFilters)
    this.portfolio$ = this.store.select(getPortfolio)
    this.setUpProgressBars()
  }

  onSelectFilterButtonClicked(filter: string) {
    this.store.dispatch(new actions.selectProgressBarFilter(filter))
  }

  setUpProgressBars() {
    this.stockValues$ = this.store.select(getProgressBarValues)
    this.maxValue$ = this.stockValues$.pipe(
      map( values => {
        let valueArray = values.map( (val) => val.value)
        return Math.max(...valueArray)
      }),
      tap( val => console.log(val))
    )
  }
}
