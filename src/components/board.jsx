import { useState } from 'react';
import Square from './square';

const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));

  console.log(squares);

  const handlesquareclick = clickedposition => {
    setsquares(currentsquares =>{
      return currentsquares.map((squarevalue,position)=>{
        if(clickedposition == position){
        return 'X'
      }

      return squarevalue;
    });
    });
  };

  const render = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handlesquareclick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {render(0)}
        {render(1)}
        {render(2)}
      </div>
      <div className="board-row">
        {render(3)}
        {render(4)}
        {render(5)}
      </div>
      <div className="board-row">
        {render(6)}
        {render(7)}
        {render(8)}
      </div>
    </div>
  );
};

export default Board;
