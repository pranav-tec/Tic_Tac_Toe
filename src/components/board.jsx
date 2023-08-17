import Square from './square';

const Board = ({ squares, handlesquareclick, winningsquares }) => {
  const render = position => {
    const iswinningsquare = winningsquares.includes(position);
    return (
      <Square
        value={squares[position]}
        onClick={() => handlesquareclick(position)}
        iswinningsquare={iswinningsquare}
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
