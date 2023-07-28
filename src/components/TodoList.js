import React, { useState, Fragment } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addingTodoHandler = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  return (
    <Fragment>
        <h1>What's the plan for today?</h1>
      <TodoForm onAddTodo={addingTodoHandler} />
    </Fragment>
  );
};

export default TodoList;
