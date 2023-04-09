import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

const TodoAdd = React.lazy(() => import('mf-todoAdd/TodoAdd'))
const TodoList = React.lazy(() => import('mf-todoList/TodoList'))

import "./index.css";
import './app.css';

const App = () => {
    const [todos, setTodos] = useState([]);

    const onAddTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const onRemoveTodo = (todo) => {
        const newTodos = todos.filter((todoToRemove) => todoToRemove !== todo);
        setTodos(newTodos);
    }

    return (
        <section className="app">
            <h1>Todo App</h1>
            <aside>
                <Suspense fallback={<div>...loading</div>}>
                    <TodoAdd onAddTodo={onAddTodo}/>
                </Suspense>
            </aside>
            <aside>
                <Suspense fallback={<div>...loading</div>}>
                    <TodoList todos={todos} onRemove={onRemoveTodo}/>
                </Suspense>
            </aside>
        </section>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
