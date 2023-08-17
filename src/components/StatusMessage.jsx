import React from 'react';
const StatusMessage = ({ winner, gamingboard }) => {
  const { squares, isxnext } = gamingboard;
  const nomovesleft = squares.every(squarevalue => squarevalue !== null);

  const nextplayer = isxnext ? 'X' : 'O';

  const renderstatusmessage = () => {
    if (winner) {
      return (
        <React.Fragment>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }

    if (!winner && nomovesleft) {
      return (
        <>
          <span className="text-orange">O</span>and{' '}
          <span className="text-green">X</span>tied
        </>
      );
    }

    if (!winner && !nomovesleft) {
      return (
        <React.Fragment>
          next player is{' '}
          <span className={isxnext ? 'text-green' : 'text-orange'}>
            {nextplayer}
          </span>
        </React.Fragment>
      );
    }
    return null;
  };

  return <h2 className="status-message">{renderstatusmessage()}</h2>;
};

export default StatusMessage;
