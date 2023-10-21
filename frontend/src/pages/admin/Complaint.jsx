import { useParams } from "react-router-dom";
import ScrollableDiv from "../../UI/ScrollableDiv";
import DateFormatter from "../../UI/DateFormatter";
import StatusFormatter from "../../UI/StatusFormatter";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import Loading from "../../UI/Loading";
import Error from "../../UI/Error";
import TextareaForm from "../../UI/TextareaForm";
import { useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa6";

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

  const [message, setMessage] = useState("");

  const sendMessageHandler = async () => {
    await axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/messages",
      data: {
        complaintId: id,
        text: message,
      },
    });

    setMessage("");
  };

  const closeComplaintHandler = async () => {
    await axios({
      method: "PUT",
      url: `http://localhost:5000/api/v1/complaints/close/${id}`,
    });
  };

  if (complaintDetailsLoading || messagesIsLoading) return <Loading />;

  if (complaintDetailsError || messagesHasError) return <Error />;
  console.log(messages, complaintDetails);
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-7">
      <div className="lg:col-span-2 flex flex-col gap-5">
        <div className="p-5 pr-0 bg-[#efeff0] rounded-lg">
          <ScrollableDiv className=" h-[550px] flex items-end">
            <div className="w-full max-h-full flex flex-col gap-3">
              {messages.map((message) => (
                <div
                  className={
                    parseInt(message.from) === 0
                      ? "max-w-[60%]"
                      : "max-w-[60%] ml-auto"
                  }
                  key={message.id}
                >
                  <div
                    className={`lex flex-col ${
                      parseInt(message.from) === 1 ? "items-end" : "items-start"
                    }`}
                  >
                    <p
                      className={`p-2 rounded-lg tracking-wide break-all ${
                        parseInt(message.from) === 1
                          ? "bg-[#0257dd96]"
                          : "bg-[#bcbcbc42]"
                      }`}
                    >
                      {message.text}
                    </p>
                    <p className={`text-sm text-gray-500 font-semibold`}>
                      <DateFormatter date={message.date} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollableDiv>
        </div>
        <TextareaForm
          text={message}
          setText={setMessage}
          placeholder="Your message..."
          submitFunction={sendMessageHandler}
          conditionToSend={(value) => value.trim().length >= 10}
        />
      </div>
      <div className="lg:col-span-1 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg text-gray-600 font-semibold tracking-wide">
            Complaint Details
          </h2>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>ID: {id}</li>
            <li>Title: {complaintDetails.title}</li>
            <li>Category: {complaintDetails.category}</li>
            <li>
              Created At: <DateFormatter date={complaintDetails.date_created} />
            </li>
            <li className="flex flex-row items-center gap-2">
              Status: <StatusFormatter status={complaintDetails.status} />
              {parseInt(complaintDetails.status) === 1 ? (
                <FaLock onClick={closeComplaintHandler} />
              ) : (
                <FaLockOpen />
              )}
            </li>
            {parseInt(complaintDetails.status) === 0 && (
              <li>
                Closed At: <DateFormatter date={complaintDetails.date_closed} />
              </li>
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg text-gray-600 font-semibold tracking-wide">
            User Details
          </h2>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>ID: {complaintDetails.userId}</li>
            <li>Name: {complaintDetails.userName}</li>
            <li>Email: {complaintDetails.userEmail}</li>
            <li>Phone: {complaintDetails.userPhone}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
