import { useDispatch } from "react-redux";
import { login } from "../../store/slices/userAuthSlice";
import useInput from "../../hooks/useInput";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const AdminLogIn = () => {
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
    <div className="h-screen flex flex-row items-center justify-center">
      <div className="p-10 flex flex-col items-center gap-5 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl">Admin Login</h2>
        <form
          className="flex flex-col gap-5 text-gray-500"
          onSubmit={submitHandler}
        >
          <div className="form-group flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              className={`!text-lg ${emailInputHasError && "invalid"}`}
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputHasError && (
              <p className="error-text">Enter a valid email.</p>
            )}
          </div>
          <div className="form-group flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              className={`!text-lg ${passwordInputHasError && "invalid"}`}
              value={enteredPassword}
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
            />
            {passwordInputHasError && (
              <p className="error-text">Enter a valid password.</p>
            )}
          </div>
          <Button
            text="Login"
            className={`w-full text-lg ${
              !formIsValid &&
              "!bg-none !bg-gray-500 !opacity-100 !cursor-default"
            }`}
            type="submit"
            disabled={!formIsValid}
          />
        </form>
      </div>
    </div>
  );
};
export default AdminLogIn;
