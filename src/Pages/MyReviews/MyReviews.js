import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle/useTitle';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useTitle('My Review')

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        // authorization: `Bearer ${localStorage.getItem('travelaro-token')}`
        authorization: `Bearer ${user.token || localStorage.getItem('travelaro-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data.status);
        if(data.status >= 400){
          return;
        }
        setMyReviews(data);
      })
  }, [user?.token, user?.email])


  const handleDelete = id => {
    const proceed = window.confirm("Are you sure, you want to preceed this action?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            toast.success('Review Deleted Successfully');
            const remainig = myReviews.filter(review => review._id !== id)
            setMyReviews(remainig);
          }
        })
    }
  }

  return (
    <div>
      <h2 className='text-3xl font-bold text-center my-10'>My Reviews</h2>
      <div className='mb-20 mt-5'>
        {myReviews.length === 0 ? <p className='text-4xl font-semibold text-gray-300 text-center my-20'>No reviews were added</p> :
          myReviews.map(review => <SingleReview
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></SingleReview>)
        }
      </div>
    </div>
  );
};

const SingleReview = ({ review, handleDelete }) => {
  const { _id, description, serviceName, serviceId } = review;

  return (
    <div className='border-2 p-2 my-3 flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-10/12 mx-auto rounded-md'>
      <div>
        <h4 className='text-xl font-semibold hover:underline'><Link to={`/services/${serviceId}`}>{serviceName}</Link></h4>
        <p>{description}</p>
      </div>
      <div className='my-3 md:my-0'>
        <Link to={`/edit-review/${_id}`}><button className='bg-indigo-500 hover:bg-indigo-400 py-1 px-3 mx-2 rounded-md'>Edit Review</button></Link>
        <button onClick={() => handleDelete(_id)} className='bg-red-500 hover:bg-red-400 py-1 px-3 mx-2 rounded-md'>Delete Review</button>
      </div>
    </div>
  )
}

export default MyReviews;