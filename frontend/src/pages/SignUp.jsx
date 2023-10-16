import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Intro from "../components/Intro";
import Button from "../UI/Button";
import InputWithIcon from "../UI/InputWithIcon";
import ShapeBottom from "../UI/ShapeBottom";
import AuthContext from "../store/auth-context";
import useHTTP from "../hooks/useHttp";
import useInput from "../hooks/useInput";

const SignUp = () => {
  const introTitle = "Create an account!";
  const introText =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.";

  const [signupStatus, setSignupStatus] = useState(false);

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (ctx.isLoggedIn) {
      navigate("/my-complaints");
    }
  }, [ctx]);

  const { isLoading, error, sendRequest: userSignup } = useHTTP();

  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(
    (value) => value.trim().length >= 4 && value.trim().length <= 25
  );

  const {
    value: enteredNationalId,
    valueIsValid: enteredNationalIdIsValid,
    hasError: nationalIdInputHasError,
    valueChangeHandler: nationalIdInputChangeHandler,
    inputBlurHandler: nationalIdInputBlurHandler,
    reset: resetNationalIdInput,
  } = useInput((value) => value.trim().length === 14);

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
    value: enteredPhone,
    valueIsValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim().match(/^01\d{9}$/));

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

  const nameInputClasses = nameInputHasError ? "py-4 invalid" : "py-4";
  const nationalIdInputClasses = nationalIdInputHasError
    ? "py-4 invalid"
    : "py-4";
  const emailInputClasses = emailInputHasError ? "py-4 invalid" : "py-4";
  const phoneInputClasses = phoneInputHasError ? "py-4 invalid" : "py-4";
  const passwordInputClasses = passwordInputHasError ? "py-4 invalid" : "py-4";

  const formIsValid =
    enteredNameIsValid &&
    enteredNationalIdIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredPasswordIsValid;

  const submitHandler = async (event) => {
    event.preventDefault();

    userSignup(
      {
        url: "http://localhost:80/cms-api/signup.php",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          name: enteredName,
          nationalId: enteredNationalId,
          email: enteredEmail,
          phone: enteredPhone,
          password: enteredPassword,
        },
      },
      (data) => {
        setSignupStatus(data.status);

        if (data.status === 1) {
          resetNameInput();
          resetNationalIdInput();
          resetEmailInput();
          resetPhoneInput();
          resetPasswordInput();
        }
      }
    );
  };

  return (
    <div className="main d-flex align-items-center">
      <div className="container h-100">
        <div className="row align-items-center h-100 m-3 m-sm-0">
          <div className="col-sm-12 col-lg-7 mb-4 mb-lg-0">
            <Intro title={introTitle} text={introText} />
          </div>
          <div className="col-sm-12 col-lg-5">
            <div className="form p-5 pb-4 m-0 m-lg-5 me-lg-0">
              <p className="text-center font-weight-bold mb-4">Sign Up</p>
              {error && (
                <p className="error-text mb-3 text-center">
                  An error occurred!
                </p>
              )}
              {signupStatus === 1 && (
                <p className="success-text mb-3 text-center">
                  Account created successfully!
                </p>
              )}
              {signupStatus === 2 && (
                <p className="error-text mb-3 text-center">
                  National Id is already used!
                </p>
              )}
              {signupStatus === 3 && (
                <p className="error-text mb-3 text-center">
                  Email is already used!
                </p>
              )}
              <form onSubmit={submitHandler}>
                <InputWithIcon
                  iconClasses="fas fa-user fa-fw"
                  inputClasses={nameInputClasses}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={enteredName}
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                />
                {nameInputHasError && (
                  <p className="error-text mt-2">
                    Name must be [4, 25] characters.
                  </p>
                )}
                <InputWithIcon
                  divClasses="mt-4"
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
                  iconClasses="fas fa-envelope-open fa-fw"
                  inputClasses={emailInputClasses}
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={enteredEmail}
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                />
                {emailInputHasError && (
                  <p className="error-text mt-2">Enter a valid email.</p>
                )}
                <InputWithIcon
                  divClasses="mt-4"
                  iconClasses="fa-solid fa-phone fa-fw"
                  inputClasses={phoneInputClasses}
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={enteredPhone}
                  onChange={phoneInputChangeHandler}
                  onBlur={phoneInputBlurHandler}
                />
                {phoneInputHasError && (
                  <p className="error-text mt-2">Enter a valid phone number.</p>
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
                  <p className="error-text">
                    Password must be [10, 25] characters.
                  </p>
                )}
                <Button
                  type="submit"
                  text="Sign Up"
                  className="full-width mt-4"
                  style={{ fontSize: "16px" }}
                  disabled={isLoading | !formIsValid}
                />
                <hr className="mt-5 mb-4" />
                <p className="text-center text-muted">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Log In
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

export default SignUp;
