import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
  const { _id, name, price, rating, photo, details } = service;
  return (
    <div className="w-auto border-2 rounded-md">
      <div className='h-[305px] p-3'>
        <PhotoProvider>
          <PhotoView src={photo}>
            <figure className='rounded-md h-[280px] cursor-pointer'><img className='h-[280px] w-full rounded-md' src={photo} alt="Shoes" /></figure>
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="card-body">
        <p>{rating}</p>
        <h2 className="card-title">{name}</h2>
        <p className='text-[15px]'>{details.slice(0, 100) + '...'}</p>
        <div className="card-actions justify-between mt-5">
          <h2 className='text-4xl font-bold'>${price}</h2>
          <Link to={`/services/${_id}`}><button className="bg-emerald-300 hover:bg-emerald-400 py-2 px-4 text-lg rounded-md">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;