import React from 'react';

const CardData = ({ card }) => {
  return (
    <>
      <div className="detail-heading">{card.name}</div>
      <div className="subtitle"></div>
    </>
  );
};

export default CardData;
