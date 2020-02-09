import { Component, OnInit, Input } from "@angular/core";
import { Stock } from '../../models/stock'

import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../store/reducer'
import { getPortfolio } from '../../store/selectors'
import * as actions from '../../store/actions'

@Component({
  selector: "portfolio-display",
  templateUrl: "./portfolio-display.component.html"
})
export class PortfolioDisplayComponent implements OnInit {
  constructor() {}
  
  @Input() portfolio$: Observable<Stock[]>

  ngOnInit() {
  }

}
