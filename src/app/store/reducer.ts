import * as actions from './actions'
import { SearchTerm } from '../models/search-term'
import { Stock } from '../models/stock'
import { SEARCH_TERMS } from '../SEARCH_TERMS'

export interface ApplicationState {
  selectedSearchTerm: SearchTerm,
  searchTerms: SearchTerm[],
  stockSelected: Stock,
  data: Stock[],
  loading: boolean,
  error: any
}

export let initialState = {
  selectedSearchTerm: "hello",
  searchTerms: SEARCH_TERMS,
  selectedStock: undefined,
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
      return Object.assign({}, state, {data: payload, pending: false})
    case actions.GET_STOCK_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"})
    default:
      return state;
  }
}