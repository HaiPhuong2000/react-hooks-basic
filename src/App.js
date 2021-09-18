import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/Todo";
// import ColorBox from "./components/ColorBox/ColorBox";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍" },
    { id: 2, title: "We love Easy Frontend! 🥰" },
    { id: 3, title: "They love Easy Frontend! 🚀" },
  ]);

  function handleTodoclick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    //clone new array
    const newTodoList = [...todoList];
    //Cắt phần 1 phần tử ở vị trí index
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      {/* <ColorBox /> */}
      <TodoList todos={todoList} onTodoClick={handleTodoclick} />
    </div>
  );
}

export default App;
