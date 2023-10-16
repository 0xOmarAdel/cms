import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Intro from "../components/Intro";
import Button from "../UI/Button";
import InputWithIcon from "../UI/InputWithIcon";
import ShapeBottom from "../UI/ShapeBottom";
import AuthContext from "../store/auth-context";
import useInput from "../hooks/useInput";
import useHTTP from "../hooks/useHttp";

const LogIn = () => {
  const introTitle = "Welcome back!";
  const introText =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.";

  const [loginFailed, setLoginFailed] = useState(false);

  const {
    value: enteredNationalId,
    valueIsValid: enteredNationalIdIsValid,
    hasError: nationalIdInputHasError,
    valueChangeHandler: nationalIdInputChangeHandler,
    inputBlurHandler: nationalIdInputBlurHandler,
    reset: resetNationalIdInput,
  } = useInput((value) => value.trim().length === 14);

  const {
    value: enteredPassword,
    valueIsValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPasswordInput,
  } = useInput(
    (value) => value.trim().length >= 10 && value.trim().length <= 25
  );

  const nationalIdInputClasses = nationalIdInputHasError
    ? "py-4 invalid"
    : "py-4";
  const passwordInputClasses = passwordInputHasError ? "py-4 invalid" : "py-4";

  const formIsValid = enteredNationalIdIsValid && enteredPasswordIsValid;

  const { isLoading, error, sendRequest: userLogin } = useHTTP();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    userLogin(
      {
        url: "http://localhost:80/cms-api/login.php",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { nationalId: enteredNationalId, password: enteredPassword },
      },
      dataHandler
    );

    resetNationalIdInput();
    resetPasswordInput();
  };

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const dataHandler = useCallback(
    (data) => {
      if (data.status === 1) {
        ctx.onLogin(data.id);
      } else {
        setLoginFailed(true);
      }
    },
    [ctx]
  );

  useEffect(() => {
    if (ctx.isLoggedIn) {
      navigate("/my-complaints");
    }
  });

  return (
    <div className="main d-flex align-items-center">
      <div className="container h-100">
        <div className="row align-items-center h-100 m-3 m-sm-0">
          <div className="col-sm-12 col-lg-7 mb-5 mb-lg-0">
            <Intro title={introTitle} text={introText} />
          </div>
          <div className="col-sm-12 col-lg-5">
            <div className="form p-5 pb-4 m-0 m-lg-5 me-lg-0">
              <p className="text-center font-weight-bold mb-4">Log In</p>
              {error && (
                <p className="error-text mb-3 text-center">
                  An error occurred!
                </p>
              )}
              {loginFailed && (
                <p className="error-text mb-3 text-center">
                  Invalid national id or password!
                </p>
              )}
              <form onSubmit={submitHandler}>
                <InputWithIcon
                  iconClasses="fas fa-id-card fa-fw"
                  inputClasses={nationalIdInputClasses}
                  type="text"
                  id="nationalId"
                  name="nationalId"
                  placeholder="National ID"
                  value={enteredNationalId}
                  onChange={nationalIdInputChangeHandler}
                  onBlur={nationalIdInputBlurHandler}
                />
                {nationalIdInputHasError && (
                  <p className="error-text mt-2">Enter a valid national id.</p>
                )}
                <InputWithIcon
                  divClasses="mt-4"
                  iconClasses="fas fa-key fa-fw"
                  inputClasses={passwordInputClasses}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={enteredPassword}
                  onChange={passwordInputChangeHandler}
                  onBlur={passwordInputBlurHandler}
                />
                {passwordInputHasError && (
                  <p className="error-text mt-2">Enter a valid password.</p>
                )}
                <Button
                  type="submit"
                  text="Log In"
                  className="full-width mt-4"
                  style={{ fontSize: "16px" }}
                  disabled={isLoading | !formIsValid}
                />
                <hr className="mt-5 mb-4" />
                <p className="text-center text-muted">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ShapeBottom />
    </div>
  );
};

export default LogIn;
