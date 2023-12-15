import { fireEvent, render, screen } from "../../shared/utils/test-utils";
import { TodoItem } from "./TodoItem";
import { mockTodos } from "../../mocks/todos.mock";

describe("TodoItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockProps = {
    todo: mockTodos[0],
    handleDelete: jest.fn(),
    handleStatusChange: jest.fn(),
  };

  it("should render correctly", () => {
    render(<TodoItem {...mockProps} />);
    expect(screen.getByText(mockTodos[0].title)).toBeInTheDocument();
  });

  it("should trigger handleDelete with Todo id", () => {
    render(<TodoItem {...mockProps} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockProps.handleDelete).toHaveBeenCalledWith(mockTodos[0].id);
  });

  it("should trigger handleStatusChange", () => {
    render(<TodoItem {...mockProps} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(mockProps.handleStatusChange).toHaveBeenCalledTimes(1);
    expect(mockProps.handleStatusChange).toHaveBeenCalledWith(
      mockTodos[0].id,
      true
    );
  });
});
