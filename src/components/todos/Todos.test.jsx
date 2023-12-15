import { render, screen } from "../../shared/utils/test-utils";
import TodosComponent from "./Todos";
import {
  fetchTodoList,
  createATodo,
  updateATodo,
  deleteATodo,
} from "../../app/todo/todo";
import { mockTodos } from "../../mocks/todos.mock";

jest.mock("../../app/todo/todo", () => ({
  fetchTodoList: jest.fn(),
  createATodo: jest.fn(),
  updateATodo: jest.fn(),
  deleteATodo: jest.fn(),
}));

describe("Todos", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component correctly", () => {
    render(<TodosComponent />, {
      preloadedState: { todo: { todos: mockTodos } },
    });
    for (const todo of mockTodos) {
      expect(screen.getByText(todo.title)).toBeInTheDocument();
    }
  });
});
