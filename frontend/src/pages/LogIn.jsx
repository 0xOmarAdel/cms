import { Link } from "react-router-dom";
import Intro from "../components/Intro";
import Button from "../UI/Button";
import InputWithIcon from "../UI/InputWithIcon";
import ShapeBottom from "../UI/ShapeBottom";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/userAuthSlice";

const LogIn = () => {
  const introTitle = "Welcome back!";
  const introText =
    "It's a web-based platform designed to facilitate the efficient handling, tracking, and resolution of customer complaints and feedback.";

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value) =>
    value.trim().match(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/)
  );

  const {
    value: enteredPassword,
    valueIsValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput(
    (value) => value.trim().length >= 6 && value.trim().length <= 25
  );

  const nationalIdInputClasses = emailInputHasError ? "py-4 invalid" : "py-4";
  const passwordInputClasses = passwordInputHasError ? "py-4 invalid" : "py-4";

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
  };

  return (
    <section className="main h-100 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-14 lg:gap-20">
      <Intro title={introTitle} text={introText} />
      <div className="shrink-0 px-7 py-10 flex flex-col gap-4 bg-white rounded-lg shadow-lg">
        <p className="text-3xl text-gray-600 text-center font-bold">Log In</p>
        <form onSubmit={submitHandler}>
          <InputWithIcon
            iconClasses="fas fa-id-card fa-fw"
            inputClasses={nationalIdInputClasses}
            type="email"
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
            className="w-full mt-4"
            disabled={!formIsValid}
          />
          <hr className="mt-5 mb-4" />
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-sky-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <ShapeBottom />
    </section>
  );
};

export default LogIn;
