import React from 'react';
import Card from './card';
import { Container, Row, Col } from 'react-bootstrap';

const CardList = props => {
  const cardList = props.cardList.data;

  return (
    <>
      <div className="grid">
        <Row>
          {cardList.map((card, index) => (
            <Card
              image={card.images.small}
              key={index}
              cardClick={props.cardClick}
              name={card.name}
              id={card.id}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default CardList;
