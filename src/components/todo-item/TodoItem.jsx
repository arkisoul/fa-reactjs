import React, { forwardRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TodosContext } from "../todos/TodosContext";
import "./TodoItem.css";

export const TodoItem = forwardRef(function TodoItem(
  { todo, handleDelete, handleStatusChange },
  inputRef
) {
  const todosContextData = useContext(TodosContext);
  const navigate = useNavigate();
  console.log("using Hook", todosContextData);
  const handleTodoClick = () => {
    navigate(`/todos/${todo.id}`);
  };
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
            <span
              className={todo.isCompleted ? "completed" : ""}
              onClick={handleTodoClick}
            >
              {/* <Link to={`/todos/${todo.id}`}>{todo.title}</Link> */}
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
