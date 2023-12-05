import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { TodoItem } from "../todo-item/TodoItem";
import { AddTodo } from "../add-todo/AddTodo";
import { TodosContext } from "./TodosContext";
import "./Todos.css";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const compRef = useRef();

  useEffect(() => {
    console.log("[Todos] useEffect cb", compRef.current);
    // compRef.current = setInterval(() => {}, 1000);
    return () => {
      console.log("[Todos] useEffect cb return fn");
    };
  }, [count]); // componentDidMount, componentDidUpdate, componentWillUnmount

  useLayoutEffect(() => {}, []);

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

  const memoValue = useMemo(() => {
    const value = count * 2;
    return value;
  }, [count]);

  const memoCb = useCallback(() => {}, []);

  return (
    <div className="todos">
      <TodosContext.Provider
        value={{
          todos: todos,
          setTodos: setTodos,
        }}
      >
        {console.log("[Todos] Render")}
        <h1 className="heading">Todos</h1>
        <AddTodo onAddTodo={handleAddTodo} />
        <ul className="todos-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={onHandleDelete}
              handleStatusChange={onStatusChange}
              ref={compRef}
            />
          ))}
        </ul>
        {memoValue}
        <button onClick={() => setCount(count + 1)}>
          Update count {count}
        </button>
      </TodosContext.Provider>
    </div>
  );
}

export default Todos;
