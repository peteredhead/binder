export const tableReducer = (state, action) => {
  switch(action.type) {
    case 'TABLE_LOADING':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'TABLE_DETAILS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
        totalCards: action.totalCards
      };
    case 'TABLE_RRROR':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.details
      };
    case 'TABLE_SELECT_PAGE':
      return {
        ...state,
        currentPage: action.page
      };
    default:
      return state;
  }
}
