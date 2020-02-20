import React, { createContext, useReducer } from 'react';
import { cardReducer } from '../reducers/cardReducer';

export const CardContext = createContext();

const initialState = {
  loading: false,
  error: false,
  errorMessage: null,
  details: {}
};

const CardContextProvider = props => {
  const [card, dispatch] = useReducer(cardReducer, initialState);
  return (
    <CardContext.Provider value={{ card, dispatch }}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
