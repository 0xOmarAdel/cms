import React, { useCallback, useEffect, useState } from 'react'
import PaginationHandler from "../../UI/PaginationHandler";
import { Link, useParams } from 'react-router-dom'
import DateFormatter from '../../UI/DateFormatter';

import dummyData from '../../dummy-data.json'

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);

  const getComplaints = useCallback(async () => {
    const response = await fetch('http://localhost:80/cms-api/complaints.php');

    const data = await response.json();
  
    setComplaints(data);
  }, []);

  useEffect(() => {
    getComplaints();
  }, [getComplaints]);

  let { page: currentPage } = useParams();
  const elementsPerPage = 10;
  const start = (currentPage - 1) * elementsPerPage;
  const end = start + elementsPerPage;
  
  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <h1 className='mb-4'>Complaints</h1>
          <div className='table-heading row py-3'>
            <div className='col-1'>
              <p>ID</p>
            </div>
            <div className='col-3'>
              <p>Title</p>
            </div>
            <div className='col-2'>
              <p>Category</p>
            </div>
            <div className='col-2'>
              <p>User</p>
            </div>
            <div className='col-2'>
              <p>Created At</p>
            </div>
            <div className='col-2'>
              <p>Last Modified</p>
            </div>
          </div>

          {
            dummyData.complaints.slice(start, end).map(complaint => 
              <div key={complaint.id} className='table-row py-3'>
                <Link to={`/admin/complaint/${complaint.id}`}>
                  <div className='row'>
                    <div className='col-1'>
                      <p>{complaint.id}</p>
                    </div>
                    <div className='col-3'>
                      <p>{complaint.title}</p>
                    </div>
                    <div className='col-2'>
                      <p>{complaint.categoryName}</p>
                    </div>
                    <div className='col-2'>
                      <p>{complaint.userName}</p>
                    </div>
                    <div className='col-2'>
                      <p>
                        <DateFormatter date={complaint.date_created} />
                      </p>
                    </div>
                    <div className='col-2'>
                      <p>
                        <DateFormatter date={complaint.last_modified} />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }

        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
        <PaginationHandler currentPage={currentPage} elementsPerPage={elementsPerPage} dataLength={dummyData.complaints.length} />
        </div>
      </div>
    </>
  )
}

export default Complaints