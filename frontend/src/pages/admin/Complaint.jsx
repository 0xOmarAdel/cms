import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import Loading from "../../UI/Loading";
import { useState } from "react";
import ComplaintChat from "../../components/Complaint/ComplaintChat";
import ComplaintDetails from "../../components/Complaint/ComplaintDetails";
import ComplaintUserDetails from "../../components/Complaint/ComplaintUserDetails";
import ComplaintForm from "../../components/Complaint/ComplaintForm";
import ErrorText from "../../UI/ErrorText";

const Complaint = () => {
  const { id } = useParams();

  const {
    data: complaintDetails,
    loading: complaintDetailsLoading,
    error: complaintDetailsError,
    reFetch: reFetchComplaintDetails,
  } = useAxios(
    `https://cms-complaints-api.onrender.com/api/v1/complaints/${id}`,
    "GET"
  );

  const {
    data: messages,
    loading: messagesIsLoading,
    error: messagesHasError,
    reFetch: reFetchMessages,
  } = useAxios(
    `https://cms-complaints-api.onrender.com/api/v1/messages/complaint/${id}`,
    "GET"
  );

  const [message, setMessage] = useState("");

  const closeComplaintHandler = async () => {
    await axios({
      method: "PUT",
      url: `https://cms-complaints-api.onrender.com/api/v1/complaints/close/${id}`,
    });

    reFetchComplaintDetails();
  };

  if (complaintDetailsLoading || messagesIsLoading) return <Loading />;

  if (complaintDetailsError || messagesHasError)
    return <ErrorText text="An Error occurred" className="!text-xl" />;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-7">
      <div className="lg:col-span-2 flex flex-col gap-5">
        <ComplaintChat messages={messages} />
        <ComplaintForm
          complaintId={id}
          message={message}
          setMessage={setMessage}
          status={complaintDetails.status}
          reFetchComplaintDetails={reFetchComplaintDetails}
          reFetchMessages={reFetchMessages}
        />
      </div>
      <div className="lg:col-span-1 flex flex-col gap-8">
        <ComplaintDetails
          complaintDetails={{ ...complaintDetails, id }}
          closeComplaintHandler={closeComplaintHandler}
        />
        <ComplaintUserDetails complaintDetails={complaintDetails} />
      </div>
    </div>
  );
};

export default Complaint;
