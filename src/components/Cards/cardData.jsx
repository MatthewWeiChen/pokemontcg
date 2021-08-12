import React from 'react';

const CardData = ({ card }) => {
  return (
    <>
      <nav className="card-detail-head">
        <div className="level-left">
          <div className="detail-heading">{card.name}</div>
          <div className="subtitle">{subtitleData(card.subtypes)}</div>
        </div>
        <div className="level-right">
          <span>{`HP ${card.hp}`}</span>
        </div>
      </nav>
      <hr className="off-white line-cut"></hr>
    </>
  );
};

const subtitleData = (typeList) => {
  const arr = [];
  typeList.forEach((type) => arr.push(type));
  return arr;
};

export default CardData;
