import { useParams } from "react-router-dom";
import ScrollableDiv from "../../UI/ScrollableDiv";
import classes from "../Complaint.module.css";
import DateFormatter from "../../UI/DateFormatter";
import StatusFormatter from "../../UI/StatusFormatter";
import useInput from "../../hooks/useInput";
import useAxios from "../../hooks/useAxios";
import axios from "axios";

const Complaint = () => {
  const { id } = useParams();

  const {
    data: complaintDetails,
    loading: complaintDetailsLoading,
    error: complaintDetailsError,
  } = useAxios(`http://localhost:5000/api/v1/complaints/${id}`, "GET");

  const {
    data: messages,
    loading: messagesIsLoading,
    error: messagesHasError,
  } = useAxios(`http://localhost:5000/api/v1/messages/complaint/${id}`, "GET");

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

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    await axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/messages",
      data: {
        complaintId: id,
        text: enteredMessage,
      },
    });

    resetMessageInput();
  };

  if (complaintDetailsLoading || messagesIsLoading) return;

  return (
    <div className={`row ${classes.complaint}`}>
      <div className="col-sm-12 col-lg-8 mb-5 mb-lg-0">
        <div className={`${classes.messages} mb-4`}>
          <ScrollableDiv
            className="d-flex align-items-end"
            style={{ height: "550px" }}
          >
            <div className="row full-width" style={{ maxHeight: "100%" }}>
              {messages.map((message) => (
                <div
                  className={
                    parseInt(message.from) === 0
                      ? "col-7 p-0"
                      : "col-7 p-0 ms-auto"
                  }
                  key={message.id}
                >
                  <div
                    className={
                      parseInt(message.from) === 1
                        ? "d-flex align-items-end"
                        : "d-flex align-items-start"
                    }
                    style={{ flexDirection: "column" }}
                  >
                    <p
                      className={
                        parseInt(message.from) === 1
                          ? classes.message + " " + classes.sent + " mb-1"
                          : classes.message + " mb-1"
                      }
                    >
                      {message.text}
                    </p>
                    <p
                      className={
                        parseInt(message.from) === 1
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
      <div className="col-sm-12 col-lg-4 ps-5">
        <h2 className="mb-4">Complaint Details</h2>
        <ul className="mb-5">
          <li>
            <p>ID: {id}</p>
          </li>
          <li>
            <p>Title: {complaintDetails.title}</p>
          </li>
          <li>
            <p>Category: {complaintDetails.categoryName}</p>
          </li>
          <li>
            <p>
              Created At: <DateFormatter date={complaintDetails.date_created} />
            </p>
          </li>
          <li>
            <p>
              Status: <StatusFormatter status={complaintDetails.status} />
              {parseInt(complaintDetails.status) === 1 ? (
                <i className="fa-solid fa-lock ms-2"></i>
              ) : (
                <i
                  className="fa-solid fa-lock-open ms-2"
                  onClick={closeComplaintHandler}
                ></i>
              )}
            </p>
          </li>
          {parseInt(complaintDetails.status) === 1 && (
            <li>
              <p>
                Closed At: <DateFormatter date={complaintDetails.date_closed} />
              </p>
            </li>
          )}
        </ul>
        <h2 className="mb-4">User Details</h2>
        <ul>
          <li>
            <p>ID: {complaintDetails.userId}</p>
          </li>
          <li>
            <p>Name: {complaintDetails.userName}</p>
          </li>
          <li>
            <p>Email: {complaintDetails.userEmail}</p>
          </li>
          <li>
            <p>Phone: {complaintDetails.userPhone}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Complaint;
