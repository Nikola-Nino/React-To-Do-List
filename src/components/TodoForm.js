import React, { useState } from "react";

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
    setInput('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add a todo"
        name="text"
        value={input}
        onChange={inputChangeHandler}
      />
      <button>Add todo</button>
    </form>
  );
};

export default TodoForm;
