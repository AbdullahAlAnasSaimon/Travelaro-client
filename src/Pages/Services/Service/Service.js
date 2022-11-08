import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  const {id, title, price, rating, thumb, details} = service;
  return (
      <div className="card card-compact w-96 bg-base-100 shadow-lg z-0">
        <figure><img className='h-[300px]' src={thumb} alt="Shoes" /></figure>
        <div className="card-body">
          <p>{rating}</p>
          <h2 className="card-title">{title}</h2>
          <p>{details.slice(0, 80) + '...'}</p>
          <div className="card-actions justify-between mt-5">
            <h2 className='text-4xl font-bold'>${price}</h2>
            <Link to={`/services/${id}`}><button className="btn btn-primary">See Details</button></Link>
          </div>
        </div>
      </div>
  );
};

export default Service;