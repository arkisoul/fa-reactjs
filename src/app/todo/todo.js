import { createSlice } from "@reduxjs/toolkit";
import { TodosService } from '../../services/TodosService';

const initialState = {
  todos: [],
  isFetching: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    startTodosList: (state) => {
      state.isFetching = true;
      state.error = null;
      state.todos = []
    },
    successTodoList: (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.todos = action.payload.todos;
    },
    failureTodoList: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
      state.todos = []
    }
  }
})

export const todoReducer = todoSlice.reducer;
export const { startTodosList, successTodoList, failureTodoList } = todoSlice.actions;

export const fetchTodoList = () => async (dispatch) => {
  try {
    dispatch(startTodosList());
    const todos = await TodosService.fetchAllTodos();
    dispatch(successTodoList({ todos }));
  } catch (error) {
    dispatch(failureTodoList({ error }));
  }
}