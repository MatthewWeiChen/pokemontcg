import React from 'react';
import cardstyles from '../../styles/card-details.css';
import { Container, Row, Col } from 'react-bootstrap';

const CardDetail = props => {
  const pokemonName = `${props.card.name}`;
  const pokemonImage = `${props.card.images.large}`;
  return (
    <>
      <div className="card-detail-wrapper">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src={pokemonImage}
                alt={pokemonName}
                className="card-detail-img"
              />
            </Col>
            <Col md={6}>
              <div className="detail-column">
                <div className="heading">{pokemonName}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CardDetail;
