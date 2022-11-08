import React from 'react';
import heroImg from '../../images/hero/Hotel-Booking-cuate.png';

const Hero = () => {
  return (
    <div className='w-full md:w-11/12 mx-auto'>
      <div className="hero">
        <div className="hero-content justify-between flex-col lg:flex-row-reverse">
          <div className='w-5/12'>
            <img className='w-10/12' src={heroImg} alt="" />
          </div>
          <div className='w-7/12'>
            <h1 className="text-5xl font-bold text-[#002333]">Explore The World!</h1>
            <p className="py-6 text-gray-600 w-10/12">Travel is the movement of people between distant geographical locations. Travel can be done by foot, train, boat, bus, airplane and can be one way or round trip.</p>
            <button className="">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;