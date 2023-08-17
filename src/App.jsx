import { useState } from 'react';
import Board from './components/board';
import StatusMessage from './components/StatusMessage';
import './styles.scss';
import { calculateWinner } from './winner';
import History from './components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isxnext: false }];
function App() {
  const [history, sethistory] = useState(NEW_GAME);
  const [currentmove, setcurrentmove] = useState(0);

  const gamingboard = history[currentmove];

  const winner = calculateWinner(gamingboard.squares);
  console.log({ history, currentmove });

  const handlesquareclick = clickedposition => {
    if (gamingboard.squares[clickedposition] || winner) {
      return;
    }
    sethistory(currenthistory => {
      const istraversing = currentmove + 1 !== currenthistory.length;
      const lastgamingstate = istraversing
        ? currenthistory[currentmove]
        : history[history.length - 1];
      const nextsquaresstate = lastgamingstate.squares.map(
        (squarevalue, position) => {
          if (clickedposition == position) {
            return lastgamingstate.isxnext ? 'X' : 'O';
          }

          return squarevalue;
        }
      );
      const base = istraversing
        ? currenthistory.slice(0, currenthistory.indexOf(lastgamingstate) + 1)
        : currenthistory;
      return base.concat({
        squares: nextsquaresstate,
        isxnext: !lastgamingstate.isxnext,
      });
    });

    setcurrentmove(move => move + 1);
  };
  const moveto = move => {
    setcurrentmove(move);
  };
  return (
    <div className="app">
      <StatusMessage winner={winner} gamingboard={gamingboard} />
      <Board
        squares={gamingboard.squares}
        handlesquareclick={handlesquareclick}
      />

      <h2>Current Game History</h2>
      <History history={history} moveto={moveto} currentmove={currentmove} />
    </div>
  );
}

export default App;
