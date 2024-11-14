import "./Todolist.css";

export default function TodoList({ todoList }) {
  const listItems = todoList.map((el, index) => {
    return <li key={index}>{el}</li>;
  });
  return (
    <>
      <div className="title">Todo List</div>
      <div id="todo-list">
        <ul id="list">{listItems}</ul>
      </div>
    </>
  );
}
