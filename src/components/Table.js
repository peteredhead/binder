import React from 'react';
import TableRow from './TableRow';
import BSTable from 'react-bootstrap/Table';
import './Table.css';

const Table = ({ loading, data }) => {
  return (
      <BSTable striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Set Name</th>
            <th>Collector Number</th>
            <th>Legalities</th>
            <th>Set Type</th>
            <th>Rarity</th>
            <th>Flavour</th>
            <th>Oracle</th>
          </tr>
        </thead>
        <tbody className={loading ? 'loading' : null}>
          {data.map(row => <TableRow row={row} key={row.id}/>)}
        </tbody>
      </BSTable>
  );
}

export default Table;
