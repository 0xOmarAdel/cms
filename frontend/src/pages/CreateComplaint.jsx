import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAxios from "../hooks/useAxios";
import useInput from "../hooks/useInput";
import Hero from "../UI/Hero";
import Alert from "../UI/Alert";
import Button from "../UI/Button";
import UserPageLoading from "../components/States/UserPageLoading";
import UserPageError from "../components/States/UserPageError";

const CreateComplaint = () => {
  const navigate = useNavigate();

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesHasError,
  } = useAxios("http://localhost:5000/api/v1/categories", "GET");

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

  const [submitting, setSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    setSubmitting(true);

    try {
      await axios({
        method: "POST",
        url: "http://localhost:5000/api/v1/complaints",
        data: {
          title: enteredTitle,
          category: enteredCategory || categories[0]._id,
          text: enteredMessage,
        },
      });

      setSubmitting(false);
      navigate("/my-complaints");
    } catch (error) {
      setSubmitting(false);
      setSubmittingError(true);
    }
  };

  if (categoriesLoading) {
    return <UserPageLoading title="Create a New Complaint" />;
  }

  if (categoriesHasError) {
    return <UserPageError title="Create a New Complaint" />;
  }

  return (
    <>
      <Hero title="Create a New Complaint" />
      <section>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
          <form
            className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-6"
            onSubmit={submitHandler}
          >
            {submittingError && (
              <p className="error-text text-center mb-3">
                An error occurred while submitting your complaint.
              </p>
            )}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <input
                  className={titleInputClasses}
                  name="title"
                  placeholder="Title"
                  onChange={titleInputChangeHandler}
                  onBlur={titleInputBlurHandler}
                  value={enteredTitle}
                />
                {titleInputHasError && (
                  <p className="error-text">
                    Title must be [10, 50] characters.
                  </p>
                )}
              </div>
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
            <div className="flex flex-col gap-1">
              <textarea
                className={messageInputClasses}
                placeholder="Message"
                onChange={messageInputChangeHandler}
                onBlur={messageInputBlurHandler}
                value={enteredMessage}
              />
              {messageInputHasError && (
                <p className="error-text">
                  Message must be at least 50 characters.
                </p>
              )}
            </div>
            <div className="flex flex-row gap-5">
              <Button
                text="Cancel"
                onClick={() => {
                  navigate("/my-complaints");
                }}
              />
              <Button text="Submit" disabled={submitting} />
            </div>
          </form>
          <div className="lg:col-span-1 order-1 lg:order-2 flex flex-col gap-3">
            <Alert
              path="/FAQ"
              icon={true}
              text="Take a look at our FAQ page to quickly find your answers."
            />
            <Alert
              path="/my-complaints"
              icon={true}
              text="View your previously created complaints from here."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateComplaint;
