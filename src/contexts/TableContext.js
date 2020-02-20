import React, { createContext, useReducer, useEffect } from 'react';
import { tableReducer } from '../reducers/tableReducer';
import { useHistory } from 'react-router-dom';

export const TableContext = createContext();

const initialState = {
  loading: false,
  error: false,
  errorMessage: null,
  currentPage: 1,
  totalCards: 0,
  data: {}
};

const TableContextProvider = props => {
  const [table, dispatch] = useReducer(tableReducer, initialState);
  const history = useHistory();

  useEffect(() => {
    // Update the route when the table page changes
    history.push(`/${table.currentPage}`);
    // And scroll to the top of the page
    window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.currentPage])
  return (
    <TableContext.Provider value={{ table, dispatch }}>
      {props.children}
    </TableContext.Provider>
  )
}

export default TableContextProvider;
