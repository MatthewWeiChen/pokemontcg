import React from 'react';
import cardstyles from '../../styles/card-details.css';
import CardData from './cardData';
import { Container, Col } from 'react-bootstrap';

const CardDetail = (props) => {
  const pokemonName = `${props.card.name}`;
  const pokemonImage = `${props.card.images.large}`;
  console.log(props);
  return (
    <>
      <Container fluid>
        <div className="columns">
          <Col md={6}>
            <img
              src={pokemonImage}
              alt={pokemonName}
              className="card-detail-img"
            />
          </Col>
          <Col md={6}>
            <div className="detail-column">
              <CardData card={props.card} />
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default CardDetail;
