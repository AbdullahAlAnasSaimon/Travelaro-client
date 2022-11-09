import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('travelaro-token')}`
      }
    })
      .then(res => {
        if(res.status === 401 || res.status === 403){
          logOut();
        }
        return res.json();
      })
      .then(data => {
        setMyReviews(data);
      })
  }, [user?.email])

  const handleDelete = id =>{
    // console.log(id);
    const proceed = window.confirm("Are you sure, you want to preceed this action?");
    if(proceed){
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          toast.success('Review Deleted Successfully');
          const remainig = myReviews.filter(review => review._id !== id)
          setMyReviews(remainig);
        }
      })
    }
  }

  return (
    <div>
      <h2>My Reviews page</h2>
      <div className='mb-20 mt-5'>
        { myReviews.length === 0 ? <p className='text-4xl font-semibold text-gray-300 text-center my-20'>No reviews were added</p> :
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
    <div className='border-2 p-2 my-3 flex justify-between items-center w-10/12 mx-auto rounded-md'>
      <div>
        <h4 className='text-xl font-semibold hover:underline'><Link to={`/services/${serviceId}`}>{serviceName}</Link></h4>
        <p>{description}</p>
      </div>
      <div>
        <Link to={`/edit-review/${_id}`}><button className='bg-indigo-500 hover:bg-indigo-400 py-1 px-3 mx-2 rounded-md'>Edit</button></Link>
        <button onClick={() => handleDelete(_id)} className='bg-red-500 hover:bg-red-400 py-1 px-3 mx-2 rounded-md'>Delete</button>
      </div>
    </div>
  )
}

export default MyReviews;