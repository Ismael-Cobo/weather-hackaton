import { types } from "../types/types";

export const weatherReducer = (state, action) => {

  const { payload, type } = action
  
  switch (type) {
    case types.ADD_QUERY:
        return {
          ...state,
          data: payload
        }

    case types.START_LOADING:
      return {
        ...state,
        loading: true
      }

    case types.FINISH_LOADING:
      return {
        ...state,
        loading: false
      }

    case types.SET_ERROR:
      return {
        ...state,
        error: true
      }

    case types.DELETE_ERROR:
      return {
        ...state,
        error: null
      }
  
    default:
      return state
  }

}