import React from 'react';
import Card from './card';
import { Container, Row, Col } from 'react-bootstrap';

const CardList = props => {
  const cardList = props.cardList.data;
  return (
    <>
      <Container fluid>
        {cardList.map((card, index) => (
          <Card image={card.images.small} key={index} />
        ))}
      </Container>
    </>
  );
};

export default CardList;
