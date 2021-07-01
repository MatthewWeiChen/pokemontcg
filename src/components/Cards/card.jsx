import React from 'react';
import { Col } from 'react-bootstrap';
const Card = props => {
  return (
    <>
      <div className="card-column">
        <a href={props.image}>
          <img src={props.image} alt="" className="individual-card" />
        </a>
      </div>
    </>
  );
};

export default Card;
