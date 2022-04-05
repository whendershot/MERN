import React from 'react';
import TodoData from './TodoData';

const TodoList = (props) => {
  return (
    <div className="container">
      <h3>Things I need to do:</h3>
      <TodoData />
    </div>
  );
}

export default TodoList;