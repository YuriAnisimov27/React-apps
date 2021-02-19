const List = (props) => {
  return (
    <ol>
      {props.data.map((el, idx) => <li key={idx}>{el}</li>)}
    </ol>
  )
};

export default List;
