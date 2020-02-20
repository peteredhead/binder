export const loadTable = (dispatch, page) => {
  dispatch({
    type: 'TABLE_LOADING'
  });
  fetch(`https://api.scryfall.com/cards?page=${page}`)
  .then(response => {
    if(!response.ok) {
      throw new Error('Unable to load table details')
    }
    return response.json()
  })
  .then(data => {
    dispatch({
      type: 'TABLE_DETAILS',
      data: data.data,
      totalCards: data.total_cards
    })
  })
  .catch(error => {
    dispatch({
      type: 'TABLE_ERROR',
      details: error.toString()
    });
  });
}
