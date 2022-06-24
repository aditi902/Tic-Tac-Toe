import React from 'react';
import './Point.css';

export const Point = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="pointstable">
      <span className={`score x-score ${!xPlaying && 'inactive'}`}>
        {' '}
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && 'inactive'}`}>
        {' '}
        O - {oScore}
      </span>
    </div>
  );
};
