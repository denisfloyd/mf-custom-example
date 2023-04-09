import React from 'react';

const TodoList = ({todos, onRemove}) => {
  return (
    <div>
      <ul>
        {todos && todos.map((todo) => (
          <li key={todo}>
            <p>{todo}</p>
            <span onClick={() => onRemove(todo)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
