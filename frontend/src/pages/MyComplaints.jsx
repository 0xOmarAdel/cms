import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Alert from "../UI/Alert";
import Hero from "../UI/Hero";
import PaginationHandler from "../UI/PaginationHandler";
import StatusFormatter from "../UI/StatusFormatter";
import DateFormatter from "../UI/DateFormatter";
import Loading from "../UI/Loading";
import Error from "../UI/Error";

const MyComplaints = () => {
  let { page: currentPage } = useParams();
  const elementsPerPage = 10;
  const start = (currentPage - 1) * elementsPerPage;
  const end = start + elementsPerPage;

  const {
    data: userComplaints,
    loading: userComplaintsLoading,
    error: userComplaintsHasError,
  } = useAxios("http://localhost:5000/api/v1/complaints", "GET");

  if (userComplaintsLoading) {
    return (
      <>
        <Hero title="My Complaints" />
        <section className="complaints text-center">
          <Loading />
        </section>
      </>
    );
  }

  if (userComplaintsHasError) {
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
      <Hero title="My Complaints" />
      <section className="flex flex-col gap-6">
        <Alert
          path="/create-complaint"
          icon={true}
          text="Need help? create a new complaint from here."
        />
        <div className="flex flex-col gap-4">
          {userComplaints.slice(start, end).map((complaint) => (
            <div
              key={complaint._id}
              className="w-full pb-2 border-b last-of-type:border-b-0 text-gray-500 font-semibold transition duration-500 hover:text-gray-600"
            >
              <Link
                to={`/complaint/${complaint._id}`}
                className="md:grid md:grid-cols-12 items-center"
              >
                <p className="col-span-5 text-lg">{complaint.title}</p>
                <p className="col-span-3">{complaint.category}</p>
                <p className="col-span-3">
                  <DateFormatter date={complaint.date_created} />
                </p>
                <p className="col-span-1 justify-self-end">
                  <StatusFormatter status={complaint.status} />
                </p>
              </Link>
            </div>
          ))}
        </div>

        <PaginationHandler
          currentPage={currentPage}
          elementsPerPage={elementsPerPage}
          dataLength={userComplaints.length}
        />
      </section>
    </>
  );
};

export default MyComplaints;
