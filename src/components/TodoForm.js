import React, { useState } from "react";

const TodoForm = () => {
  const [] = useState("");
  return (
    <form>
      <input type="text" placeholder="Add a todo" name="text" />
      <button>Add todo</button>
    </form>
  );
};

export default TodoForm;
