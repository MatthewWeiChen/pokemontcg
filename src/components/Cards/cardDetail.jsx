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
            <div className="one-third card-edges">
              <img
                src={pokemonImage}
                alt={pokemonName}
                className="card-detail-img"
              />
            </div>
            <div className="detail-column">
              <div className="heading">{pokemonName}</div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CardDetail;
