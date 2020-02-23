export const loadCard = (dispatch, id) => {
  dispatch({
    type: 'CARD_LOADING'
  });
  fetch(`https://api.scryfall.com/cards/${id}`)
  .then(response => {
    if(!response.ok) {
      if (response.status === 404) {
        throw new Error('Card not found');
      } else {
        throw new Error('Unable to load card details');
      }
    }
    return response.json()
  })
  .then(data => {
    dispatch({
      type: 'CARD_DETAILS',
      details: data
    })
  })
  .catch(error => {
    dispatch({
      type: 'CARD_ERROR',
      details: error.toString()
    });
  });
}
