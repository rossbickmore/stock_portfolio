export const LOAD_CONFIG = "LOAD_CONFIG";
export const LOAD_CONFIG_SUCCESS = "LOAD_CONFIG_SUCCESS";
export const LOAD_CONFIG_ERROR = "LOAD_CONFIG_ERROR";
export const SELECT_SEARCH_TERM = "SELECT_SEARCH_TERM"
export const ADD_STOCK_TO_PORTFOLIO = "ADD_STOCK_TO_PORTFOLIO"
export const SELECT_PROGRESS_BAR_FILTER = "SELECT_PROGRESS_BAR_FILTER"
export const SELECT_LINE_CHART_FILTER = "SELECT_LINE_CHART_FILTER"
export const SET_STOCK = "SET_STOCK"

import { SearchTerm } from '../models/search-term'
import { Stock } from '../models/stock'

export class selectSearchTerm {
  readonly type = SELECT_SEARCH_TERM 
  constructor(public payload: SearchTerm) {}
}

export class setStock {
  readonly type = SET_STOCK
  constructor(public payload: any) {}
}


export class loadConfig {
  readonly type = LOAD_CONFIG
}

export class loadConfigSuccess{
  readonly type = LOAD_CONFIG_SUCCESS
  constructor(public payload: any) {}
}

export class loadConfigError{
  readonly type = LOAD_CONFIG_ERROR
}

export class addStockToPortfolio{
  readonly type = ADD_STOCK_TO_PORTFOLIO
  constructor(public payload: Stock) {}
}

export class selectProgressBarFilter {
  readonly type = SELECT_PROGRESS_BAR_FILTER
  constructor(public payload: string) {}
}

export class selecLineChartFilter {
  readonly type = SELECT_LINE_CHART_FILTER
  constructor(public payload: string) {}
}



export type All = loadConfig | selectSearchTerm | loadConfigSuccess | loadConfigSuccess | addStockToPortfolio | selectProgressBarFilter | selecLineChartFilter | setStock;