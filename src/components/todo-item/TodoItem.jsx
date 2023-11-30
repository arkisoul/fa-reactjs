import React from "react";

export function TodoItem({ title, onTodoDelete }) {
  return (
    <li>
      {title} <button onClick={onTodoDelete}>Delete</button>
    </li>
  );
}
