import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

const TodoAdd = React.lazy(() => import('mf-todoAdd/TodoAdd'))
const TodoList = React.lazy(() => import('mf-todoList/TodoList'))

import "./index.css";
import './app.css';

function randomInRange(from, to) {
    const r = Math.random();
    return Math.floor(r * (to - from) + from);
}

const App = () => {
    const [todos, setTodos] = useState([]);

    const onAddTodo = (todo) => {
        setTodos([...todos, { id: randomInRange(1, 999999), todo }]);
    };

    const onRemoveTodo = (todo) => {
        const newTodos = todos.filter((todoToRemove) => todoToRemove.id !== todo.id);
        setTodos(newTodos);
    }

    const onMarkTodoDone = (todoToMark) => {
        const newTodos = todos.map((todo) => {
            return todo.id === todoToMark.id ? {...todo, done: true} : todo;
        });
        setTodos(newTodos);
    }

    return (
        <section className="app">
            <h1>Todo App</h1>
            <aside>
                <Suspense fallback={<div>...loading TodoAdd</div>}>
                    <TodoAdd onAddTodo={onAddTodo}/>
                </Suspense>
            </aside>
            <aside>
                <Suspense fallback={<div>...loading TodoList</div>}>
                    <TodoList todos={todos} onMarkDone={onMarkTodoDone} onRemove={onRemoveTodo}/>
                </Suspense>
            </aside>
        </section>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
