import "./tasks.css";
import React from "react";
import TodoList from "../TodoList/TodoList";
import AddItem from "../AddItem/AddItem";
import HttpService from "../../services/http-service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    getTaskList();
  }, []);
  const navigate = useNavigate();

  function getTaskList() {
    const httpService = new HttpService();
    const token = localStorage.getItem("token");
    httpService
      .get("task", { Authorization: `Bearer ${token}` })
      .then((response) => {
        if (response.status == 403) {
          navigate("/login");
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
