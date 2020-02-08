export const GET_STOCK = "GET_STOCK";
export const GET_STOCK_SUCCESS = "GET_STOCK_SUCCESS";
export const GET_STOCK_ERROR = "GET_STOCK_ERROR";
export const SELECT_SEARCH_TERM = "SELECT_SEARCH_TERM"

import { SearchTerm } from '../models/search-term'

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

export type All = getStock | selectSearchTerm | getStockSuccess | getStockError;