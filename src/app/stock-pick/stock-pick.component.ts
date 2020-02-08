import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Stock } from '../models/stock'
import { SearchTerm } from '../models/search-term'
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../store/reducer'
import { getSearchTerms } from '../store/selectors'

import { Observable } from 'rxjs'

@Component({
  selector: 'stock-pick',
  templateUrl: './stock-pick.component.html',
})
export class StockPickComponent implements OnInit {
  
  selectedSearchTerm: SearchTerm
  searchTerms$: Observable<SearchTerm[]>

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.searchTerms$ =this.store.pipe(select(getSearchTerms))
  }
  
  
  getStock(searchTerm: string) {
   console.log('hello')
  }

}
