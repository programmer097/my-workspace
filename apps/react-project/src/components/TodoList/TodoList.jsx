import "./Todolist.css";

export default function TodoList({ todoList, setTodoList }) {
  function deleteItemFromList(index) {
    setTodoList(todoList.filter((el, i) => i !== index));
  }

  const listItems = todoList?.map((el, index) => {
    return (
      <li key={index}>
        <input type="checkbox" id={index} />
        <label htmlFor={index}>{el?.name}</label>
        <span>
          <button
            className="btn btn-danger"
            onClick={() => deleteItemFromList(index)}
          >
            Delete
          </button>
        </span>
      </li>
    );
  });
  return (
    <>
      <div className="title">Todo List</div>
      <div id="todo-list">
        <ul className="list">{listItems}</ul>
      </div>
    </>
  );
}
