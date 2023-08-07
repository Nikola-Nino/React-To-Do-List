import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdateHandler = (value) => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onAddTodo={submitUpdateHandler} />;
  }

  return props.todos.map((todo, index) => (
    <div key={todo.id}>
      <div>{todo.text}</div>
      <div>
        <RiCloseCircleLine onClick={() => props.removeTodo(todo.id)} />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}/>
      </div>
    </div>
  ));
};

export default Todo;
