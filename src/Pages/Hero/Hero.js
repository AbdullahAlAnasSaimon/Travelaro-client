import React from 'react';
import heroImg from '../../images/hero/Hotel-Booking-cuate.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='w-full md:w-11/12 mx-auto'>
      <div className="hero">
        <div className="hero-content justify-between flex-col-reverse lg:flex-row-reverse">
          <div className='w-full md:w-5/12'>
            <img className='w-10/12' src={heroImg} alt="" />
          </div>
          <div className='w-full md:w-7/12 my-10 md:my-0'>
            <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold text-[#002333]">Explore The World!</h1>
            <p className="text-center md:text-left py-6 text-gray-600 w-full md:w-10/12">Travel is the movement of people between distant geographical locations. Travel can be done by foot, train, boat, bus, airplane and can be one way or round trip.</p>
            <div className='w-[176px] mx-auto md:mx-0'>
              <button className="w-[176px] text-center border-2 border-emerald-400 bg-[#2bf29c] hover:bg-[#19e98f] py-2 px-3 rounded-md">Browse Services <FaLongArrowAltRight className='inline-block' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;