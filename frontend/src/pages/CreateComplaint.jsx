import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../UI/Alert";
import Button from "../UI/Button";
import Hero from "../UI/Hero";
import useHTTP from "../hooks/useHttp";
import useInput from "../hooks/useInput";
import axios from "axios";

const CreateComplaint = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const { isLoading, error, sendRequest: getCategories } = useHTTP();
  const {
    isLoading: submitComplaintIsLoading,
    error: submitComplaintHasError,
    sendRequest: submitComplaint,
  } = useHTTP();

  const {
    value: enteredTitle,
    valueIsValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleInputChangeHandler,
    inputBlurHandler: titleInputBlurHandler,
  } = useInput(
    (value) => value.trim().length >= 10 && value.trim().length <= 50
  );

  const {
    value: enteredCategory,
    valueChangeHandler: categoryInputChangeHandler,
    inputBlurHandler: categoryInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    valueIsValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
  } = useInput((value) => value.trim().length >= 50);

  const formIsValid = enteredMessageIsValid && enteredTitleIsValid;

  const titleInputClasses = titleInputHasError
    ? "form-control invalid"
    : "form-control";
  const messageInputClasses = messageInputHasError
    ? "form-control invalid"
    : "form-control";

  const dataHandler = useCallback((data) => {
    setCategories(data);
  }, []);

  useEffect(() => {
    getCategories(
      { url: "http://localhost:5000/api/v1/categories" },
      dataHandler
    );
  }, [getCategories, dataHandler]);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(
      enteredTitle,
      enteredCategory || categories[0]._id,
      enteredMessage
    );
    await axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/complaints",
      data: {
        title: enteredTitle,
        category: enteredCategory || categories[0]._id,
        text: enteredMessage,
      },
    });
  };

  return (
    <>
      <Hero title="Create a New Complaint" />
      <section>
        <div className="container">
          <div className="row px-3 px-md-0">
            <div className="col-12 col-md-8 p-0 pe-md-5">
              <form onSubmit={submitHandler}>
                <div className="row justify-content-center">
                  {submitComplaintHasError && (
                    <p className="error-text text-center mb-3">
                      An error occurred. Couldn't submit your complaint.
                      <br />
                      You will probably need to complain about that as well
                      lmao.
                    </p>
                  )}
                  <div className="col-6 mb-4">
                    <input
                      className={titleInputClasses}
                      name="title"
                      placeholder="Title"
                      onChange={titleInputChangeHandler}
                      onBlur={titleInputBlurHandler}
                      value={enteredTitle}
                    />
                    {titleInputHasError && (
                      <p className="error-text mt-2">
                        Title must not be [10, 50] characters.
                      </p>
                    )}
                  </div>
                  <div className="col-6  mb-4">
                    <select
                      className="form-control"
                      name="categoryId"
                      onChange={categoryInputChangeHandler}
                      onBlur={categoryInputBlurHandler}
                      value={enteredCategory}
                    >
                      {categories.map((category, index) => (
                        <option key={index} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12 mb-4">
                    <textarea
                      className={messageInputClasses}
                      placeholder="Message"
                      onChange={messageInputChangeHandler}
                      onBlur={messageInputBlurHandler}
                      value={enteredMessage}
                    />
                    {messageInputHasError && (
                      <p className="error-text mt-2">
                        Message must be at least 50 characters.
                      </p>
                    )}
                  </div>
                  <Button
                    text="Cancel"
                    className="me-4"
                    onClick={() => {
                      navigate("/my-complaints");
                    }}
                  />
                  <Button text="Submit" disabled={submitComplaintIsLoading} />
                </div>
              </form>
            </div>
            <div className="col-4 d-none d-md-block">
              <Alert path="/FAQ" icon>
                Take a look at our FAQ page to quickly find your answers.
              </Alert>
              <Alert path="/my-complaints" icon>
                View your previously created complaints from here.
              </Alert>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateComplaint;
