import React from "react";

function TodoItem({ title, handleDelete, handleEdit }) {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between m-2">
      <h3>{title}</h3>
      <div classname="todo-icon">
        <span className="mx-2 text-success" onClick={handleDelete}>
          <button className="btn btn-primary">D</button>
        </span>
        <span className="mx-2 text-success" onClick={handleEdit}>
          <button className="btn btn-primary">E</button>
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
