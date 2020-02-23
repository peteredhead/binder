import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardContext } from '../contexts/CardContext';
import { loadCard } from '../actions/cardActions';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Card from '../components/Card';

const CardContainer = () => {
  const { card, dispatch } = useContext(CardContext);
  const { id } = useParams();

  // Trigger loading of card details when id changes
  useEffect(() => {
    loadCard(dispatch, id)
  }, [dispatch, id]);

  const { loading, error, errorMessage, details } = card;
  return (
    <div>
        { loading ? <Loader /> : null }
        { error ? <ErrorMessage error={errorMessage} /> : null }
        { details ? <Card details={details} /> : null}
    </div>
  );
}

export default CardContainer;
