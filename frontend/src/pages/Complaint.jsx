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
      <section className={classes.complaint}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5 mb-lg-0 ps-lg-5">
              <h2 className="mb-4">Complaint Details</h2>
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
            <div className="col-12 col-lg-8 order-lg-first">
              <div className={`${classes.messages} mb-4`}>
                <ScrollableDiv
                  className="d-flex align-items-end"
                  style={{ height: "550px" }}
                >
                  <div className="row full-width" style={{ maxHeight: "100%" }}>
                    {complaintMessages.map((message) => (
                      <div
                        className={
                          parseInt(message.from) === 1
                            ? "col-7 p-0"
                            : "col-7 p-0 ms-auto"
                        }
                        key={message.id}
                      >
                        <div
                          className={
                            parseInt(message.from) === 0
                              ? "d-flex align-items-end"
                              : "d-flex align-items-start"
                          }
                          style={{ flexDirection: "column" }}
                        >
                          <p
                            className={
                              parseInt(message.from) === 0
                                ? classes.message + " " + classes.sent + " mb-1"
                                : classes.message + " mb-1"
                            }
                          >
                            {message.text}
                          </p>
                          <p
                            className={
                              parseInt(message.from) === 0
                                ? classes.date + " " + classes.sent + " mb-3"
                                : classes.date + " mb-3"
                            }
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
                <div className="row">
                  <div className="col-11 p-0">
                    <textarea
                      className={messageInputClasses}
                      placeholder="Message"
                      style={{ height: "20px !important" }}
                      onChange={messageInputChangeHandler}
                      onBlur={messageInputBlurHandler}
                      value={enteredMessage}
                    />
                    {messageInputHasError && (
                      <p className="error-text mt-2">
                        Message must be at least 10 characters.
                      </p>
                    )}
                  </div>
                  <div className="col-1 mt-1 pe-0">
                    <i
                      className={`fa-solid fa-location-arrow ${classes.send}`}
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
