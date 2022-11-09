import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
  const { _id, name, price, rating, photo, details } = service;
  return (
    <div className="card card-compact w-auto bg-base-100 shadow-lg z-0">
      <PhotoProvider>
        <PhotoView src={photo}>
          <figure><img className='h-[300px]' src={photo} alt="Shoes" /></figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <p>{rating}</p>
        <h2 className="card-title">{name}</h2>
        <p>{details.slice(0, 80) + '...'}</p>
        <div className="card-actions justify-between mt-5">
          <h2 className='text-4xl font-bold'>${price}</h2>
          <Link to={`/services/${_id}`}><button className="bg-emerald-300 hover:bg-emerald-400 py-2 px-4 text-lg rounded-md">See Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;