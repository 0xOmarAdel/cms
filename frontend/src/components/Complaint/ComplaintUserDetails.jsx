const ComplaintUserDetails = ({ complaintDetails }) => {
  return (
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
  );
};

export default ComplaintUserDetails;
