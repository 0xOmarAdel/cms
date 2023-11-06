import DateFormatter from "../../UI/DateFormatter";
import StatusFormatter from "../../UI/StatusFormatter";
import { FaLock, FaLockOpen } from "react-icons/fa6";

const ComplaintDetails = ({ complaintDetails, closeComplaintHandler }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg text-gray-600 font-semibold tracking-wide">
        Complaint Details
      </h2>
      <ul className="flex flex-col gap-2 text-gray-500">
        <li>ID: {complaintDetails.id}</li>
        <li>Title: {complaintDetails.title}</li>
        <li>Category: {complaintDetails.category}</li>
        <li>
          Created At: <DateFormatter date={complaintDetails.date_created} />
        </li>
        <li className="flex flex-row items-center gap-2">
          Status: <StatusFormatter status={complaintDetails.status} />
          {closeComplaintHandler &&
            (parseInt(complaintDetails.status) === 1 ? (
              <FaLock
                onClick={closeComplaintHandler}
                className="cursor-pointer"
              />
            ) : (
              <FaLockOpen className="cursor-pointer" />
            ))}
        </li>
        {parseInt(complaintDetails.status) === 0 && (
          <li>
            Closed At: <DateFormatter date={complaintDetails.date_closed} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default ComplaintDetails;
