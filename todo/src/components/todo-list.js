import React from 'react';

const TodoList = () => {
  const items = ['1. Learn React', '2. Build app', '3. First Component'];

  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  );
};

export default TodoList;
