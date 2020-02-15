import * as actions from './actions'
import { SearchTerm } from '../models/search-term'
import { Stock } from '../models/stock'
import { SEARCH_TERMS } from '../SEARCH_TERMS'

export interface ApplicationState {
  selectedSearchTerm: SearchTerm,
  searchTerms: SearchTerm[],
  selectedStock: Stock,
  portfolio: Stock[],
  config: {
    data: undefined,
    loading: boolean,
    error: any,
  }
  progressBar: {
    selectedFilter: string,
    filters: string[],
  },
  lineChart: {
    selectedFilter: string,
    filters: string[],
  }
}


export const selectedStock = {
  name: "Visa Inc.",
  symbol: "V",
  price: 207.4,
  profitMargin: 0.52604,
  returnOnEquity: 0.35681,
  sector: "Financial Services",
  industry: "Credit Services",
  description: "Visa Inc. operates as a payments technology company worldwide. The company facilitates commerce through the transfer of value and information among consumers, merchants, financial institutions, businesses, strategic partners, and government entities. It operates VisaNet, a processing network that enables authorization, clearing, and settlement of payment transactions. In addition, the company offers card products, as well as value-added services. It provides its services under the Visa, Visa Electron, Interlink, V PAY, and PLUS brands. Visa Inc. has a strategic partnership with NovoPayment to enable financial institutions and merchants to deploy Visa's digital solutions in Latin America and the Caribbean. The company was incorporated in 2007 and is headquartered in San Francisco, California.",
  recommendation: "buy",
  website: "http://usa.visa.com",
  earnings: [
    {
      date: 2016,
      revenue: {raw: 15082000000, fmt: "15.08B", longFmt: "15,082,000,000"},
      earnings: {raw: 5991000000, fmt: "5.99B", longFmt: "5,991,000,000"}
    },
    {
      date: 2017,
      revenue: {raw: 18358000000, fmt: "18.36B", longFmt: "18,358,000,000"},
      earnings: {raw: 6699000000, fmt: "6.7B", longFmt: "6,699,000,000"}
    },
    {
      date: 2018,
      revenue: {raw: 20609000000, fmt: "20.61B", longFmt: "20,609,000,000"},
      earnings: {raw: 10301000000, fmt: "10.3B", longFmt: "10,301,000,000"}
    },
    {
      date: 2019,
      revenue: {raw: 22977000000, fmt: "22.98B", longFmt: "22,977,000,000"},
      earnings: {raw: 12080000000, fmt: "12.08B", longFmt: "12,080,000,000"}
    }
  ]
}
export let initialState = {
  selectedSearchTerm: undefined,
  searchTerms: SEARCH_TERMS,
  selectedStock: selectedStock,
  portfolio: [selectedStock, {...selectedStock, price: 100, profitMargin: 0.2, returnOnEquity: 0.8}],
  config: {
    data: undefined,
    loading: false,
    error: null
  },
  progressBar: {
    selectedFilter: 'price',
    filters: ['profitMargin', 'returnOnEquity', 'price']
  },
  lineChart: {
    selectedFilter: 'earnings',
    filters: ['earnings', 'revenues']
  }
}


export function appReducer( state = initialState, { type, payload } ) {
  switch( type ) {
    case actions.SELECT_SEARCH_TERM:
      return {...state, selectedSearchTerm: payload}
    case actions.GET_STOCK:
      return {...state, config: {loading: true, data: undefined, error: null } }
    case actions.GET_STOCK_SUCCESS:
      return {...state, config: {loading: false, data: payload,  error: null }}
    case actions.GET_STOCK_ERROR:
      return {...state, config: {loading: false, data: undefined,  error: 'error' }}
    case actions.ADD_STOCK_TO_PORTFOLIO:
      return {...state, portfolio: payload}
    case actions.SELECT_PROGRESS_BAR_FILTER:
      return {...state, progressBar: {...state.progressBar, selectedFilter: payload}}
    case actions.SELECT_LINE_CHART_FILTER:
      return {...state, lineChart : {...state.lineChart, selectedFilter: payload}}
    default:
      return state;
  }
}
