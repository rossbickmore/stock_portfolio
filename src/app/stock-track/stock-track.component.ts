import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {getPortfolio,  getProgressBarSelectedFilter, getProgressBarFilters, getProgressBarValues , getLineChartFilters, getLineChartSelectedFilter, getLineChartData, getLineChartLabels} from '../store/selectors'
import { Observable } from 'rxjs';
import { scan, map, pluck, tap, filter } from 'rxjs/operators'
import { Stock } from '../models/stock'
import * as actions from '../store/actions'

@Component({
  selector: 'stock-track',
  templateUrl: './stock-track.component.html'
})
export class StockTrackComponent implements OnInit {
  
  // For progress bars
  progressBarFilters$: Observable<string[]>
  progressBarSelectedFilter: Observable<string>
  maxValue$: Observable<Number>
  stockValues$: Observable<any[]>

  // For line chart
  lineChartFilters$: Observable<string[]>
  lineChartSelectedFilter$: Observable<string>
  lineChartData$: Observable<any[]>
  lineChartLabels$: Observable<string[]>

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.setUpProgressBars()
    this.setUpLineChart()
  }

  onSelectFilterButtonClicked(filter: string, chartType: string) {
    if (chartType = 'progressBar') {
      this.store.dispatch(new actions.selectProgressBarFilter(filter))
    }
    if (chartType = 'lineChart') {
      this.store.dispatch(new actions.selecLineChartFilter(filter))
    }
  }

  setUpProgressBars() {
    this.progressBarSelectedFilter = this.store.select(getProgressBarSelectedFilter)
    this.progressBarFilters$ = this.store.select(getProgressBarFilters)
    this.stockValues$ = this.store.select(getProgressBarValues)
    this.maxValue$ = this.stockValues$.pipe(
      map( values => {
        let valueArray = values.map( (val) => val.value)
        return Math.max(...valueArray)
      }),
    )
  }

  setUpLineChart() {
    this.lineChartSelectedFilter$ = this.store.select(getLineChartSelectedFilter)
    this.lineChartSelectedFilter$.subscribe( x => console.log(x))
    this.lineChartFilters$ = this.store.select(getLineChartFilters)
    this.lineChartData$ = this.store.select(getLineChartData)
    this.lineChartLabels$ = this.store.select(getLineChartLabels)
  }
}
