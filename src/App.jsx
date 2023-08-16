import { useState } from 'react';
import Board from './components/board';
import StatusMessage from './components/StatusMessage';
import './styles.scss';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isxnext, setisxnext] = useState(false);

  const winner = calculateWinner(squares);

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
      <StatusMessage squares={squares} isxnext={isxnext} winner={winner} />
      <Board squares={squares} handlesquareclick={handlesquareclick} />
    </div>
  );
}

export default App;
