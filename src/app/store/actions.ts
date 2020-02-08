export const GET_STOCK = "GET_STOCK";
export const GET_STOCK_SUCCESS = "GET_STOCK_SUCCESS";
export const GET_STOCK_ERROR = "GET_STOCK_ERROR";
export const SELECT_SEARCH_TERM = "SELECT_SEARCH_TERM"

export class getStock {
  readonly type = GET_STOCK

}

export class selectSearchTerm {
  readonly type = GET_STOCK
  constructor(public payload: string) {}
}

export type All = getStock | selectSearchTerm;