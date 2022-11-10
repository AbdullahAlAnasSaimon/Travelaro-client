import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const EditReview = () => {
  const review = useLoaderData();
  const { _id, description, serviceName, serviceId } = review;

  const handleUpdateReview = event =>{
    event.preventDefault();
    const description = event.target.details.value;
    fetch(`https://travelaro-server.vercel.app/reviews/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({description})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        toast.success('Review Updated');
      }
    })
  }

  return (
    <div className='w-11/12 md:w-10-12 mx-auto my-20'>
      <div className='border-2 p-2 my-3 flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-10/12 mx-auto rounded-md'>
        <div>
          <h4 className='text-xl font-semibold hover:underline'><Link to={`/services/${serviceId}`}>{serviceName}</Link></h4>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <form onSubmit={handleUpdateReview}>
          <div className='m-7'>
            <div className='w-full'>
              <div className='w-full'>
                <label htmlFor="title" className='block'>Write Your Review</label>
                <textarea className='w-full h-28 block p-2 my-2 outline-0  border-2 border-gray-400 rounded-md focus:border-emerald-400' name="details" id="" placeholder='Write Your Feedback'></textarea>
              </div>
            </div>
          </div>
          <button className='ml-5 btn bg-emerald-500 hover:bg-emerald-400 border-0' type='submit'>Update Review</button>
        </form>
      </div>
    </div>
  );
};

export default EditReview;