import React, { useState } from 'react';
import './App.css';

import { Card } from './utilities/Card';
import { Point } from './utilities/Point';
import { Reset } from './utilities/Reset';

const winningIndices = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [2, 4, 6],
  [6, 7, 8],
];
function App() {
  //Null initially
  const [card, setCard] = useState(Array(9).fill(null));

  //Current player track
  const [xPlaying, setXPlaying] = useState(true); //X will start the game

  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const clickBox = (boxIndex) => {
    const newBoard = card.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying ? 'X' : 'O';
      } else {
        return value;
      }
    });

    const theWinnerIs = winner(newBoard);
    if (theWinnerIs) {
      if (theWinnerIs === 'O') {
        let { oScore } = scores;
        oScore++;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore++;
        setScores({ ...scores, xScore });
      }
    }

    setCard(newBoard);
    setXPlaying(!xPlaying);
  };
  const winner = (card) => {
    for (let i = 0; i < winningIndices.length; i++) {
      const [x, y, z] = winningIndices[i];
      if (card[x] && card[x] === card[y] && card[y] === card[z]) {
        setGameOver(true);
        return card[x];
      }
    }
  };

  const resetValues = () => {
    setGameOver(false);
    setCard(Array(9).fill(null));
  };
  return (
    <div className="App">
      <Point scores={scores} xPlaying={xPlaying} />
      <Card card={card} onClick={gameOver ? resetValues : clickBox} />
      <Reset resetValues={resetValues} />
    </div>
  );
}

export default App;
