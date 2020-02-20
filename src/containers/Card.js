import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardContext } from '../contexts/CardContext';
import { loadCard } from '../actions/cardActions';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import CardDetails from '../components/CardDetails';

const Card = () => {
  const { card, dispatch } = useContext(CardContext);
  const { id } = useParams();

  // Trigger loading of card details when id changes
  useEffect(() => {
    loadCard(dispatch, id)
  }, [dispatch, id]);

  const { loading, error, errorMessage, details } = card;

  return (
    <div className='Card'>
        Card {id}
        { loading ? <Loader /> : null }
        { error ? <ErrorMessage error={errorMessage} /> : null }
        { details ? <CardDetails details={details} /> : null}
    </div>
  );
}

export default Card;
