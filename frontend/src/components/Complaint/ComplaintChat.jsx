import ScrollableDiv from "../../UI/ScrollableDiv";
import DateFormatter from "../../UI/DateFormatter";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userAuthSlice";

const ComplaintChat = ({ messages }) => {
  const user = useSelector(selectUser);
  console.log(user);

  const isSent = (value) => {
    return user.role === "user" ? parseInt(value) === 1 : parseInt(value) === 0;
  };

  return (
    <div className="p-5 pr-0 bg-[#efeff0] rounded-lg">
      <ScrollableDiv className=" h-[550px] flex items-end">
        <div className="w-full max-h-full flex flex-col gap-3">
          {messages.map((message) => (
            <div
              className={
                isSent(message.from)
                  ? "w-fit max-w-[60%]"
                  : "w-fit max-w-[60%] ml-auto"
              }
              key={message.id}
            >
              <div
                className={`lex flex-col ${
                  isSent(message.from) ? "items-end" : "items-start"
                }`}
              >
                <p
                  className={`p-2 rounded-lg tracking-wide break-all ${
                    isSent(message.from) ? "bg-sky-200" : "bg-sky-500"
                  }`}
                >
                  {message.text}
                </p>
                <p
                  className={`text-sm text-gray-500 font-semibold ${
                    isSent(message.from) ? "text-left" : "text-right"
                  }`}
                >
                  <DateFormatter date={message.date} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollableDiv>
    </div>
  );
};

export default ComplaintChat;
