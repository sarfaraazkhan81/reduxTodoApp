import React from "react";

function TodoInput({ item, handleChange, handleSubmit, edtItem }) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group-prepend">
          <input
            className="form-control"
            placeholder="add todo"
            type="text"
            onChange={handleChange}
            value={item}
          />
        </div>
        <button className="btn btn-block btn-primary mt-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
