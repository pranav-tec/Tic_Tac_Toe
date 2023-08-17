const square = ({ value, onClick, iswinningsquare }) => {
  //props can be directly used and use props.value to get value also can use this method

  const colorclassname = value === 'X' ? 'text-green' : 'text-orange';
  const winningclassname = iswinningsquare ? 'winning' : '';
  return (
    <button
      type="button"
      className={`square ${colorclassname} ${winningclassname}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default square;
