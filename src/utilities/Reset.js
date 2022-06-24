import React from 'react';

import './Reset.css';

export const Reset = ({ resetValues }) => {
  return (
    <button className="reset-btn" onClick={resetValues}>
      Reset
    </button>
  );
};
