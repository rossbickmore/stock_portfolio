import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Stock } from '../models/stock'
import { SearchTerm } from '../models/search-term'

import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../store/reducer'
import { getSearchTerms, getSelectedSearchTerm, getIsLoading, getData } from '../store/selectors'
import * as actions from '../store/actions'

import { Observable } from 'rxjs'

@Component({
  selector: 'stock-pick',
  templateUrl: './stock-pick.component.html',
})
export class StockPickComponent implements OnInit {
  
  selectedSearchTerm$: Observable<SearchTerm>
  searchTerms$: Observable<SearchTerm[]>
  isLoading$: Observable<boolean>
  data: any
  constructor(
    private store: Store<ApplicationState>
  ) { }

  ngOnInit(): void {
    this.searchTerms$ = this.store.pipe(select(getSearchTerms))
    this.isLoading$ = this.store.pipe(select(getIsLoading))
  }

  selectSearchTerm(searchTerm: SearchTerm): void {
    this.store.dispatch( new actions.selectSearchTerm(searchTerm))
    this.selectedSearchTerm$ = this.store.pipe(select(getSelectedSearchTerm))
    this.isLoading$ = this.store.pipe(select(getIsLoading))
    this.store.dispatch( new actions.getStock())
    this.store.pipe(select(getData)).subscribe( data => console.log(data))
  }
  
}
