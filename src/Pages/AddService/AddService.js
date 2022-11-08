import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle/useTitle';

const AddService = () => {
  const {user} = useContext(AuthContext);
  useTitle('Add Service')

  const handleAddService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.title.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const details = form.details.value;
    console.log(name, price, photo, details);

    const serviceInfo = {
      email: user?.email,
      name,
      price,
      photo,
      details
    }

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceInfo)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => toast.error(err))
  }
  return (
    <div>
      <div className='w-10/12 mx-auto'>
        <form onSubmit={handleAddService}>
          <div className='grid grid-cols-3 gap-x-8 m-7'>
            <div className='col-span-2'>
              <label htmlFor="title" className='block'>Service Name <small>(Max character 28)</small></label>
              <input className='w-full p-2 my-2 outline-0 border-2 border-gray-400 rounded-md focus:border-emerald-400' type="text" name='title' placeholder='Service Name' />
            </div>
            <div>
              <label htmlFor="price" className='block'>Price</label>
              <input className='w-full p-2 my-2 outline-0 border-2 border-gray-400 rounded-md focus:border-emerald-400' type="text" name='price' placeholder='Price' />
            </div>
          </div>
            <div className='w-auto m-7'>
              <label htmlFor="photo" className='block'>Photo Url</label>
              <input className='w-full p-2 my-2 outline-0 border-2 border-gray-400 rounded-md focus:border-emerald-400' type="text" name='photo' placeholder='Photo Url' />
            </div>
          <div className='flex justify-between m-7'>
            <div className='w-full'>
              <label htmlFor="title" className='block'>Description</label>
              <textarea className='w-full h-28 block p-2 my-2 outline-0  border-2 border-gray-400 rounded-md focus:border-emerald-400' name="details" id="" placeholder='Enter Description'></textarea>
            </div>
          </div>
          <button className='ml-5 btn bg-emerald-500 hover:bg-emerald-400 border-0' type='submit'>Add New Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddService;