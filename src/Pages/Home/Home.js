import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <div className='grid grid-cols-3 gap-5'>
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Home;