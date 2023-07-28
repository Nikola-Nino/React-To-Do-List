import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    setInput("")
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);

    console.log(input);
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
