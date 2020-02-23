import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import BSCard from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import CardImage from './CardImage';
import './Card.css';

const Card = ({ details }) => {
  const history = useHistory();

  // Do nothing if details object is empty
  if (!Object.keys(details).length) {
    return null;
  }

  const {
    id, name, set_name, collector_number, legalities, set_type, rarity,
    flavor_text, oracle_text, image_uris
  } = details

  return (
    <Container fluid>
      <div className='Card'>
        <CardImage imageUris={image_uris} />
        <BSCard className='details'>
          <h1>{name}</h1>
          <hr />
          <p className='oracle'>{oracle_text}</p>
          <p className='flavor'>{flavor_text}</p>
          <hr />
          <ul className='legalities'>
          {
            Object.keys(legalities).map((key) => {
              const legality = legalities[key];
              const legalityText = legality.replace('_',' ');
              return (
                <li className='legalityItem' key={key}>
                  <span className={legality}>{legalityText}</span>&nbsp;{key}
                </li>
              )
            })
          }
          </ul>
        </BSCard>
        <BSCard className='other'>
          <p>
            <span className='label'>Card id:</span> {id}
          </p>
          <p>
            <span className='label'>Set name:</span> {set_name}
          </p>
          <p>
            <span className='label'>Collector number:</span> {collector_number}
          </p>
          <p>
            <span className='label'>Set type:</span> {set_type}
          </p>
          <p>
            <span className='label'>Rarity:</span> {rarity}
          </p>
        </BSCard>
      </div>
      <button className='backButton' onClick={() => history.goBack()}>
        Back
      </button>
    </Container>
  )
}

Card.propTypes = {
  details: PropTypes.object
};

export default Card;
