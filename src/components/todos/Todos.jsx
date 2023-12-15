import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "../todo-item/TodoItem";
import { AddTodo } from "../add-todo/AddTodo";
import {
  fetchTodoList,
  createATodo,
  updateATodo,
  deleteATodo,
} from "../../app/todo/todo";
import "./Todos.css";

function Todos() {
  const compRef = useRef();
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);
  console.log("reduxState", todoState);

  const fetchTodos = useCallback(async () => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (title) => {
    dispatch(
      createATodo({
        title,
        isCompleted: false,
        createdAt: new Date().toISOString(),
      })
    );
  };

  const onHandleDelete = async (id) => {
    dispatch(deleteATodo(id));
  };

  const onStatusChange = async (id, status) => {
    const todoExists = todoState.todos.find((todo) => todo.id === id);
    if (todoExists) {
      dispatch(updateATodo({ ...todoExists, isCompleted: status }));
    }
  };

  return (
    <div className="todos">
      <h1 className="heading">Todos</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <ul className="todos-list">
        {todoState.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={onHandleDelete}
            handleStatusChange={onStatusChange}
            ref={compRef}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
