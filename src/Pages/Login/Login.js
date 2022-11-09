import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hook/useTitle/useTitle';

const Login = () => {
  const {logInUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('Log In')

  const from = location?.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();

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
        setUser({...user, token: data.token})
        // not the best place but for assignment purpose
        localStorage.setItem('travelaro-token', data.token);
      })
      toast.success('Log In Successfull');
      navigate(from, {replace: true});
    })
    .catch(err => toast.error('Error: ' + err.message.slice(9, err.message.length)))
  }



  const handleGoogleSignIn = () =>{
    signInWithGoogle(googleProvider)
    .then(result =>{
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
        setUser({...user, token: data.token})
        // not the best place but for assignment purpose
        localStorage.setItem('travelaro-token', data.token);
      })
      toast.success('Log In Successfull');
      navigate(from, {replace: true});
    })
    .catch(err => toast.error("Error: " + err.message.slice(9, err.message.length)))
  }


  return (
    <div className='w-4/12 mx-auto my-20'>
      <div>
        <button onClick={handleGoogleSignIn} className='text-3xl'><FcGoogle/></button>
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