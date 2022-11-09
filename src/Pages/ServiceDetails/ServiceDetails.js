import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  const { _id, name, price, rating, photo, details } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [reviews, _id])

  const handleAddReview = () => {
    if (!user) {
      return toast.error('You have to login first');
    }
  }

  const handleReviewSubmit = event =>{
    event.preventDefault();
    const description = event.target.details.value;

    const reviewInfor = {
      email: user?.email,
      photo: user?.PhotoURL,
      userName: user?.displayName,
      serviceId: _id,
      description,
    }
  }

  return (
    <div>
      <h2>The service details page</h2>
      <div className="card card-compact w-96 bg-base-100 shadow-lg z-0">
        <figure><img className='h-[300px]' src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <p>{rating}</p>
          <h2 className="card-title">{name}</h2>
          <p>{details.slice(0, 80) + '...'}</p>
          <div className="card-actions justify-between mt-5">
            <h2 className='text-4xl font-bold'>${price}</h2>
          </div>
        </div>
      </div>
      { !user &&
        <button onClick={handleAddReview} className="btn btn-primary">Add Review</button>
      }
      {
        user && 
        <div>
        <form onSubmit={handleReviewSubmit}>
          <div className='flex justify-between m-7'>
            <div className='w-full'>
              <label htmlFor="title" className='block'>Write Your Review</label>
              <textarea className='w-full h-28 block p-2 my-2 outline-0  border-2 border-gray-400 rounded-md focus:border-emerald-400' name="details" id="" placeholder='Enter Description'></textarea>
            </div>
          </div>
          <button className='ml-5 btn bg-emerald-500 hover:bg-emerald-400 border-0' type='submit'>Post Review</button>
        </form>
      </div>
      }
    </div>
  );
};

/* const ReviewForm = () => {
  <div>
    <form>
      <div className='grid grid-cols-3 gap-x-8 m-7'>
        <div className='col-span-2'>
          <label htmlFor="title" className='block'>Service Name <small>(Max character 28)</small></label>
          <input className='w-full p-2 my-2 outline-0 border-2 border-gray-400 rounded-md focus:border-emerald-400' type="text" name='title' placeholder='Service Name' />
        </div>
        <div>
          <label htmlFor="price" className='block'>Price</label>
          <input className='w-full p-2 my-2 outline-0 border-2 border-gray-400 rounded-md focus:border-emerald-400' type="text" name='price' placeholder='Price' />
        </div>
      </div>
      <div className='w-auto m-7'>
        <label htmlFor="photo" className='block'>Photo Url</label>
        <input className='w-full p-2 my-2 outline-0 border-2 border-gray-400 rounded-md focus:border-emerald-400' type="text" name='photo' placeholder='Photo Url' />
      </div>
      <div className='flex justify-between m-7'>
        <div className='w-full'>
          <label htmlFor="title" className='block'>Description</label>
          <textarea className='w-full h-28 block p-2 my-2 outline-0  border-2 border-gray-400 rounded-md focus:border-emerald-400' name="details" id="" placeholder='Enter Description'></textarea>
        </div>
      </div>
      <button className='ml-5 btn bg-emerald-500 hover:bg-emerald-400 border-0' type='submit'>Add New Service</button>
    </form>
  </div>
} */


export default ServiceDetails;