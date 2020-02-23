import {
  CARD_LOADING,
  CARD_DETAILS,
  CARD_ERROR
} from '../constants/actionTypes';

  export const cardReducer = (state, action) => {
  switch(action.type) {
    case CARD_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };
    case CARD_DETAILS:
      return {
        ...state,
        loading: false,
        error: false,
        details: action.details
      };
    case CARD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.details
      };
    default:
      return state;
  }
}
