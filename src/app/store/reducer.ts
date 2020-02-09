import * as actions from './actions'
import { SearchTerm } from '../models/search-term'
import { Stock } from '../models/stock'
import { SEARCH_TERMS } from '../SEARCH_TERMS'

export interface ApplicationState {
  selectedSearchTerm: SearchTerm,
  searchTerms: SearchTerm[],
  stockSelected: Stock,
  portfolio: Stock[],
  data: undefined,
  loading: boolean,
  error: any
}

export let initialState = {
  selectedSearchTerm: undefined,
  searchTerms: SEARCH_TERMS,
  selectedStock: undefined,
  portfolio: [],
  data: undefined,
  loading: false,
  error: null
}


export function appReducer( state = initialState, { type, payload } ) {
  switch( type ) {
    case actions.SELECT_SEARCH_TERM:
      return Object.assign({}, state, {selectedSearchTerm: payload})
    case actions.GET_STOCK:
      return Object.assign({}, state, {loading: true, error: null})
    case actions.GET_STOCK_SUCCESS:
      return Object.assign({}, state, {data: payload, loading: false})
    case actions.GET_STOCK_ERROR:
      return Object.assign({}, state, {loading: false, error: "Error"})
    case actions.ADD_STOCK_TO_PORTFOLIO:
      return Object.assign({}, state, {portfolio: [...state.portfolio, payload]})
    default:
      return state;
  }
}