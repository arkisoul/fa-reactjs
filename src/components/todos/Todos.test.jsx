import { render, screen } from "../../shared/utils/test-utils";
import TodosComponent from "./Todos";

jest.mock("axios", () => ({
  create: jest.fn().mockImplementation(() => ({
    interceptors: {
      request: {
        use: jest.fn(),
      },
      response: {
        use: jest.fn(),
      },
    },
  })),
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  interceptors: {
    request: {
      use: jest.fn(),
    },
    response: {
      use: jest.fn(),
    },
  },
}));

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: (fn) => ({
    todos: [
      {
        id: 1,
        title: "Todo",
        isCompleted: false,
        createdAt: "2023-12-06T06:44:28.768Z",
      },
    ],
  }),
}));

jest.mock("../../app/todo/todo", () => ({
  fetchTodoList: jest.fn(),
  createATodo: jest.fn(),
  updateATodo: jest.fn(),
  deleteATodo: jest.fn(),
}));

jest.mock("../todo-item/TodoItem", () => () => <div>Todo Item</div>);
jest.mock("../add-todo/AddTodo", () => () => <div>Todo add</div>);

// describe("Todos", () => {
//   it("should render the component correctly", () => {
//     render(<TodosComponent />);
//     console.log(screen.debug());
//     expect(true).toBeTruthy();
//   });
// });
