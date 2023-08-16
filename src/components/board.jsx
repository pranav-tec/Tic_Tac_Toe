import Square from './square';

const Board = ({ squares, handlesquareclick }) => {
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
