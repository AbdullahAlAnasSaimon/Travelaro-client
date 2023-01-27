import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../Hook/useTitle/useTitle';
import ShowReviews from './ShowReviews/ShowReviews';


const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  const { _id, name, price, rating, photo, details } = service;
  useTitle("Service Details")


  useEffect(() => {

    fetch(`https://travelaro-server.vercel.app/reviews/${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))

  }, [_id])


  const handleReviewSubmit = event => {
    event.preventDefault();
    const description = event.target.details.value;
    const date = new Date().getTime();

    const reviewInfo = {
      serviceId: _id,
      serviceName: name,
      email: user?.email,
      photo: user?.photoURL,
      userName: user?.displayName,
      description,
      insertTime: date
    }

    fetch('https://travelaro-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Service Added Successfully');
          const newReview = [reviewInfo, ...reviews];
          setReviews(newReview);
        }
      })
    event.target.reset();
  }

  return (
    <div className='w-11/12 md:w-10/12 mx-auto'>
      <h2 className="text-3xl font-bold my-10 text-center">{name}</h2>
      <div className="mt-20">
        <figure><img className='w-auto md:w-[700px] mx-auto' src={photo} alt="Shoes" /></figure>
        <div className="">
          <p>{rating}</p>
          <h2 className='text-4xl font-bold text-[#42e29d]'>${price}</h2>
          <p className='my-5'>{details}</p>
          <div className="mb-8">
          </div>
          <hr />
        </div>
      </div>
      {!user &&
        <p className='text-center my-10'>Please <Link className='underline text-green-600' to='/login'>Login</Link> to add a review.</p>
      }
      {
        user &&
        <div className='my-10'>
          <form className='mb-10' onSubmit={handleReviewSubmit}>
            <div className='m-7'>
              <div className='flex'>
                <span className='mr-5'>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                </label>
                </span>
                <div className='w-full'>
                  <div className='w-full'>
                    <label htmlFor="title" className='block'>Write Your Review</label>
                    <textarea className='w-full h-28 block p-2 my-2 outline-0  border-2 border-gray-400 rounded-md focus:border-emerald-400' name="details" id="" placeholder='Write Your Feedback'></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button className='ml-5 border-2 border-emerald-400 bg-[#2bf29c] hover:bg-[#19e98f] py-2 px-3 rounded-md' type='submit'>Post Review</button>
          </form>
          <hr />
        </div>
      }
      {reviews.length === 0 ? <p className='text-center text-gray-300 text-xl my-5'>No Review Found</p> : <h2 className='text-center'>Total Review ({reviews.length})</h2>}
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