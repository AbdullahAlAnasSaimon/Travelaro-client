import React from 'react';

const SignUp = () => {
  return (
    <div>
      <form>
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
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="password" name='password' placeholder='Password'/>
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password</label>
          <br />
          <input className='border-2 border-green-200 p-2 outline-0 focus:border-[#2bf29c]' type="password" name='confirm' placeholder='Confirm Password'/>
        </div>
        <button type='submit' className='btn'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;