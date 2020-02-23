import React from 'react';
import { useHistory } from 'react-router-dom';

const TableRow = ({ row }) => {
  const history = useHistory();

  const onClick = (event) => {
    history.push(`/card/${row.id}`);
  }

  const {
    id, name, set_name, collector_number, legalities, set_type, rarity,
    flavor_text, oracle_text, image_uris
  } = row;

  const { small } = image_uris;

  return (
    <tr onClick={onClick} >
      <td>
        {id}
      </td>
      <td>
        <img src={small} alt='Card preview' style={{maxWidth:'100%'}}/>
      </td>
      <td>
        {name}
      </td>
      <td>
        {set_name}
      </td>
      <td>
        {collector_number}
      </td>
      <td>
        {
          Object.values(legalities).includes('legal') ?
            Object.keys(legalities)
              .filter(key => (legalities[key] === 'legal'))
              .join(', ')
            : 'none'
        }
      </td>
      <td>
        {set_type}
      </td>
      <td>
        {rarity}
      </td>
      <td>
        {flavor_text ? flavor_text : 'none'}
      </td>
      <td>
        {oracle_text ? oracle_text: 'none'}
      </td>
    </tr>
  )
}

export default TableRow;
