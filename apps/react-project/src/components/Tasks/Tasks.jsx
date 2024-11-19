import "./tasks.css";
import TodoList from "../TodoList/TodoList";
import AddItem from "../AddItem/AddItem";
import HttpService from "../../services/http-service";
import { useState, useEffect } from "react";

export default function Tasks() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    getTaskList();
  }, []);

  function getTaskList() {
    const httpService = new HttpService();
    const token = localStorage.getItem("token");
    httpService
      .get("task", { Authorization: `Bearer ${token}` })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        setTodoList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <AddItem todoList={todoList} setTodoList={setTodoList}></AddItem>
      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </>
  );
}
