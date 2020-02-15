import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ApplicationState } from './reducer'
import { select, Store } from '@ngrx/store';

export const getApplicationState = createFeatureSelector<ApplicationState>('applicationState')

export const getSearchTerms = createSelector(
  getApplicationState,
  state => state.searchTerms
);

export const getSelectedStock = createSelector(
  getApplicationState,
  state => state.selectedStock
);

export const getSelectedSearchTerm = createSelector(
  getApplicationState,
  state => state.selectedSearchTerm
);

export const getIsLoading = createSelector(
  getApplicationState,
  state => state.loading
);

export const getData = createSelector(
  getApplicationState,
  state => state.data
);

export const getPortfolio = createSelector(
  getApplicationState,
  state => state.portfolio
);