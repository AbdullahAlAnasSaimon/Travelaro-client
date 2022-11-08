import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
  const {createUser, setUser, logOut} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    // console.log(name, email, password, confirmPassword);

      createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Sign Up Successfull');
        logOut();
        navigate('/login');
      })
      .catch(err => toast.error('Error: ' + err.message.slice(9, err.message.length - 1)))

  }

  return (
    <div>
      <div>
        <button className='text-3xl'><FcGoogle/></button>
        <button className='text-3xl'><FaFacebook/></button>
      </div>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="name">Full Name</label>
          <br />
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="text" name='name' placeholder='Full Name'/>
        </div>
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
        <div>
          <label htmlFor="confirm">Confirm Password</label>
          <br />
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="password" name='confirm' placeholder='Confirm Password'/>
        </div>
        <button type='submit' className='btn'>Sign Up</button>
      </form>
      <div>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;