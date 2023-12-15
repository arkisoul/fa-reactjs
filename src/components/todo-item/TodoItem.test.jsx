import { fireEvent, render, screen } from "../../shared/utils/test-utils";
import { TodoItem } from "./TodoItem";

const todo = {
  id: 1,
  title: "Test Title",
  isCompleted: false,
  createdAt: "2023-12-06T06:44:28.768Z",
};

describe("TodoItem", () => {
  const mockProps = {
    todo: todo,
    handleDelete: jest.fn(),
    handleStatusChange: jest.fn(),
  };

  it("should render correctly", () => {
    render(<TodoItem {...mockProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should trigger handleDelete with Todo id", () => {
    render(<TodoItem {...mockProps} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockProps.handleDelete).toHaveBeenCalledWith(todo.id);
  });

  it("should trigger handleStatusChange", () => {
    render(<TodoItem {...mockProps} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockProps.handleStatusChange).toHaveBeenCalledTimes(1);
    expect(mockProps.handleStatusChange).toHaveBeenCalledWith(todo.id, true);
  });
});
