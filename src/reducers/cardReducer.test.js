import {
  CARD_LOADING,
  CARD_DETAILS,
  CARD_ERROR
} from '../constants/actionTypes';

import { cardReducer } from './cardReducer';

describe('card reducer', () => {
  it('correctly updates the state when loading a card', () => {
    const state = {
      loading: false,
      error: false,
      errorMessage: null,
      details: {}
    };
    const action = {
      type: CARD_LOADING
    };
    const expected = {
      loading: true,
      error: false,
      errorMessage: null,
      details: {}
    };
    const result = cardReducer(state, action);
    expect(result).toMatchObject(expected);
  }),
  it('correctly updates the state when card details are loaded', () => {
    const state = {
      loading: true,
      error: false,
      errorMessage: null,
      details: {}
    };
    const details = {
      id: 'ca083411-2600-451e-9f8b-ebd5a42e3f1a',
      name: 'Nyx Herald',
      image_uris: {
        small: 'https://img.scryfall.com/cards/small/front/c/a/ca083411-2600-451e-9f8b-ebd5a42e3f1a.jpg?1579772277',
        normal: 'https://img.scryfall.com/cards/normal/front/c/a/ca083411-2600-451e-9f8b-ebd5a42e3f1a.jpg?1579772277',
        large: 'https://img.scryfall.com/cards/large/front/c/a/ca083411-2600-451e-9f8b-ebd5a42e3f1a.jpg?1579772277',
      },
      oracle_text: 'At the beginning of combat on your turn, target enchanted creature or enchantment creature you control gets +1/+1 and gains trample until end of turn.',
      legalities: {
        standard: 'legal',
        future: 'legal',
        historic: 'legal',
        pioneer: 'legal',
        modern: 'legal',
        legacy: 'legal',
        pauper: 'not_legal',
        vintage: 'legal',
        penny: 'legal',
        commander: 'legal',
        brawl: 'legal',
        duel: 'legal',
        oldschool: 'not_legal'
      },
      set_name: 'Theros Beyond Death',
      collector_number: '189',
      rarity: 'uncommon',
      flavor_text: '\'Un richiamo penetrante e limpido come le stelle risuonò attraverso la valle, incitando la banda Feres alla guerra, al sangue e alla violenza.\'\n—Lufea di Setessa, *Storie*',
    };
    const action = {
      type: CARD_DETAILS,
      details: details
    };
    const expected = {
      loading: false,
      error: false,
      errorMessage: null,
      details: details
    };
    const result = cardReducer(state, action);
    expect(result).toMatchObject(expected);
  }),
  it('correctly updates the state when failing to load a card', () => {
    const state = {
      loading: true,
      error: false,
      errorMessage: null,
      details: {}
    };
    const action = {
      type: CARD_ERROR,
      details: 'Error: Card not found'
    };
    const expected = {
      loading: false,
      error: true,
      errorMessage: 'Error: Card not found',
      details: {}
    };
    const result = cardReducer(state, action);
    expect(result).toMatchObject(expected);
  });
});
