import React from 'react';

import { Utils } from './Utils';
import './Card.css';

export const Card = ({ card, onClick }) => {
  return (
    <div className="card">
      {card.map((value, index) => {
        return (
          <Utils
            value={value}
            onClick={() => value === null && onClick(index)}
          />
        ); //while running onClick passing the index
      })}
    </div>
  );
};
