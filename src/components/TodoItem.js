import React from "react";
import "./TodoItem.css";

const TodoItem = ({ text, onDelete }) => {
  return (
    <div className="TodoItem">
      <div className="text">{text}</div>
      <button className="deleteBtn" onClick={onDelete}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
