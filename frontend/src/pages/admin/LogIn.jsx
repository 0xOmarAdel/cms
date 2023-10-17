import { useCallback, useContext, useEffect, useState } from "react";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/admin-auth-context";
import useHTTP from "../../hooks/useHttp";
import useInput from "../../hooks/useInput";

const Login = () => {
  const [loginFailed, setLoginFailed] = useState(false);

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) =>
    value.trim().match(/^[\w\-\.]+@([\w-]+\.)+[\w\-]{2,4}$/)
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

  const { isLoading, error, sendRequest: adminLogin } = useHTTP();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    adminLogin(
      {
        url: "http://localhost:80/cms-api/adminLogin.php",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { email: enteredEmail, password: enteredPassword },
      },
      dataHandler
    );

    resetEmailInput();
    resetPasswordInput();
  };

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const dataHandler = useCallback(
    (data) => {
      if (data.status === 1) {
        ctx.onLogin(data.adminName);
      } else {
        setLoginFailed(true);
      }
    },
    [ctx]
  );

  useEffect(() => {
    if (ctx.isLoggedIn) {
      navigate("/admin/dashboard");
    }
  });

  return (
    <div className="form-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        {error && (
          <p className="error-text mb-3 text-center">An error occurred!</p>
        )}
        {loginFailed && (
          <p className="error-text mb-3 text-center">
            Invalid email or password!
          </p>
        )}
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
          <button type="submit" disabled={isLoading | !formIsValid}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
