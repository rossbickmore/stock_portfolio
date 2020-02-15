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

export const getConfig = createSelector(
  getApplicationState,
  state => state.config
);

export const getIsLoading = createSelector(
  getConfig,
  config => config.loading
);

export const getData = createSelector(
  getConfig,
  config => config.data
);

export const getPortfolio = createSelector(
  getApplicationState,
  state => state.portfolio
);

export const getProgressBar = createSelector(
  getApplicationState,
  state => state.progressBar
);

export const getProgressBarSelectedFilter = createSelector(
  getProgressBar,
  progressBar => progressBar.selectedFilter
);

export const getProgressBarFilters = createSelector(
  getProgressBar,
  progressBar => progressBar.filters
);

export const getProgressBarValues = createSelector(
  getPortfolio,
  getProgressBarSelectedFilter,
  (portfolio, selectedFilter) => portfolio.map( (stock) => {
    return { name: stock.name, value: stock[selectedFilter] }
  })
);

