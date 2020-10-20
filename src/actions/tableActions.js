import {
  TABLE_LOADING,
  TABLE_DETAILS,
  TABLE_ERROR,
} from '../constants/actionTypes';

import { BASE_URL } from '../constants/api';

export const loadTable = (dispatch, page) => {
  dispatch({
    type: TABLE_LOADING
  });
  return fetch(`${BASE_URL}/cards/search?format=json&q=is:commander&page=${page}`)
  .then(response => {
    if(!response.ok) {
      throw new Error('Unable to load table details')
    }
    return response.json()
  })
  .then(data => {
    dispatch({
      type: TABLE_DETAILS,
      data: data.data,
      totalCards: data.total_cards
    })
  })
  .catch(error => {
    dispatch({
      type: TABLE_ERROR,
      details: error.toString()
    });
  });
}
