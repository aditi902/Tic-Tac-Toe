import React from 'react';

import './Utils.css';

export const Utils = ({ value, onClick }) => {
  const style = value === 'X' ? 'box x' : 'box o';

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
