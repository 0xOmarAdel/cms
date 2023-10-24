import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Hero from "../UI/Hero";
import { useState } from "react";
import ComplaintForm from "../components/Complaint/ComplaintForm";
import ComplaintDetails from "../components/Complaint/ComplaintDetails";
import ComplaintChat from "../components/Complaint/ComplaintChat";
import UserPageError from "../components/States/UserPageError";
import UserPageLoading from "../components/States/UserPageLoading";
import Section from "../layout/Section";

const Complaint = () => {
  const { complaintId } = useParams();

  const [message, setMessage] = useState("");

  const {
    data: complaintDetails,
    loading: complaintDetailsLoading,
    error: complaintDetailsError,
    reFetch: reFetchComplaintDetails,
  } = useAxios(`http://localhost:5000/api/v1/complaints/${complaintId}`, "GET");

  const {
    data: complaintMessages,
    loading: complaintMessagesLoading,
    error: complaintMessagesError,
    reFetch: reFetchComplaintMessages,
  } = useAxios(
    `http://localhost:5000/api/v1/messages/complaint/${complaintId}`,
    "GET"
  );

  if (complaintDetailsLoading || complaintMessagesLoading) {
    return <UserPageLoading title="Complaint Data Loading.." />;
  }

  if (complaintDetailsError || complaintMessagesError) {
    return <UserPageError title="Couldn't Fetch Complaint Data!" />;
  }

  return (
    <>
      <Hero title={complaintDetails.title} headTitle="Complaint Title:" />
      <Section className="flex flex-col lg:grid lg:grid-cols-3 gap-7">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <ComplaintChat messages={complaintMessages} />
          <ComplaintForm
            complaintId={complaintId}
            message={message}
            setMessage={setMessage}
            status={complaintDetails.status}
            reFetchComplaintDetails={reFetchComplaintDetails}
            reFetchMessages={reFetchComplaintMessages}
          />
        </div>
        <ComplaintDetails
          complaintDetails={{ ...complaintDetails, id: complaintId }}
        />
      </Section>
    </>
  );
};

export default Complaint;
