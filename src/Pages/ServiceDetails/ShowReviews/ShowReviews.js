import React from 'react';

const ShowReviews = ({review}) => {
  const {photo, description, insertTime, userName} = review;
  // console.log(insertTime.split(''))
  return (
    <div className='border-2 p-3 my-4'>
      <img className='w-10 rounded-full' src={photo} alt="" />
      <h4>{userName}</h4>
      <p>{description}</p>
      <p>{insertTime}</p>
    </div>
  );
};

export default ShowReviews;