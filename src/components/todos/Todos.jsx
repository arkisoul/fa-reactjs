import React, { useState } from "react";
import { TodoItem } from "../todo-item/TodoItem";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos.push({
      id: 4,
      title: "Learn Nodejs",
      isCompleted: false,
      createdAt: "2023-11-30 10:14:00Z",
    });
    setTodos(updatedTodos);
  };

  const handleTodoDelete = () => {
    console.log("handleTodoDelete");
  };

  return (
    <div className="todos">
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            onTodoDelete={handleTodoDelete}
          />
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add new todo</button>
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>Inc</button>
        <span className="count">{count}</span>
        <button onClick={() => setCount(count - 1)}>Dec</button>
      </div>
    </div>
  );
}

export default Todos;
