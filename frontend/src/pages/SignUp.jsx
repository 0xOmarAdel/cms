import { Link } from "react-router-dom";
import Intro from "../layout/Intro";
import Button from "../UI/Button";
import InputWithIcon from "../UI/InputWithIcon";
import ShapeBottom from "../UI/ShapeBottom";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/slices/userAuthSlice";
import { FaEnvelopeOpen, FaIdCard, FaKey, FaPhone } from "react-icons/fa6";
import ErrorText from "../UI/ErrorText";
import Main from "../layout/Main";
import { useState } from "react";

const SignUp = () => {
  const introTitle = "Create an account!";
  const introText =
    " It's a web-based platform designed to facilitate the efficient handling, tracking, and resolution of customer complaints and feedback.";

  const {
    value: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
  } = useInput(
    (value) => value.trim().length >= 4 && value.trim().length <= 25
  );

  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput(
    (value) => value.trim().length >= 4 && value.trim().length <= 25
  );

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
    value: enteredPhone,
    valueIsValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneInputChangeHandler,
    inputBlurHandler: phoneInputBlurHandler,
  } = useInput((value) => value.trim().match(/^01\d{9}$/));

  const {
    value: enteredPassword,
    valueIsValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput(
    (value) => value.trim().length >= 6 && value.trim().length <= 25
  );

  const formIsValid =
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredPasswordIsValid;

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const [showError, setShowError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    await dispatch(
      register({
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        phone: enteredPhone,
        password: enteredPassword,
      })
    );

    setShowError(true);
  };

  return (
    <Main>
      <Intro title={introTitle} text={introText} />
      <div className="shrink-0 px-7 py-10 flex flex-col gap-4 bg-white rounded-lg shadow-lg">
        <p className="text-3xl text-gray-600 text-center font-bold">Sign Up</p>
        {showError && error && (
          <ErrorText text={error} className="!text-base text-center" />
        )}
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-0.5">
            <InputWithIcon
              icon={<FaIdCard />}
              inputError={firstNameInputHasError}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={enteredFirstName}
              onChange={firstNameInputChangeHandler}
              onBlur={firstNameInputBlurHandler}
            />
            {firstNameInputHasError && (
              <ErrorText text="First Name must be [4, 25] characters." />
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <InputWithIcon
              icon={<FaIdCard />}
              inputError={lastNameInputHasError}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={enteredLastName}
              onChange={lastNameInputChangeHandler}
              onBlur={lastNameInputBlurHandler}
            />
            {lastNameInputHasError && (
              <ErrorText text="Last Name must be [4, 25] characters." />
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <InputWithIcon
              icon={<FaEnvelopeOpen />}
              inputError={emailInputHasError}
              type="text"
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
              icon={<FaPhone />}
              inputError={phoneInputHasError}
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={enteredPhone}
              onChange={phoneInputChangeHandler}
              onBlur={phoneInputBlurHandler}
            />
            {phoneInputHasError && (
              <ErrorText text="Enter a valid phone number." />
            )}
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
              <ErrorText text="Password must be [6, 25] characters." />
            )}
          </div>
          <Button
            type="submit"
            text="Sign Up"
            className={`w-full mt-1 ${
              !formIsValid &&
              "!bg-none !bg-gray-500 !opacity-100 !cursor-default"
            }`}
            disabled={!formIsValid}
          />
          <hr className="mt-2" />
          <p className="text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-500">
              Log In
            </Link>
          </p>
        </form>
      </div>
      <ShapeBottom />
    </Main>
  );
};

export default SignUp;
