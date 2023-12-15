import { render, screen, fireEvent } from "../../../shared/utils/test-utils";
import { LoginComponent as Login } from "./Login";

describe("Login", () => {
  const mockProps = {
    handleEmailChange: jest.fn(),
    handlePasswordChange: jest.fn(),
    handleAuthSubmit: jest.fn(),
    authState: {
      user: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLogin = (loginProps = mockProps) => {
    return render(<Login {...loginProps} />);
  };

  it("should render email and password input field", () => {
    renderLogin();
    const emailField = screen.getByPlaceholderText(/your email/i);
    const passField = screen.getByPlaceholderText(/your password/i);
    expect(emailField).toBeInTheDocument();
    expect(passField).toBeInTheDocument();
  });

  it("should render Login(submit) button", () => {
    renderLogin();
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();
  });

  it("should render error messages for respective fields when user enters invalid values", () => {
    const errors = {
      email: {
        required: "Email is required",
        email: "Email should be valid",
      },
      password: {
        required: "Password is required",
      },
    };
    renderLogin({
      ...mockProps,
      authState: { ...mockProps.authState, errors },
    });
    const emailRequiredError = screen.getByText(/email is required/i);
    const passwordRequiredError = screen.getByText(/password is required/i);
    const emailValidError = screen.getByText(/email should be valid/i);
    expect(emailRequiredError).toBeInTheDocument();
    expect(emailValidError).toBeInTheDocument();
    expect(passwordRequiredError).toBeInTheDocument();
  });

  it("should trigger handleEmailChange fn on email field change", () => {
    renderLogin();
    const emailField = screen.getByPlaceholderText(/your email/i);
    const event = { target: { value: "john.doe@test.com" } };
    fireEvent.change(emailField, event);
    expect(mockProps.handleEmailChange).toHaveBeenCalledTimes(1);
  });

  it("should trigger handlePasswordChange fn on email field change", () => {
    renderLogin();
    const passField = screen.getByPlaceholderText(/your password/i);
    const event = { target: { value: "password" } };
    fireEvent.change(passField, event);
    expect(mockProps.handlePasswordChange).toHaveBeenCalledTimes(1);
  });

  it("should trigger handleAuthSubmit on click of Login button", () => {
    renderLogin();
    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn, { preventDefault: jest.fn() });
    expect(mockProps.handleAuthSubmit).toHaveBeenCalledTimes(1);
  });

  it("should render form field values", () => {
    renderLogin({
      ...mockProps,
      authState: {
        ...mockProps.authState,
        user: { email: "john.doe@test.com", password: "password" },
      },
    });
    expect(screen.getByDisplayValue(/john.doe@test.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/password/i)).toBeInTheDocument();
  });
});
