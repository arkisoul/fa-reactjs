import React, { useState } from "react";
import { TodoItem } from "../todo-item/TodoItem";
import { AddTodo } from "../add-todo/AddTodo";
import "./Todos.css";

function Todos() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title) => {
    const updatedTodos = [...todos];
    updatedTodos.push({
      id: todos.length + 1,
      title: title,
      isCompleted: false,
      createdAt: Date.now(),
    });
    setTodos(updatedTodos);
  };

  const onHandleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onStatusChange = (id, status) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = status;
        return todo;
      })
    );
  };

  return (
    <div className="todos">
      <h1 className="heading">Todos</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <ul className="todos-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={onHandleDelete}
            handleStatusChange={onStatusChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
