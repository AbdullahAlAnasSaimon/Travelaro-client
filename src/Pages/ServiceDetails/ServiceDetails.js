import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../Hook/useTitle/useTitle';
import ShowReviews from './ShowReviews/ShowReviews';


const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  const { _id, name, price, rating, photo, details } = service;
  const navigate = useNavigate();
  useTitle("Service Details")

  // sort to decending order
  // console.log(reviews.sort((a, b) => b.insertTime - a.insertTime))

  useEffect(() => {

    fetch(`http://localhost:5000/reviews/${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))

  }, [_id])

  const handleAddReview = () => {
    if (!user) {
      return toast.error('You have to login first');
    }
  }

  const handleReviewSubmit = event => {
    event.preventDefault();
    const description = event.target.details.value;
    const date = new Date().getTime();
    // const time = date.getTime();

    const reviewInfo = {
      serviceId: _id,
      serviceName: name,
      email: user?.email,
      photo: user?.photoURL,
      userName: user?.displayName,
      description,
      insertTime: date
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){
        toast.success('Service Added Successfully');
        const newReview = [reviewInfo, ...reviews];
        setReviews(newReview);
      }
    })
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
      {!user &&
        <button onClick={handleAddReview} className="btn btn-primary">Add Review</button>
      }
      {
        user &&
        <div>
          <form onSubmit={handleReviewSubmit}>
            <div className='m-7'>
              <div className='flex'>
                <span className=''>
                  <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                </span>
                <div className='w-full'>
                  <div className='w-full'>
                    <label htmlFor="title" className='block'>Write Your Review</label>
                    <textarea className='w-full h-28 block p-2 my-2 outline-0  border-2 border-gray-400 rounded-md focus:border-emerald-400' name="details" id="" placeholder='Write Your Feedback'></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button className='ml-5 btn bg-emerald-500 hover:bg-emerald-400 border-0' type='submit'>Post Review</button>
          </form>
        </div>
      }
      <div>
        {
          reviews.map(review => <ShowReviews
          key={review._id}
          review={review}
          ></ShowReviews>)
        }
      </div>
    </div>
  );
};

export default ServiceDetails;