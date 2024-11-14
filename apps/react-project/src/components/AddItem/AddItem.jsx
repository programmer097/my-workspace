import { useRef } from "react";
import "./AddItem.css";

export default function AddItem({ todoList, setTodoList }) {
  const inputRef = useRef("");

  function addItemToList(event) {
    event.preventDefault();
    setTodoList([...todoList, inputRef.current.value]);
    inputRef.current.value = "";
  }

  return (
    <>
      <div id="add-item">
        <form className="new-item-form">
          <input ref={inputRef} type="text" placeholder="Enter todo" />
          <button className="btn" onClick={addItemToList}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}
