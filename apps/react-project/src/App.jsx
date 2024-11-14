import { useState } from "react";
import "./styles.css";
import TodoList from "./components/TodoList/TodoList";
import AddItem from "./components/AddItem/AddItem";

export default function App() {
  const [todoList, setTodoList] = useState(["Apple", "Orange", "Banana"]);

  return (
    <>
      <AddItem todoList={todoList} setTodoList={setTodoList}></AddItem>
      <TodoList todoList={todoList}></TodoList>
    </>
  );
}
