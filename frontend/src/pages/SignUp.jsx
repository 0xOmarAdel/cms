import { Link } from "react-router-dom";
import Intro from "../components/Intro";
import Button from "../UI/Button";
import InputWithIcon from "../UI/InputWithIcon";
import ShapeBottom from "../UI/ShapeBottom";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { register } from "../store/slices/userAuthSlice";

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

  const firstNameInputClasses = firstNameInputHasError
    ? "py-4 invalid"
    : "py-4";
  const lastNameInputClasses = lastNameInputHasError ? "py-4 invalid" : "py-4";
  const emailInputClasses = emailInputHasError ? "py-4 invalid" : "py-4";
  const phoneInputClasses = phoneInputHasError ? "py-4 invalid" : "py-4";
  const passwordInputClasses = passwordInputHasError ? "py-4 invalid" : "py-4";

  const formIsValid =
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredPasswordIsValid;

  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();

    dispatch(
      register({
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        phone: enteredPhone,
        password: enteredPassword,
      })
    );
  };

  return (
    <section className="main h-100 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between gap-14 lg:gap-20">
      <Intro title={introTitle} text={introText} />
      <div className="shrink-0 px-7 py-10 flex flex-col gap-4 bg-white rounded-lg shadow-lg">
        <p className="text-3xl text-gray-600 text-center font-bold">Sign Up</p>
        <form onSubmit={submitHandler}>
          <InputWithIcon
            iconClasses="fas fa-user fa-fw"
            inputClasses={firstNameInputClasses}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text mt-2">
              First Name must be [4, 25] characters.
            </p>
          )}
          <InputWithIcon
            divClasses="mt-4"
            iconClasses="fas fa-id-card fa-fw"
            inputClasses={lastNameInputClasses}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text mt-2">
              Last Name must be [4, 25] characters.
            </p>
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
            <p className="error-text">Password must be [6, 25] characters.</p>
          )}
          <Button
            type="submit"
            text="Sign Up"
            className="full-width mt-4"
            style={{ fontSize: "16px" }}
            disabled={!formIsValid}
          />
          <hr className="mt-5 mb-4" />
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-500">
              Log In
            </Link>
          </p>
        </form>
      </div>
      <ShapeBottom />
    </section>
  );
};

export default SignUp;
