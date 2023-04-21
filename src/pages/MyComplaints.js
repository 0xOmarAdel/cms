import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Alert from '../UI/Alert'
import Hero from '../UI/Hero'
import Pagination from '../UI/Pagination'

import classes from './MyComplaints.module.css'
import AuthContext from '../store/auth-context'
import PaginationHandler from '../UI/PaginationHandler'

const MyComplaints = () => {
  const ctx = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(ctx.isLoggedIn)
  }, [ctx.isLoggedIn])

  const [userComplaints, setUserComplaints] = useState([]);

  const getUserComplaints = useCallback(async () => {
    const response = await fetch(
      'http://localhost:80/cms-api/getUserComplaints.php', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(localStorage.getItem('nationalId')),
      }
    );

    const data = await response.json();
    console.log(data)
  
    setUserComplaints(data);
  }, []);

  useEffect(() => {
    getUserComplaints();
  }, [getUserComplaints]);

  let { page: currentPage } = useParams();

  const elementsPerPage = 10;
  const pagesNumber = Math.ceil(userComplaints.length / elementsPerPage) === 0 ? 1 : Math.ceil(userComplaints.length / elementsPerPage);

  const start = (currentPage - 1) * elementsPerPage;
  const end = start + elementsPerPage;

  return (
    <>
      <Hero title='My Complaints' />
      <section className='complaints'>
        <div className='container'>
          <div className='row'>
            <Alert path='/create-complaint' icon>Need help? create a new complaint from here.</Alert>
          </div>

          {
            userComplaints.slice(start, end).map((complaint) => 
              <div key={complaint.id} className={`${classes.complaint} mb-3 text-muted`}>
                <Link to={`/complaint/${complaint.id}`}>
                  <div className='row align-items-center'>
                    <div className='col-5 ps-0 text-left'>
                      <i className="fa-regular fa-envelope pe-3"></i>
                      <p className='d-inline-block complaint-name'>{complaint.title}</p>
                    </div>
                    <div className='col-2'>
                      <p className='complaint-category'>{complaint.categoryName}</p>
                    </div>
                    <div className='col-2'>
                      <p className='complaint-date-created'>{complaint.date_created}</p>
                    </div>
                    <div className='col-2'>
                      <p className='complaint-last-updated'>{complaint.last_modified}</p>
                    </div>
                    <div className='col-1 pe-0 text-right'>
                      <p className='complaint-status'>{complaint.status}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }
          
          <PaginationHandler currentPage={currentPage} elementsPerPage={elementsPerPage} dataLength={userComplaints.length} />
        </div>
      </section>
    </>
  )
}

export default MyComplaints