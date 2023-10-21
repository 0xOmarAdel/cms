import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userAuthSlice";
import useAxios from "../hooks/useAxios";
import Alert from "../UI/Alert";
import Hero from "../UI/Hero";
import PaginationHandler from "../UI/PaginationHandler";
import StatusFormatter from "../UI/StatusFormatter";
import DateFormatter from "../UI/DateFormatter";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import classes from "./MyComplaints.module.css";

const MyComplaints = () => {
  let { page: currentPage } = useParams();
  const elementsPerPage = 10;
  const start = (currentPage - 1) * elementsPerPage;
  const end = start + elementsPerPage;

  const user = useSelector(selectUser);

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
      <section className="complaints px-8 px-sm-0">
        <div className="container">
          <div className="row">
            {user.role === "user" && (
              <Alert path="/create-complaint" icon>
                Need help? create a new complaint from here.
              </Alert>
            )}
          </div>
          <div className="flex flex-wrap gap-4">
            {userComplaints.slice(start, end).map((complaint) => (
              <div
                key={complaint._id}
                className={`w-full ${classes.complaint} mb-3 text-muted p-4`}
              >
                <Link to={`/complaint/${complaint._id}`}>
                  <div className="flex md:flex-row flex-col justify-between">
                    <p className="text-lg font-semibold mb-2">
                      {complaint.title}
                    </p>
                    <p className="complaint-category">{complaint.category}</p>
                    <p className="complaint-date-created">
                      <DateFormatter date={complaint.date_created} />
                    </p>
                    <p className="complaint-status">
                      <StatusFormatter status={complaint.status} />
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <PaginationHandler
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
            dataLength={userComplaints.length}
          />
        </div>
      </section>
    </>
  );
};

export default MyComplaints;
