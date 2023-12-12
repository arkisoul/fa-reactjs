import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "../todo-item/TodoItem";
import { AddTodo } from "../add-todo/AddTodo";
import { TodosContext } from "./TodosContext";
import { TodosService } from "../../services/TodosService";
import { fetchTodoList } from "../../app/todo/todo";
import "./Todos.css";

function Todos() {
  const [todos, setTodos] = useState([]);
  const compRef = useRef();
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

  const fetchTodos = useCallback(async () => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (title) => {
    try {
      const newTodo = await TodosService.createATodo({
        title,
        isCompleted: false,
        createdAt: new Date().toISOString(),
      });
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error(error);
    }
  };

  const onHandleDelete = async (id) => {
    try {
      await TodosService.deleteATodoById(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const onStatusChange = async (id, status) => {
    try {
      const todoExists = todos.find((todo) => todo.id === id);
      if (todoExists) {
        await TodosService.updateATodoById(id, {
          ...todoExists,
          isCompleted: status,
        });
        fetchTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="todos">
      <TodosContext.Provider
        value={{
          todos: todos,
          setTodos: setTodos,
        }}
      >
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
      </TodosContext.Provider>
    </div>
  );
}

export default Todos;
