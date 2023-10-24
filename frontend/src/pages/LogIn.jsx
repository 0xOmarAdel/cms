import { Link } from "react-router-dom";
import Intro from "../layout/Intro";
import Button from "../UI/Button";
import InputWithIcon from "../UI/InputWithIcon";
import ShapeBottom from "../UI/ShapeBottom";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/userAuthSlice";
import { FaEnvelopeOpen, FaKey } from "react-icons/fa6";
import ErrorText from "../UI/ErrorText";
import Main from "../layout/Main";

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
    <Main>
      <Intro title={introTitle} text={introText} />
      <div className="shrink-0 px-7 py-10 flex flex-col gap-4 bg-white rounded-lg shadow-lg">
        <p className="text-3xl text-gray-600 text-center font-bold">Log In</p>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-0.5">
            <InputWithIcon
              icon={<FaEnvelopeOpen />}
              inputError={emailInputHasError}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputHasError && <ErrorText text="Enter a valid email." />}
          </div>
          <div className="flex flex-col gap-0.5">
            <InputWithIcon
              icon={<FaKey />}
              inputError={passwordInputHasError}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
            />
            {passwordInputHasError && (
              <ErrorText text="Enter a valid password." />
            )}
          </div>
          <Button
            type="submit"
            text="Log In"
            className="w-full mt-1"
            disabled={!formIsValid}
          />
          <hr className="mt-2" />
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-sky-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <ShapeBottom />
    </Main>
  );
};

export default LogIn;
