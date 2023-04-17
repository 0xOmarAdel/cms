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

  if (dummyData.users.length === 0) {
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Users</h1>
          <p className="error-message">Found 0 records.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Users</h1>
          <div className='table-heading row d-none d-lg-flex py-3'>
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
                <div className="d-none d-lg-block col-1">
                  <p>{user.id}</p>
                </div>
                <div className="d-none d-lg-block col-2">
                  <p>{user.nationalId}</p>
                </div>
                <div className="d-none d-lg-block col-2">
                  <p>{user.name}</p>
                </div>
                <div className="d-none d-lg-block col-3">
                  <p>{user.email}</p>
                </div>
                <div className="d-none d-lg-block col-2">
                  <p>{user.phone}</p>
                </div>
                <div className="d-none d-lg-block col-2">
                  <p>
                    <DateFormatter date={user.created_at} />
                  </p>
                </div>

                <div className='d-block d-lg-none col-12'>
                    <p>ID: {user.id}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>National ID: {user.nationalId}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Name: {user.name}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Email: {user.email}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Phone: {user.phone}</p>
                  </div>
                  <div className='d-block d-lg-none col-12'>
                    <p>Created At: <DateFormatter date={user.created_at} /></p>
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
    </>
  );
};

export default Users;
