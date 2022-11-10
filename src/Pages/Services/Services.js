import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle/useTitle';
import Service from './Service/Service';

const Services = () => {
  const services = useLoaderData();
  useTitle('Services')
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-3xl font-bold text-center my-10'>Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;