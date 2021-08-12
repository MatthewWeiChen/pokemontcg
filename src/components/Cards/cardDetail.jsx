import React from 'react';
import cardstyles from '../../styles/card-details.css';
import Card from './card';
import CardData from './cardData';
import { Container, Row, Col } from 'react-bootstrap';

const CardDetail = (props) => {
  const pokemonName = `${props.card.name}`;
  const pokemonImage = `${props.card.images.large}`;
  const pokemonType = `Pokemon - ${props.card.subtypes[0]}`;
  console.log(props);
  return (
    <>
      <Container fluid>
        <Row className="card-detail-row">
          <Col md={6}>
            <img
              src={pokemonImage}
              alt={pokemonName}
              className="card-detail-img"
            />
          </Col>
          <Col md={6}>
            <div className="detail-column">
              <CardData data={props} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardDetail;
