import React from 'react';

import './TodoList.css';

const TodoList = ({todos, onMarkDone, onRemove}) => {
  return (
    <div>
      <ul>
        {todos && todos.map((todo) => (
          <li key={todo.id}>
            <p onClick={() => onMarkDone(todo)} className={!!todo.done ? 'mark': ''}>{todo.todo}</p>
            <span onClick={() => onRemove(todo)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
