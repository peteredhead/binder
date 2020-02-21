import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import { TableContext } from '../contexts/TableContext';
import { loadTable } from '../actions/tableActions';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Table from '../components/Table';

const TableContainer = () => {

  const { table, dispatch } = useContext(TableContext);
  let { page } = useParams();
  if (!page) {
    page = 1;
  }

  // Trigger loading of table rows when page changes
  useEffect(() => {
    loadTable(dispatch, page)
  }, [dispatch, page]);

  // Pagination click
  const handlePageChange = (page) => {
    dispatch({
      type: 'TABLE_SELECT_PAGE',
      page: page
    })
  }

  const { loading, error, errorMessage, data, totalCards, currentPage } = table;

  return (
    <div className='Table'>
      Table (page {page})
      {
        totalCards ?
          <Pagination
              activePage={currentPage}
              itemsCountPerPage={175}
              totalItemsCount={totalCards}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
          :null
      }
      { loading ? <Loader /> : null }
      { error ? <ErrorMessage error={errorMessage} /> : null }
      {
        totalCards ?
          <Table loading={loading} data={data} />
          : null
      }
      {
        totalCards ?
          <Pagination
              activePage={currentPage}
              itemsCountPerPage={175}
              totalItemsCount={totalCards}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
          :null
      }
    </div>
  );
}

export default TableContainer;
