import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  console.log(myReviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyReviews(data);
      })
  }, [user?.email])

  return (
    <div>
      <h2>My Reviews page</h2>
      <div>
        {
          myReviews.map(review => <SingleReview
            key={review._id}
            review={review}
          ></SingleReview>)
        }
      </div>
    </div>
  );
};

const SingleReview = ({ review }) => {
  const { description, serviceName, serviceId } = review;
  return (
    <div className='border-2 p-2 my-3 flex justify-between items-center w-10/12 mx-auto rounded-md'>
      <div>
        <h4 className='text-xl font-semibold hover:underline'><Link to={`/services/${serviceId}`}>{serviceName}</Link></h4>
        <p>{description}</p>
      </div>
      <div>
        <button className='bg-indigo-500 hover:bg-indigo-400 py-1 px-3 mx-2 rounded-md'>Update</button>
        <button className='bg-red-500 hover:bg-red-400 py-1 px-3 mx-2 rounded-md'>Delete</button>
      </div>
    </div>
  )
}

export default MyReviews;