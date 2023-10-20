import { useParams } from "react-router-dom";
import axios from "axios";
import useAxios from "../hooks/useAxios";
import useInput from "../hooks/useInput";
import Hero from "../UI/Hero";
import ScrollableDiv from "../UI/ScrollableDiv";
import DateFormatter from "../UI/DateFormatter";
import StatusFormatter from "../UI/StatusFormatter";
import classes from "./Complaint.module.css";
import Loading from "../UI/Loading";
import Error from "../UI/Error";

const Complaint = () => {
  const { complaintId } = useParams();

  const {
    value: enteredMessage,
    valueIsValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim().length >= 10);

  const formIsValid = enteredMessageIsValid;

  const messageInputClasses = messageInputHasError
    ? "form-control invalid"
    : "form-control";

  const {
    data: complaintDetails,
    loading: complaintDetailsLoading,
    error: complaintDetailsError,
  } = useAxios(`http://localhost:5000/api/v1/complaints/${complaintId}`, "GET");

  const {
    data: complaintMessages,
    loading: complaintMessagesLoading,
    error: complaintMessagesError,
  } = useAxios(
    `http://localhost:5000/api/v1/messages/complaint/${complaintId}`,
    "GET"
  );

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    await axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/messages",
      data: {
        complaintId,
        text: enteredMessage,
      },
    });

    resetMessageInput();
  };

  if (complaintDetailsLoading || complaintMessagesLoading) {
    return (
      <>
        <Hero title="My Complaints" />
        <section className="complaints text-center">
          <Loading />
        </section>
      </>
    );
  }

  if (complaintDetailsError || complaintMessagesError) {
    return (
      <>
        <Hero title="My Complaints" />
        <section className="complaints text-center">
          <Error />
        </section>
      </>
    );
  }

  return (
    <>
      <Hero title={complaintDetails.title} headTitle="Complaint Name:" />
      <section className={`bg-blue-50 ${classes.complaint}`}>
        <div className="container px-8">
          <div className="gap-5 grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:mb-5 mb-lg-0 lg:ps-5">
              <h2 className="mb-4 font-bold text-xl">Complaint Details</h2>
              <ul>
                <li>
                  <p>ID: {complaintId}</p>
                </li>
                <li>
                  <p>Title: {complaintDetails.title}</p>
                </li>
                <li>
                  <p>Category: {complaintDetails.category}</p>
                </li>
                <li>
                  <p>
                    Created At:{" "}
                    <DateFormatter date={complaintDetails.date_created} />
                  </p>
                </li>
                <li>
                  <p>
                    Status: <StatusFormatter status={complaintDetails.status} />
                  </p>
                </li>
                {parseInt(complaintDetails.status) === 0 && (
                  <li>
                    <p>
                      Closed At:{" "}
                      <DateFormatter date={complaintDetails.date_closed} />
                    </p>
                  </li>
                )}
              </ul>
            </div>
            <div className="lg:order-first lg:col-span-2">
              <div
                className={`mb-4 ${classes.messages} bg-blue-50 dark:bg-gray-800 rounded p-5`}
              >
                <ScrollableDiv
                  className="flex items-end"
                  style={{ height: "550px" }}
                >
                  <div
                    className="grid grid-cols-1"
                    style={{ maxHeight: "100%" }}
                  >
                    {complaintMessages.map((message) => (
                      <div
                        className={`${
                          parseInt(message.from) === 1
                            ? "col-start-1"
                            : "col-start-2"
                        } p-0`}
                        key={message.id}
                      >
                        <div
                          className={`${
                            parseInt(message.from) === 0
                              ? "flex flex-col items-end"
                              : "flex flex-col items-start"
                          }`}
                        >
                          <p
                            className={`${
                              parseInt(message.from) === 0
                                ? `${classes.message} ${classes.sent} mb-1`
                                : `${classes.message} mb-1`
                            } bg-blue-300 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-200 p-2`}
                          >
                            {message.text}
                          </p>
                          <p
                            className={`${
                              parseInt(message.from) === 0
                                ? `${classes.date} ${classes.sent} mb-3`
                                : `${classes.date} mb-3`
                            } opacity-60 text-sm font-bold`}
                          >
                            <DateFormatter date={message.date} />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollableDiv>
              </div>
              <form>
                <div className="grid grid-cols-11 gap-1 p-0">
                  <textarea
                    className={`col-span-10 h-24 ${messageInputClasses}`}
                    placeholder="Message"
                    onChange={messageInputChangeHandler}
                    onBlur={messageInputBlurHandler}
                    value={enteredMessage}
                  />
                  {messageInputHasError && (
                    <p className="error-text mt-2">
                      Message must be at least 10 characters.
                    </p>
                  )}
                  <div className="col-span-1 mt-1 pe-0">
                    <i
                      className={`fa-solid fa-location-arrow ${classes.send} bg-blue-600 dark:bg-gray-700 text-white rounded-full text-3xl cursor-pointer transform rotate-45`}
                      onClick={sendMessageHandler}
                    ></i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Complaint;
