import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ApplicationState } from './reducer'
import { select, Store } from '@ngrx/store';

export const getApplicationState = createFeatureSelector<ApplicationState>('applicationState')

export const getSearchTerms = createSelector(
  getApplicationState,
  state => state.searchTerms
);