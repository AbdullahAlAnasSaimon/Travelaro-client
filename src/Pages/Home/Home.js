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
      <div className='my-10  w-[92px] mx-auto'>
        <Link to='/services'><button className='btn w-[92px]'>See All</button></Link>
      </div>
      <div className='w-11/12 mx-auto my-20 bg-[#002333] text-white rounded-md'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-5 p-10'>
          <div className='flex justify-center items-center border-none md:border-r-2 border-gray-200/30 my-5 md:my-0'>
            <div className='text-5xl mr-2 text-[#2bf29c]'>10</div>
            <div className='text-sm'>Years Of <br /> Experience</div>
          </div>
          <div className='flex justify-center items-center border-none md:border-r-2 border-gray-200/30 my-5 md:my-0'>
            <div className='text-5xl mr-2 text-[#2bf29c]'>1k+</div>
            <div className='text-sm'>Camping &<br /> Tour Operation</div>
          </div>
          <div className='flex justify-center items-center border-none md:border-r-2 border-gray-200/30 my-5 md:my-0'>
            <div className='text-5xl mr-2 text-[#2bf29c]'>10k+</div>
            <div className='text-sm'>Happy <br /> Customer</div>
          </div>
          <div className='flex justify-center items-center my-5 md:my-0'>
            <div className='text-5xl mr-2 text-[#2bf29c]'>4.8</div>
            <div className='text-sm'>Average <br /> Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;