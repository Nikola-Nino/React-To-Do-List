import React, { useState, Fragment } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

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

  const removeTodoHandler = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  return (
    <Fragment>
        <h1>What's the plan for today?</h1>
      <TodoForm onAddTodo={addingTodoHandler} />
      <Todo todos={todos} removeTodo={removeTodoHandler}/>
    </Fragment>
  );
};

export default TodoList;
