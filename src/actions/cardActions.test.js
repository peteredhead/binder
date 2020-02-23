import {
  CARD_LOADING,
  CARD_DETAILS,
  CARD_ERROR
} from '../constants/actionTypes';

import { loadCard } from './cardActions';

// Test data
const id = 'ca083411-2600-451e-9f8b-ebd5a42e3f1a';

describe('card actions', () => {
  it('dispatches the correct event when loading a card', () => {
    const data = {id: id};
    fetch.mockResponseOnce(JSON.stringify(data));
    const dispatch = jest.fn();
    loadCard(dispatch, id);
    const expected = { type: CARD_LOADING };
    expect(dispatch).toHaveBeenCalledWith(expected);
  }),
  it('dispatches the correct event when the card is loaded', done => {
    const data = {id: id};
    fetch.mockResponseOnce(JSON.stringify(data));
    const dispatch = jest.fn();
    return loadCard(dispatch, id).
    then(() => {
      const expected = {
        type: CARD_DETAILS,
        details: data
      };
      expect(dispatch).toHaveBeenLastCalledWith(expected);
      done()
    });
  }),
  it('dispatches the correct event when the card is not found', done => {
    const data = {id: id};
    fetch.mockResponseOnce(JSON.stringify(data), {status: 404});
    const dispatch = jest.fn();
    return loadCard(dispatch, id).
    then(() => {
      const expected = {
        type: CARD_ERROR,
        details: 'Error: Card not found'
      };
      expect(dispatch).toHaveBeenLastCalledWith(expected);
      done()
    });
  }),
  it('dispatches the correct event when any other error occurs', done => {
    const data = {id: id};
    fetch.mockResponseOnce(JSON.stringify(data), {status: 500});
    const dispatch = jest.fn();
    return loadCard(dispatch, id).
    then(() => {
      const expected = {
        type: CARD_ERROR,
        details: 'Error: Unable to load card details'
      };
      expect(dispatch).toHaveBeenLastCalledWith(expected);
      done()
    });
  });
});
