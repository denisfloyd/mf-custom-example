import '/TodoList.css';

const TodoList = ({todos, onMarkDone, onDelete}) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo} onClick={onMarkDone}>
            <p>{todo}</p>
            <span onClick={onDelete}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
