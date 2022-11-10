import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/useTitle/useTitle';
import Service from './Service/Service';


const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true);
  useTitle('Services')


  useEffect(() => {
    fetch('https://travelaro-server.vercel.app/services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      });
  }, [])




  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-3xl font-bold text-center my-10'>Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-12'>
        {
          loading ? <Loader /> :
            services.map(service => <Service
              key={service._id}
              service={service}
            ></Service>)
        }
      </div>
    </div>
  );
};

const Loader = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 w-full col-span-3 gap-10'>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse space-x-4">
          <div class=" bg-slate-700 h-60 rounded-md mb-5"></div>
          <div class="flex-1 space-y-6 py-1">
            <div className='grid grid-cols-3'>
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div class="space-y-3">
              <div class="">
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
              </div>
              <div className='flex justify-between'>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse space-x-4">
          <div class=" bg-slate-700 h-60 rounded-md mb-5"></div>
          <div class="flex-1 space-y-6 py-1">
            <div className='grid grid-cols-3'>
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div class="space-y-3">
              <div class="">
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
              </div>
              <div className='flex justify-between'>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse space-x-4">
          <div class=" bg-slate-700 h-60 rounded-md mb-5"></div>
          <div class="flex-1 space-y-6 py-1">
            <div className='grid grid-cols-3'>
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div class="space-y-3">
              <div class="">
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
              </div>
              <div className='flex justify-between'>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse space-x-4">
          <div class=" bg-slate-700 h-60 rounded-md mb-5"></div>
          <div class="flex-1 space-y-6 py-1">
            <div className='grid grid-cols-3'>
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div class="space-y-3">
              <div class="">
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
              </div>
              <div className='flex justify-between'>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse space-x-4">
          <div class=" bg-slate-700 h-60 rounded-md mb-5"></div>
          <div class="flex-1 space-y-6 py-1">
            <div className='grid grid-cols-3'>
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div class="space-y-3">
              <div class="">
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
              </div>
              <div className='flex justify-between'>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse space-x-4">
          <div class=" bg-slate-700 h-60 rounded-md mb-5"></div>
          <div class="flex-1 space-y-6 py-1">
            <div className='grid grid-cols-3'>
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div class="space-y-3">
              <div class="">
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
                <div class="h-2 my-2 bg-slate-700 rounded"></div>
              </div>
              <div className='flex justify-between'>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
                <div class="w-4/12 h-10 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;