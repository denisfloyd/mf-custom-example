const TodoList = () => {
  const todoList = ["Todo 1", "Todo 2", "Todo 3"];

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
