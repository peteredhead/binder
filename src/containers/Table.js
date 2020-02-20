import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TableContext } from '../contexts/TableContext';
import { loadTable } from '../actions/tableActions';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import TableDetails from '../components/TableDetails';

const Table = () => {
  const { table, dispatch } = useContext(TableContext);
  let { page } = useParams();
  if (!page) {
    page = 1;
  }

  // Trigger loading of table rows when page changes
  useEffect(() => {
    loadTable(dispatch, page)
  }, [dispatch, page]);

  const { loading, error, errorMessage, data, totalCards, currentPage } = table;
  return (
    <div className='Table'>
      Table (page {page})
      { loading ? <Loader /> : null }
      { error ? <ErrorMessage error={errorMessage} /> : null }
      { totalCards ? <TableDetails {...{data, totalCards, currentPage, dispatch}}/> : null }

    </div>
  );
}

export default Table;
