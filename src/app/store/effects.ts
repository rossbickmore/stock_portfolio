import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store, select } from '@ngrx/store';
import { ApplicationState } from '../store/reducer';

import { Observable, of } from "rxjs";
import { withLatestFrom, switchMap, map, catchError, tap  } from 'rxjs/operators'

import { DataService } from '../services/data.service'

import { getSelectedSearchTerm, getData } from '../store/selectors'

import * as actions from './actions'

@Injectable()
export class AppEffects {

  @Effect() 
    loadConfig = this.actions$.pipe(
    ofType(actions.LOAD_CONFIG),
    withLatestFrom(
      this.store.pipe(
        select(getSelectedSearchTerm)
      )
    ),
    switchMap(([action, selectedSearchTerm]) =>
      this.dataService.getStock(selectedSearchTerm).pipe(
        switchMap(data => [
          new actions.loadConfigSuccess(data),
          new actions.setStock(data),
        ]),
        catchError(err => of(new actions.loadConfigError()))
      )
    )
  )
  constructor( 
    private actions$ : Actions, 
    private dataService : DataService,
    private store: Store<any> ) {
  }
}