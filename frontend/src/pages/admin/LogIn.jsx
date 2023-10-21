import "./LogIn.css";
import useInput from "../../hooks/useInput";
import { login } from "../../store/slices/userAuthSlice";
import { useDispatch } from "react-redux";

const AdminLogIn = () => {
  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) =>
    value.trim().match(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/)
  );

  const {
    value: enteredPassword,
    valueIsValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
  } = useInput(
    (value) => value.trim().length >= 6 && value.trim().length <= 25
  );

  const emailInputClasses = emailInputHasError ? "invalid" : "";
  const passwordInputClasses = passwordInputHasError ? "invalid" : "";

  const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    dispatch(
      login({
        email: enteredEmail,
        password: enteredPassword,
      })
    );

    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <div className="form-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className={emailInputClasses}
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputHasError && (
              <p className="error-text mt-2">Enter a valid email.</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={passwordInputClasses}
              value={enteredPassword}
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
            />
            {passwordInputHasError && (
              <p className="error-text mt-2">Enter a valid password.</p>
            )}
          </div>
          <button type="submit" disabled={!formIsValid}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default AdminLogIn;
