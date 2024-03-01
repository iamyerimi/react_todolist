import React from "react";
import { useState } from "react";
import "./App.css";
import TodoList from "./components/List/TodoList";

function App() {
  const [value, setValue] = useState("");

  // input value onChange
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  // 제출
  const onClick = (e) => {
    e.preventDefault();
    console.info(value);
  };
  return (
    <div className="App">
      <div className="title">To-do list</div>
      <div className="inputBox">
        <input type="text" value={value} onChange={onInputChange} />
        <button type="submit" onClick={onClick}>
          add
        </button>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
