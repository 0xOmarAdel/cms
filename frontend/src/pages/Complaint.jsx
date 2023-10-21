import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Hero from "../UI/Hero";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { useState } from "react";
import ComplaintForm from "../components/Complaint/ComplaintForm";
import ComplaintDetails from "../components/Complaint/ComplaintDetails";
import ComplaintChat from "../components/Complaint/ComplaintChat";

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
      <Hero title={complaintDetails.title} headTitle="Complaint Title:" />
      <div className="py-16 px-20 flex flex-col lg:grid lg:grid-cols-3 gap-7">
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
      </div>
    </>
  );
};

export default Complaint;
