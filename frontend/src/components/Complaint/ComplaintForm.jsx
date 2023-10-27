import axios from "axios";
import TextareaForm from "../../UI/TextareaForm";

const ComplaintForm = ({
  complaintId,
  message,
  setMessage,
  status,
  reFetchComplaintDetails,
  reFetchMessages,
}) => {
  const sendMessageHandler = async () => {
    await axios({
      method: "POST",
      url: "https://cms-complaints-api.onrender.com/api/v1/messages",
      data: {
        complaintId,
        text: message,
      },
    });

    setMessage("");

    if (parseInt(status) === 0) {
      reFetchComplaintDetails();
    }

    reFetchMessages();
  };

  return (
    <TextareaForm
      text={message}
      setText={setMessage}
      placeholder="Your message..."
      submitFunction={sendMessageHandler}
      conditionToSend={(value) => value.trim().length >= 10}
    />
  );
};

export default ComplaintForm;
