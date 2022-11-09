import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hook/useTitle/useTitle';

const Login = () => {
  const {logInUser, setUser, signInWithGoogle, signInWithfacebook } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('Log In')

  const from = location?.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
    .then(result =>{
      const user = result.user;
      const currentUser = {
        email: user?.email
      }
      console.log(currentUser);
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
        console.log(data);
        // not the best place but for assignment purpose
        localStorage.setItem('travelaro-token', data.token);
      })

      toast.success('Log In Successfull');
      setUser(user)
      navigate(from, {replace: true});
    })
    .catch(err => toast.error('Error: ' + err.message.slice(9, err.message.length)))
  }

  const handleGoogleSignIn = () =>{
    signInWithGoogle(googleProvider)
    .then(result =>{
      const user = result.user;
      const currentUser = {
        email: user?.email
      }
      console.log(currentUser);
      
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
        console.log(data);
        // not the best place but for assignment purpose
        localStorage.setItem('travelaro-token', data.token);
      })
      setUser(user);
      toast.success('Log In Successfull');
      navigate(from, {replace: true});
    })
    .catch(err => toast.error("Error: " + err.message.slice(9, err.message.length)))
  }

  const handleFacebookSignIn = () =>{
    signInWithfacebook(facebookProvider)
    .then(result =>{
      const user = result.user;
      const currentUser = {
        email: user?.email
      }
      console.log(currentUser);

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
        console.log(data);
        // not the best place but for assignment purpose
        localStorage.setItem('travelaro-token', data.token);
      })

      setUser(user);
      toast.success('Log In Successfull');
      navigate(from, {replace: true});
    })
    .catch(err => toast.error("Error: " + err.message.slice(9, err.message.length)))
  }

  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className='text-3xl'><FcGoogle/></button>
        <button onClick={handleFacebookSignIn} className='text-3xl'><FaFacebook/></button>
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