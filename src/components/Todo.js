import React, { Fragment, useState } from "react";
import classes from "./Todo.module.css";
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
    <Fragment>
      <div
        className={
          todo.isComplete
            ? `${classes["todo-row"]} ${classes["complete"]}`
            : classes["todo-row"]
        }
        key={index}
      >
        <div onClick={() => props.completeTodo(todo.id)} key={todo.id}>
          {todo.text}
        </div>
        <div className={classes.icons}>
          <RiCloseCircleLine
            className={classes["delete-icon"]}
            onClick={() => props.removeTodo(todo.id)}
          />
          <TiEdit
            className={classes["edit-icon"]}
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          />
        </div>
      </div>
    </Fragment>
  ));
};

export default Todo;
