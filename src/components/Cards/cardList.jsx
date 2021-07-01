import React from 'react';
import Card from './card';
import { Container, Row, Col } from 'react-bootstrap';

const CardList = props => {
  const cardList = props.cardList.data;
  console.log(cardList);
  return (
    <>
      <div className="grid">
        <Row>
          {cardList.map((card, index) => (
            <Card image={card.images.small} key={index} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default CardList;
