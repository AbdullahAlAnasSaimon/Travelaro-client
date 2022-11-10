import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hook/useTitle/useTitle';
import signupImg from '../../images/essential/signup.png';

const SignUp = () => {
  const { createUser, logOut, signInWithGoogle, setUser, updateUserProfile } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  useTitle('Sign Up');

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    if (password !== confirmPassword) {
      toast.error('Password Did not Matched');
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Sign Up Successfull');
        handleupdateUserProfile(name, photoURL);
        logOut();
        navigate('/login');
      })
      .catch(err => toast.error('Error: ' + err.message.slice(9, err.message.length)))
  }

  const handleupdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL
    }
    updateUserProfile(profile)
      .then(() => { })
      .catch(err => toast.error(err.message))
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then(result => {
        const user = result.user;

        const currentUser = {
          email: user.email
        }

        // get jwt token
        fetch(`http://localhost:5000/jwt`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            setUser({ ...user, token: data.token })
            // not the best place but for assignment purpose
            localStorage.setItem('travelaro-token', data.token);
          })
        toast.success('Log In Successfull');
        navigate('/');
      })
      .catch(err => toast.error("Error: " + err.message.slice(9, err.message.length)))
  }


  return (
    <div className='flex'>
      <div className='w-6/12 hidden md:block'>
        <img className='w-10/12' src={signupImg} alt="" />
      </div>
      <div className='w-11/12 md:w-6/12 mx-auto md:mx-0 px-20'>
        <div>
          <button onClick={handleGoogleSignIn} className='rounded-md border-2 border-green-500 hover:bg-gray-100 p-1 my-3 w-full'><FcGoogle className='text-2xl inline-block' /> Sign Up With Google</button>
        </div>
        <div className='my-3 w-11/12 md:w-6/12 mx-auto'>
          <hr />
          <p className='text-center bg-white w-3/12 mx-auto -mt-3'>OR</p>
        </div>
        <form onSubmit={handleSignUp}>
          <div className='my-3'>
            <label htmlFor="name">Full Name</label>
            <br />
            <input className='rounded-md w-full border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="text" name='name' placeholder='Full Name' />
          </div>
          <div className='my-3'>
            <label htmlFor="email">E-mail</label>
            <br />
            <input className='rounded-md w-full border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="email" name='email' placeholder='Email' required />
          </div>
          <div className='my-3'>
            <label htmlFor="email">Photo Url</label>
            <br />
            <input className='rounded-md w-full border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="text" name='photo' placeholder='Photo Url' required />
          </div>
          <div className='my-3'>
            <label htmlFor="password">Password</label>
            <br />
            <input className='rounded-md w-full border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="password" name='password' placeholder='Password' required />
          </div>
          <div className='my-3'>
            <label htmlFor="confirm">Confirm Password</label>
            <br />
            <input className='rounded-md w-full border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="password" name='confirm' placeholder='Confirm Password' required />
          </div>
          <button type='submit' className='btn'>Sign Up</button>
        </form>
        <div>
          <p>Already have an account? <Link to='/login'>Log In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;