import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";


const Todo = (props) => {

  return props.todos.map((todo, index) => (
    <div key={index}>
      <div>{todo.text}</div>
      <div>
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </div>
  ));
};

export default Todo;
