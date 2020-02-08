import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store, select } from '@ngrx/store';
import { ApplicationState } from '../store/reducer';

import { Observable, of } from "rxjs";
import { withLatestFrom, switchMap, map, catchError  } from 'rxjs/operators'

import { DataService } from '../services/data.service'

import { getSelectedSearchTerm } from '../store/selectors'

import * as actions from './actions'

@Injectable()
export class AppEffects {

  @Effect() 
    getStock = this.actions$.pipe(
    ofType(actions.GET_STOCK),
    withLatestFrom(
      this.store.pipe(
        select(getSelectedSearchTerm)
      )
    ),
    switchMap(([action, selectedSearchTerm]) =>
      this.dataService.getStock(selectedSearchTerm.symbol).pipe(
        map(data => new actions.getStockSuccess(data)),
        catchError(err => of(new actions.getStockError()))
      )
    )
  )

  constructor( 
    private actions$ : Actions, 
    private dataService : DataService,
    private store: Store<any> ) {
  }
}