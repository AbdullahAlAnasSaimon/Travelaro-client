import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle/useTitle';
import Hero from '../Hero/Hero';
import Service from '../Services/Service/Service';

const Home = () => {
  const services = useLoaderData();
  useTitle('Home');
  return (
    <div>
      <Hero></Hero>
      <h2 className='text-3xl font-bold text-center my-10'>My Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-11/12 mx-auto mt-20 mb-20'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
      <div className='my-10'>
        <Link to='/services'><button className='btn w-[92px] mx-auto block'>See All</button></Link>
      </div>
    </div>
  );
};

export default Home;