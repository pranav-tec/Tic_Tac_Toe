const square = ({ value }) => {
  //props can be directly used and use props.value to get value also can use this method
  return <button type="button" className="square">{value}</button>;
};

export default square;
