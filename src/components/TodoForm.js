import React, { Fragment, useState } from "react";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className={classes["todo-form"]} onSubmit={submitHandler}>
      {props.edit ? (
        <Fragment>
          <input
            placeholder="Update your item"
            value={input}
            onChange={inputChangeHandler}
            name="text"
            className={`${classes["todo-input"]} ${classes["edit"]}`}
          />
          <button className={classes["todo-button"]} onClick={submitHandler}>
            Update
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <input
            type="text"
            placeholder="Add a todo"
            name="text"
            value={input}
            onChange={inputChangeHandler}
            className={classes["todo-input"]}
          />
          <button className={classes["todo-button"]} onClick={submitHandler}>
            Add todo
          </button>
        </Fragment>
      )}
    </form>
  );
};

export default TodoForm;
