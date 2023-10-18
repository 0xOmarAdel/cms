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
      <section className="complaints px-3 px-sm-0">
        <div className="container">
          <div className="row">
            {user.role === "user" && (
              <Alert path="/create-complaint" icon>
                Need help? create a new complaint from here.
              </Alert>
            )}
          </div>

          {userComplaints.slice(start, end).map((complaint) => (
            <div
              key={complaint._id}
              className={`${classes.complaint} mb-3 text-muted`}
            >
              <Link to={`/complaint/${complaint._id}`}>
                <div className="row align-items-center">
                  <div className="col-5 ps-0 text-left">
                    <i className="fa-regular fa-envelope pe-3"></i>
                    <p className="d-inline-block complaint-name">
                      {complaint.title}
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="complaint-category">{complaint.category}</p>
                  </div>
                  <div className="col-3">
                    <p className="complaint-date-created">
                      <DateFormatter date={complaint.date_created} />
                    </p>
                  </div>
                  <div className="col-2 pe-0 text-right">
                    <p className="complaint-status">
                      <StatusFormatter status={complaint.status} />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

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
