import React, { useState } from "react";
import { TodoItem } from "../todo-item/TodoItem";
import { AddTodo } from "../add-todo/AddTodo";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

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

  const handleTodoDelete = () => {
    console.log("handleTodoDelete");
  };

  const toggleAddTodoFrom = () => {
    setShowAddTodoForm(!showAddTodoForm);
  };

  return (
    <div className="todos">
      <h1>Todos</h1>
      <button onClick={toggleAddTodoFrom}>Add Todo</button>
      {showAddTodoForm ? <AddTodo onAddTodo={handleAddTodo} /> : null}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            onTodoDelete={handleTodoDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
