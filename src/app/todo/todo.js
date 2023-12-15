import { createSlice } from "@reduxjs/toolkit";
import { TodosService } from "../../services/TodosService";

const initialState = {
  todos: [],
  isFetching: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    startTodosList: (state) => {
      state.isFetching = true;
      state.error = null;
      state.todos = [];
    },
    successTodoList: (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.todos = action.payload.todos;
    },
    failureTodoList: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
      state.todos = [];
    },
    addNewTodo: (state, action) => {
      state.todos.push(action.payload.todo);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todo.id) return action.payload.todo;
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload.todoId
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;
const {
  startTodosList,
  successTodoList,
  failureTodoList,
  addNewTodo,
  updateTodo,
  deleteTodo,
} = todoSlice.actions;

export const fetchTodoList = () => async (dispatch) => {
  try {
    dispatch(startTodosList());
    const todos = await TodosService.fetchAllTodos();
    dispatch(successTodoList({ todos }));
  } catch (error) {
    dispatch(failureTodoList({ error }));
  }
};

export const createATodo = (todo) => async (dispatch) => {
  try {
    const newTodo = await TodosService.createATodo(todo);
    dispatch(addNewTodo({ todo: newTodo }));
  } catch (error) {
    console.error(error);
  }
};

export const updateATodo = (todo) => async (dispatch) => {
  try {
    const updatedTodo = await TodosService.updateATodoById(todo.id, todo);
    dispatch(updateTodo({ todo: updatedTodo }));
  } catch (error) {
    console.error(error);
  }
};

export const deleteATodo = (todoId) => async (dispatch) => {
  try {
    await TodosService.deleteATodoById(todoId);
    dispatch(deleteTodo({ todoId }));
  } catch (error) {
    console.error(error);
  }
};
