import React from 'react';
import { Col } from 'react-bootstrap';
const Card = props => {
  return (
    <>
      <div className="card-column">
        <a>
          <img
            src={props.image}
            alt=""
            className="individual-card"
            onClick={async () => await props.cardClick(props.id)}
          />
        </a>
      </div>
    </>
  );
};

export default Card;
