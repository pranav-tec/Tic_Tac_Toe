import { useState } from 'react';
import Board from './components/board';
import './styles.scss';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isxnext, setisxnext] = useState(false);

  const winner = calculateWinner(squares);
  const nextplayer = isxnext ? 'X' : 'O';
  const status = winner
    ? `winner is ${winner}`
    : `next player is ${nextplayer}`;

  const handlesquareclick = clickedposition => {
    if (squares[clickedposition] || winner) {
      return;
    }
    setsquares(currentsquares => {
      return currentsquares.map((squarevalue, position) => {
        if (clickedposition == position) {
          return isxnext ? 'X' : 'O';
        }

        return squarevalue;
      });
    });
    setisxnext(currentxstate => !currentxstate);
  };
  return (
    <div className="app">
      <h2>{status}</h2>
      <Board squares={squares} handlesquareclick={handlesquareclick} />
    </div>
  );
}

export default App;
