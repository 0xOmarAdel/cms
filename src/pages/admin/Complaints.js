import React, { useCallback, useEffect, useState } from "react";
import PaginationHandler from "../../UI/PaginationHandler";
import { Link, useParams, useSearchParams } from "react-router-dom";
import DateFormatter from "../../UI/DateFormatter";

import dummyData from "../../dummy-data.json";
import Badge from "../../UI/Badge";
import useSearch from "../../hooks/useSearch";
import useHttp from "../../hooks/useHttp";
import SearchBar from "../../UI/SearchBar";
import SelectBar from "../../UI/SelectBar";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const { isLoading, error, sendRequest: getComplaints } = useHttp();
  const { setOriginalArray, filterArray, filteredArray, inputValue } = useSearch();

  const dataHandler = useCallback(
    (data) => {
      setComplaints(data);
      setOriginalArray(data);
    },
    [setOriginalArray]
  );

  const searchHandler = (value) => {
    filterArray("title", value);
  };

  useEffect(() => {
    getComplaints(
      { url: "http://localhost:80/cms-api/complaints.php" },
      dataHandler
    );
  }, [getComplaints, dataHandler]);

  const [sortBy, SetSortBy] = useState("id");

  const sort = (arr) => {
    if (sortBy === "title") {
      arr.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
    } else if (sortBy === "category") {
      arr.sort((a, b) =>
        a.categoryName > b.categoryName
          ? 1
          : b.categoryName > a.categoryName
          ? -1
          : 0
      );
    } else if (sortBy === "user") {
      arr.sort((a, b) =>
        a.userName > b.userName ? 1 : b.userName > a.userName ? -1 : 0
      );
    } else if (sortBy === "id") {
      arr.sort((a, b) => a.id - b.id);
    } else {
      arr.reverse();
    }

    return arr;
  };

  const sortHandler = (e) => {
    SetSortBy(e.target.value);
    console.log(e.target.value);
  };

  let { page: currentPage } = useParams();
  const elementsPerPage = 10;
  const start = (currentPage - 1) * elementsPerPage;
  const end = start + elementsPerPage;

  if (dummyData.complaints.length === 0) {
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Complaints</h1>
          <p className="error-message">Found 0 records.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Complaints</h1>
          <div className="mb-3">
            <form>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12 ps-0 pd">
                  <SearchBar
                    value={inputValue}
                    onChange={(e) => searchHandler(e.target.value)}
                  />
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 ps-0 pd">
                  <SelectBar onChange={sortHandler} />
                </div>
                <div className="col-auto d-flex align-items-center">
                  <ul className=" d-flex">
                    <li>
                      <Badge className="me-2" text="Pending" />
                    </li>
                    <li>
                      <Badge text="Closed" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="table-heading row d-none d-lg-flex py-3">
            <div className="col-1">
              <p>ID</p>
            </div>
            <div className="col-3">
              <p>Title</p>
            </div>
            <div className="col-2">
              <p>Category</p>
            </div>
            <div className="col-2">
              <p>User</p>
            </div>
            <div className="col-2">
              <p>Created At</p>
            </div>
            <div className="col-2">
              <p>Last Modified</p>
            </div>
          </div>

          {sort(filteredArray, sortBy)
            .slice(start, end)
            .map((complaint) => (
              <div key={complaint.id} className="table-row py-3">
                <Link to={`/admin/complaint/${complaint.id}`}>
                  <div className="row">
                    <div className="d-none d-lg-block col-1">
                      <p>{complaint.id}</p>
                    </div>
                    <div className="d-none d-lg-block col-3">
                      <p>{complaint.title}</p>
                    </div>
                    <div className="d-none d-lg-block col-2">
                      <p>{complaint.categoryName}</p>
                    </div>
                    <div className="d-none d-lg-block col-2">
                      <p>{complaint.userName}</p>
                    </div>
                    <div className="d-none d-lg-block col-2">
                      <p>
                        <DateFormatter date={complaint.date_created} />
                      </p>
                    </div>
                    <div className="d-none d-lg-block col-2">
                      <p>
                        <DateFormatter date={complaint.last_modified} />
                      </p>
                    </div>

                    <div className="d-block d-lg-none col-12">
                      <p>ID: {complaint.id}</p>
                    </div>
                    <div className="d-block d-lg-none col-12">
                      <p>Title: {complaint.title}</p>
                    </div>
                    <div className="d-block d-lg-none col-12">
                      <p>Category Name: {complaint.categoryName}</p>
                    </div>
                    <div className="d-block d-lg-none col-12">
                      <p>User: {complaint.userName}</p>
                    </div>
                    <div className="d-block d-lg-none col-12">
                      <p>
                        Date Created:{" "}
                        <DateFormatter date={complaint.date_created} />
                      </p>
                    </div>
                    <div className="d-block d-lg-none col-12">
                      <p>
                        Last Updated:{" "}
                        <DateFormatter date={complaint.last_modified} />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PaginationHandler
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
            dataLength={filteredArray.length}
          />
        </div>
      </div>
    </>
  );
};

export default Complaints;
