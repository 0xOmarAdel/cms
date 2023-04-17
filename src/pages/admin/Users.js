import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PaginationHandler from "../../UI/PaginationHandler";
import DateFormatter from "../../UI/DateFormatter";

import dummyData from '../../dummy-data.json'

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const response = await fetch("http://localhost:80/cms-api/users.php");

    const data = await response.json();

    setUsers(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  let { page: currentPage } = useParams();
  const elementsPerPage = 10;
  const start = (currentPage - 1) * elementsPerPage;
  const end = start + elementsPerPage;

  return (
    <div className="admins">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Users</h1>
          <div className="table-heading row py-3">
            <div className="col-1">
              <p>ID</p>
            </div>
            <div className="col-2">
              <p>National ID</p>
            </div>
            <div className="col-2">
              <p>Name</p>
            </div>
            <div className="col-3">
              <p>Email</p>
            </div>
            <div className="col-2">
              <p>Phone</p>
            </div>
            <div className="col-2">
              <p>Created At</p>
            </div>
          </div>

          {dummyData.users.slice(start, end).map((user) => (
            <div key={user.id} className="table-row py-3">
              <div className="row">
                <div className="col-1">
                  <p>{user.id}</p>
                </div>
                <div className="col-2">
                  <p>{user.nationalId}</p>
                </div>
                <div className="col-2">
                  <p>{user.name}</p>
                </div>
                <div className="col-3">
                  <p>{user.email}</p>
                </div>
                <div className="col-2">
                  <p>{user.phone}</p>
                </div>
                <div className="col-2">
                  <p>
                    <DateFormatter date={user.created_at} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <PaginationHandler currentPage={currentPage} elementsPerPage={elementsPerPage} dataLength={dummyData.users.length} />
        </div>
      </div>
    </div>
  );
};

export default Users;
