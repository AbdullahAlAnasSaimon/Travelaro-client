import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
  const {logInUser, setUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
    .then(result =>{
      const user = result.user;
      toast.success('Log In Successfull');
      setUser(user)
      navigate('/');
    })

  }

  return (
    <div>
      <div>
        <button className='text-3xl'><FcGoogle/></button>
        <button className='text-3xl'><FaFacebook/></button>
      </div>
      <form onSubmit={handleLogIn}>
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