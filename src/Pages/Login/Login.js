import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div>
        <button className='text-3xl'><FcGoogle/></button>
        <button className='text-3xl'><FaFacebook/></button>
      </div>
      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <br />
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="email" name='email' placeholder='Email' required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="password" name='password' placeholder='Password' required/>
        </div>
        <button type='submit' className='btn'>Log In</button>
      </form>
      <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
    </div>
  );
};

export default Login;