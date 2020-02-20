import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";

const TableDetails = ({ data, totalCards, currentPage, dispatch }) => {

  const handlePageChange = (page) => {
    dispatch({
      type: 'TABLE_SELECT_PAGE',
      page: page
    })
  }

  return (
    <Fragment>
      <table>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/card/${row.id}`}>{row.id}</Link>
                </td>
                <td>
                  {row.name}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination
          activePage={currentPage}
          itemsCountPerPage={175}
          totalItemsCount={totalCards}
          pageRangeDisplayed={15}
          onChange={handlePageChange}
        />
      </Fragment>
  );
}

export default TableDetails;
