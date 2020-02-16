export const GET_STOCK = "GET_STOCK";
export const GET_STOCK_SUCCESS = "GET_STOCK_SUCCESS";
export const GET_STOCK_ERROR = "GET_STOCK_ERROR";
export const SELECT_SEARCH_TERM = "SELECT_SEARCH_TERM"
export const ADD_STOCK_TO_PORTFOLIO = "ADD_STOCK_TO_PORTFOLIO"
export const SELECT_PROGRESS_BAR_FILTER = "SELECT_PROGRESS_BAR_FILTER"
export const SELECT_LINE_CHART_FILTER = "SELECT_LINE_CHART_FILTER"

import { SearchTerm } from '../models/search-term'
import { Stock } from '../models/stock'

export class getStock {
  readonly type = GET_STOCK
}

export class selectSearchTerm {
  readonly type = SELECT_SEARCH_TERM 
  constructor(public payload: SearchTerm) {}
}

export class getStockSuccess{
  readonly type = GET_STOCK_SUCCESS
  constructor(public payload: any) {}
}

export class getStockError{
  readonly type = GET_STOCK_ERROR
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



export type All = getStock | selectSearchTerm | getStockSuccess | getStockError | addStockToPortfolio | selectProgressBarFilter | selecLineChartFilter;