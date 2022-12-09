import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hook/useTitle/useTitle';
import loginImg from '../../images/essential/login.png';

const Login = () => {
  const { logInUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('Log In')

  const from = location?.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;



    logInUser(email, password)
      .then(result => {
        const user = result.user;
        const currentUser = {
          email: user?.email
        }
        // get jwt token
        fetch(`https://travelaro-server.vercel.app/jwt`, {
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
        navigate(from, { replace: true });
      })
      .catch(err => toast.error('Error: ' + err.message.slice(9, err.message.length)))
  }



  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then(result => {
        const user = result.user;

        const currentUser = {
          email: user.email
        }

        // get jwt token
        fetch(`https://travelaro-server.vercel.app/jwt`, {
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
        navigate(from, { replace: true });
      })
      .catch(err => toast.error("Error: " + err.message.slice(9, err.message.length)))
  }


  return (
    <div className='flex my-10 items-center'>
      <div className='w-6/12 hidden md:block'>
        <img className='w-10/12' src={loginImg} alt="" />
      </div>
      <div className='w-11/12 md:w-6/12 mx-auto md:mx-0 px-10 md:px-20'>
        <div>
          <button onClick={handleGoogleSignIn} className='rounded-md bg-green-50 hover:bg-green-100 duration-300 py-3 my-3 w-full'><FcGoogle className='text-2xl inline-block' /> Log In With Google</button>
        </div>
        <form onSubmit={handleLogIn}>
          <div className='my-5'>
            <label htmlFor="email">E-mail</label>
            <br />
            <input className='rounded-md w-full border-2 border-green-200 p-3 outline-0 focus:border-[#2bf29c] duration-300' type="email" name='email' placeholder='Email' required />
          </div>
          <div className='my-5'>
            <label htmlFor="password">Password</label>
            <br />
            <input className='rounded-md w-full border-2 border-green-200 p-3 outline-0 focus:border-[#2bf29c] duration-300' type="password" name='password' placeholder='Password' required />
          </div>
          <button type='submit' className='my-3 border-2 border-emerald-400 bg-[#2bf29c] hover:bg-[#19e98f] duration-300 py-3 px-3 rounded-md w-full font-bold'>Log In</button>
        </form>
        <p className='text-center'>Don't have an account? <Link to='/signup' className='text-[#3dc487] underline'>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;