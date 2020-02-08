
export interface ApplicationState {
  searchTerm: string,
  stockSelected: string,
  data: string[],
  loading: boolean,
  error: any
}

export let initialState = {
  searchTerm: "AAPL",
  stockSelected: "STOCK",
  data: ["stock1", "stock2", "stock3"],
  loading: false,
  error: null
}


export function appReducer(state: ApplicationState = initialState, action) {
  switch (action.type) {
    case "ANYACTION":
      return {
        ...state
        // modify properties here
      };
    // more actions
    default:
      return state;
  }
}