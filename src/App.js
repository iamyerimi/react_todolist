import React from "react";
import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  // input value onChange
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  // 등록
  const onSubmit = (e) => {
    e.preventDefault();
    console.info(value);
    console.info(value);
    setTodos([...todos, value]);
    setValue("");
  };

  // 삭제
  const onDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    // todos.splice(index, 1);
    // setTodos([...todos]);
  };

  return (
    <div className="App">
      <div className="title">To-do list</div>
      <div className="Box">
        <form onSubmit={onSubmit}>
          <input type="text" value={value} onChange={onInputChange} />
          <button className="addBtn" type="submit">
            add
          </button>
        </form>
      </div>
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
