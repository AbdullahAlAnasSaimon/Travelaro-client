import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hook/useTitle/useTitle';

const SignUp = () => {
  const {createUser, logOut, signInWithGoogle, signInWithfacebook, setUser, updateUserProfile} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const navigate = useNavigate();
  useTitle('Sign Up');

  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    
    if(password !== confirmPassword){
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
    .then(() => {})
    .catch(err => toast.error(err.message))
  }

  const handleGoogleSignIn = () =>{
    signInWithGoogle(googleProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      toast.success('Sign Up Successfull');
      navigate('/');
    })
    .catch(err => toast.error("Error: " + err.message.slice(9, err.message.length)))
  }

  const handleFacebookSignIn = () =>{
    signInWithfacebook(facebookProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      toast.success('Sign Up Successfull');
      navigate('/');
    })
    .catch(err => toast.error("Error: " + err.message.slice(9, err.message.length)))
  }

  return (
    <div className='w-4/12 mx-auto my-20'>
      <div>
        <button onClick={handleGoogleSignIn} className='text-3xl'><FcGoogle/></button>
        <button onClick={handleFacebookSignIn} className='text-3xl'><FaFacebook/></button>
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
          <label htmlFor="email">Photo Url</label>
          <br />
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="text" name='photo' placeholder='Photo Url' required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="password" name='password' placeholder='Password' required/>
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password</label>
          <br />
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="password" name='confirm' placeholder='Confirm Password' required/>
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