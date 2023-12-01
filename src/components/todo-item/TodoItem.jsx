import React from "react";
import "./TodoItem.css";

export function TodoItem({ todo, handleDelete, handleStatusChange }) {
  return (
    <li className="todo-item">
      <label htmlFor="status">
        <input
          type="checkbox"
          name="status"
          id="status"
          checked={todo.isCompleted}
          onChange={(e) => handleStatusChange(todo.id, e.target.checked)}
        />
      </label>
      <span>{todo.title}</span>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}
