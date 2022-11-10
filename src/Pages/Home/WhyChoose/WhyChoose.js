import React from 'react';
import {BsFillPeopleFill} from 'react-icons/bs';
import {MdOutlineMoneyOffCsred} from 'react-icons/md';
import {TbFriends} from 'react-icons/tb';
import {BiSupport} from 'react-icons/bi';
import {GiIceSpear} from 'react-icons/gi';
import {MdOutlineShutterSpeed} from 'react-icons/md';

const WhyChoose = () => {
  return (
    <div className='w-11/12 mx-auto my-20'>
      <h2 className='text-3xl font-bold text-center my-10'>Why Choose Me</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='p-3'>
          <BsFillPeopleFill className='m-4 text-5xl p-2 bg-[#2bf29c]/30 rounded-md text-gray-700'/>
          <h4 className='text-2xl font-semibold mb-2'>Best Guider</h4>
          <p>I will be best tour guide for best about traveling to guide you alltime</p>
        </div>
        <div className='p-3'>
          <MdOutlineShutterSpeed className='m-4 text-5xl p-2 bg-[#2bf29c]/30 rounded-md text-gray-700'/>
          <h4 className='text-2xl font-semibold mb-2'>Instant Availavility</h4>
          <p>I will be best tour guide for best about traveling to guide you alltime</p>
        </div>
        <div className='p-3'>
          <GiIceSpear className='m-4 text-5xl p-2 bg-[#2bf29c]/30 rounded-md text-gray-700'/>
          <h4 className='text-2xl font-semibold mb-2'>Special Bonus</h4>
          <p>I will be best tour guide for best about traveling to guide you alltime</p>
        </div>
        <div className='p-3'>
          <BiSupport className='m-4 text-5xl p-2 bg-[#2bf29c]/30 rounded-md text-gray-700'/>
          <h4 className='text-2xl font-semibold mb-2'>Crazy Support</h4>
          <p>I will be best tour guide for best about traveling to guide you alltime</p>
        </div>
        <div className='p-3'>
          <TbFriends className='m-4 text-5xl p-2 bg-[#2bf29c]/30 rounded-md text-gray-700'/>
          <h4 className='text-2xl font-semibold mb-2'>Friendly Behaviour</h4>
          <p>I will be best tour guide for best about traveling to guide you alltime</p>
        </div>
        <div className='p-3'>
          <MdOutlineMoneyOffCsred className='m-4 text-5xl p-2 bg-[#2bf29c]/30 rounded-md text-gray-700'/>
          <h4 className='text-2xl font-semibold mb-2'>No Extra Cost</h4>
          <p>I will be best tour guide for best about traveling to guide you alltime</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;