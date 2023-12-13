import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TodoItem } from "../todo-item/TodoItem";

export default function TodoDetails() {
  const [todo, setTodo] = useState(null);
  const { todoId } = useParams();

  useEffect(() => {
    setTodo({
      id: parseInt(todoId),
      title: "Learn Reactjs",
      isCompleted: false,
      createdAt: new Date().toISOString(),
    });
  }, [todoId]);

  return (
    <div className="todo-details">
      <h2>Todo Details</h2>
      {todo ? <TodoItem todo={todo} /> : null}
    </div>
  );
}
