import React from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    },
    {
      id: 1,
      title: 'Electricity',
      number: 10
    }
  ]

  return (
    <>
      <div className='row'>
        <div className='col-4'>
          <h1 className='mb-4'>Categories</h1>
          <div className='table-heading row py-3'>
            <div className='col-3'>
              <p>ID</p>
            </div>
            <div className='col-5'>
              <p>Title</p>
            </div>
            <div className='col-4'>
              <p>Complaints</p>
            </div>
          </div>

          {
            categories.map(category => 
              <div key={category.id} className='table-row py-3'>
                <div className='row'>
                  <div className='col-3'>
                    <p>{category.id}</p>
                  </div>
                  <div className='col-5'>
                    <p>{category.title}</p>
                  </div>
                  <div className='col-4'>
                    <p>{category.number}</p>
                  </div>

                </div>
              </div>
            )
          }

        </div>
        <div className='offset-1 col-7'>
        <h1 className='mb-4'>Add Category</h1>
          <form>
            <div className='row'>
              <Input type='number' placeholder='ID' disabled className='mb-3' />
              <Input type='text' id='name' placeholder='Title' className='mb-3' />
              <Button className='full-width mt-3' style={{ padding: '8px' }}>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Categories