import React from 'react';
import { useHistory } from 'react-router-dom';

const CardDetails = ({ details }) => {
  const history = useHistory();

  // Do nothing if details object is empty
  if (!Object.keys(details).length) {
    return null;
  }

  const {
    id, name, set_name, collector_number, legalities, set_type, rarity,
    flavour_text, oracle_text, image_uris
  } = details
  const { small } = image_uris;

  return (
    <div className='cardDetails'>
      <h1>{name}</h1>
      <img src={small} alt='Card preview'/>
      <ul>
        <li>Card id: {id}</li>
        <li>Set name: {set_name}</li>
        <li>Collector number {collector_number}</li>
        <li>Legalities: {
          Object.keys(legalities).filter(key => (legalities[key] === 'legal')).join(', ')
        }</li>
        <li>Set type: {set_type}</li>
        <li>Rarity: {rarity}</li>
        <li>Flavour text: {flavour_text}</li>
        <li>Oracle text: {oracle_text}</li>
      </ul>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  )
}

export default CardDetails;
