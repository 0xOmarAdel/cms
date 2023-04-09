import React from 'react'
import Pagination from '../../UI/Pagination'
import { useParams } from 'react-router-dom'

const Complaints = () => {
  const complaints = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      category: 'Electricity',
      user: 'Marwan Yasser',
      createdAt: 'Jan 3, 2021',
      lastModified: 'Jan 3, 2021'
    }
  ]

  let { page: currentPage } = useParams();

  const elementsPerPage = 10;
  const pagesNumber = Math.ceil(complaints.length / elementsPerPage) === 0 ? 1 :  Math.ceil(complaints.length / elementsPerPage);

  const start = (currentPage - 1) * elementsPerPage
  const end = start + 10;
  
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
            complaints.slice(start, end).map(complaint => 
              <div key={complaint.id} className='table-row py-3'>
                <div className='row'>
                  <div className='col-1'>
                    <p>{complaint.id}</p>
                  </div>
                  <div className='col-3'>
                    <p>{complaint.title}</p>
                  </div>
                  <div className='col-2'>
                    <p>{complaint.category}</p>
                  </div>
                  <div className='col-2'>
                    <p>{complaint.user}</p>
                  </div>
                  <div className='col-2'>
                    <p>{complaint.createdAt}</p>
                  </div>
                  <div className='col-2'>
                    <p>{complaint.lastModified}</p>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Pagination pagesNumber={pagesNumber} currentPage={currentPage} />
        </div>
      </div>
    </>
  )
}

export default Complaints