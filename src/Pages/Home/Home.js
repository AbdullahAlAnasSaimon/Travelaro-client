import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle/useTitle';
import Hero from './Hero/Hero';
import Service from '../Services/Service/Service';
import WhyChoose from './WhyChoose/WhyChoose';

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle('Home');

  useEffect(() => {
    fetch('https://travelaro-server.vercel.app/limited-services')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <div>
      <Hero></Hero>
      <h2 className='text-3xl font-bold text-center my-10'>My Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-11/12 mx-auto mt-20 mb-20'>
        {
          (services.length === 0) ?
            <div className='w-8 mx-auto my-36 col-span-3'><svg class="text-center animate-spin -ml-1 mr-3 h-7 w-7 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg></div> :
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
            <div className='font-semibold text-5xl mr-2 text-[#2bf29c]'>10</div>
            <div className='text-sm'>Years Of <br /> Experience</div>
          </div>
          <div className='flex justify-center items-center border-none md:border-r-2 border-gray-200/30 my-5 md:my-0'>
            <div className='font-semibold text-5xl mr-2 text-[#2bf29c]'>1k+</div>
            <div className='text-sm'>Camping &<br /> Tour Operation</div>
          </div>
          <div className='flex justify-center items-center border-none md:border-r-2 border-gray-200/30 my-5 md:my-0'>
            <div className='font-semibold text-5xl mr-2 text-[#2bf29c]'>10k+</div>
            <div className='text-sm'>Happy <br /> Customer</div>
          </div>
          <div className='flex justify-center items-center my-5 md:my-0'>
            <div className='font-semibold text-5xl mr-2 text-[#2bf29c]'>4.8</div>
            <div className='text-sm'>Average <br /> Rating</div>
          </div>
        </div>
      </div>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;