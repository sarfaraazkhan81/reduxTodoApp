import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, clearList, handleDelet, handleEdit }) {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center"> Todo List</h3>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelet(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );
      })}
      <button
        type="button"
        className="btn btn-danger btn-block mt-5"
        onClick={clearList}
      >
        clear List
      </button>
    </ul>
  );
}

export default TodoList;
