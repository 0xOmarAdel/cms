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
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.";

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
    <div className="main d-flex align-items-center">
      <div className="container h-100">
        <div className="row align-items-center h-100 m-3 m-sm-0">
          <div className="col-sm-12 col-lg-7 mb-5 mb-lg-0">
            <Intro title={introTitle} text={introText} />
          </div>
          <div className="col-sm-12 col-lg-5">
            <div className="form p-5 pb-4 m-0 m-lg-5 me-lg-0">
              <p className="text-center font-weight-bold mb-4">Log In</p>
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
                  className="full-width mt-4"
                  style={{ fontSize: "16px" }}
                  disabled={!formIsValid}
                />
                <hr className="mt-5 mb-4" />
                <p className="text-center text-muted">
                  Don&apos;t have an account?{" "}
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
