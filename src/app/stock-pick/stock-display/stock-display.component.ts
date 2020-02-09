import { Component, OnInit, Input } from "@angular/core";

import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../store/reducer'
import { getSearchTerms, getSelectedSearchTerm, getIsLoading, getData } from '../../store/selectors'
import * as actions from '../../store/actions'

@Component({
  selector: "stock-display",
  templateUrl: "./stock-display.component.html"
})
export class StockDisplayComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {}
  @Input() stock;
  @Input() isLoading: boolean;
  ngOnInit() {}

  addToPortfolio() {
    this.store.dispatch( new actions.addStockToPortfolio(this.stock))
  }
}
