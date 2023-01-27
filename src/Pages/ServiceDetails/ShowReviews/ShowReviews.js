import React from 'react';
import { FaStar } from 'react-icons/fa';

const ShowReviews = ({ review }) => {
  const { photo, description, insertTime, userName } = review;
  const newTime = Date(insertTime);
  // console.log(insertTime.split(''))
  return (
    <div className='border-2 p-3 my-4 w-10/12 mx-auto rounded-md'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <div>
            <label tabIndex={0} className="btn-sm btn-ghost btn-circle avatar">
              <img className='w-10 rounded-full' src={photo} alt="" />
            </label>
          </div>
          <div className='ml-2'>
            <h4 className='text-sm font-semibold'>{userName}</h4>
            <p className='text-[11px]'>{newTime.slice(0, 24)}</p>
          </div>
        </div>
        <div>
          <FaStar className='inline-block text-[#3ccf8f]' />
          <FaStar className='inline-block text-[#3ccf8f]' />
          <FaStar className='inline-block text-[#3ccf8f]' />
          <FaStar className='inline-block text-[#3ccf8f]' />
          <FaStar className='inline-block text-[#3ccf8f]' />
        </div>
      </div>
      <p className='mt-2'>{description}</p>
    </div>
  );
};

export default ShowReviews;