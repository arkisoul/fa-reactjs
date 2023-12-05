import React, { forwardRef, useContext } from "react";
import { TodosContext } from "../todos/TodosContext";
import "./TodoItem.css";

export const TodoItem = forwardRef(function TodoItem(
  { todo, handleDelete, handleStatusChange },
  inputRef
) {
  const todosContextData = useContext(TodosContext);
  console.log("using Hook", todosContextData);
  return (
    <TodosContext.Consumer>
      {(data) => {
        console.log(data);
        return (
          <li className="todo-item">
            <label htmlFor="status">
              <input
                type="checkbox"
                name="status"
                id="status"
                checked={todo.isCompleted}
                onChange={(e) => handleStatusChange(todo.id, e.target.checked)}
                ref={inputRef}
              />
            </label>
            <span className={todo.isCompleted ? "completed" : ""}>
              {todo.title}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(todo.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        );
      }}
    </TodosContext.Consumer>
  );
});
