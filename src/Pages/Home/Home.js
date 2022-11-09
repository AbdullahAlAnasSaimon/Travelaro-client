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
      <div className='grid grid-cols-3 gap-5'>
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