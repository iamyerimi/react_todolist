import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="TodoList">
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TodoList;
