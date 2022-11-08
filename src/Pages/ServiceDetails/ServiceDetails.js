import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);
  const service = useLoaderData();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const { id, title, price, rating, thumb, details } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [reviews, id])

  const handleAddReview = () =>{
    if(!user){
      return toast.error('You have to login first');
    }
    return navigate('/services');
  }

  return (
    <div>
      <h2>The service details page</h2>
      <div className="card card-compact w-96 bg-base-100 shadow-lg z-0">
        <figure><img className='h-[300px]' src={thumb} alt="Shoes" /></figure>
        <div className="card-body">
          <p>{rating}</p>
          <h2 className="card-title">{title}</h2>
          <p>{details.slice(0, 80) + '...'}</p>
          <div className="card-actions justify-between mt-5">
            <h2 className='text-4xl font-bold'>${price}</h2>
            {
              <button onClick={handleAddReview} className="btn btn-primary">Add Review</button>
            }
          </div>
        </div>
      </div>
      <div>
        {
          reviews.map(r => <Review
            key={r.id}
            r={r}
          ></Review>)
        }
      </div>

    </div>
  );
};


const Review = ({ r }) => {
  return (
    <div>
      <FaUserCircle className='inline-block' />
      <div className='inline-block'>
        <div className="rating" id='rating'>
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
        </div>
        <p>{r.details}</p>
      </div>
    </div>
  );
};


export default ServiceDetails;