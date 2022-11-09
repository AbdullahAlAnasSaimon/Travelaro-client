import React from 'react';

const ShowReviews = ({review}) => {
  const {photo, description, insertTime, userName} = review;
  // console.log(insertTime.split(''))
  return (
    <div className='border-2 p-3 my-4 w-10/12 mx-auto rounded-md'>
      <img className='w-10 rounded-full' src={photo} alt="" />
      <p className='text-[12px]'>{insertTime}</p>
      <h4>{userName}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ShowReviews;