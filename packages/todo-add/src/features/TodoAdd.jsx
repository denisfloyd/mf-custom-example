import React from 'react';

const TodoAdd = ({onAddTodo}) => {
  const [value, setValue] = React.useState('');

  function handleAddTodo(event) { 
    event.preventDefault();
    onAddTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="todo" value={value} onChange={e => setValue(e.target.value)} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default TodoAdd;
