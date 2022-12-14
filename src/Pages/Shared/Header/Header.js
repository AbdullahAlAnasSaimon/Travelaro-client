import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaPaperPlane, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
      })
      .catch(err => toast.error('Error: ' + err.message.slice(9, err.message.length - 1)))
      localStorage.removeItem('travelaro-token');
  }

  return (
    <div className='bg-[#002333]'>
      <div className="navbar w-full md:w-11/12 mx-auto">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-gray-100/10 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#002333]">
              <li><Link to='/'>Home</Link></li>
              <li tabIndex={0}>
                <Link to='/services' className="justify-between">
                  Services
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
              </li>
              <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </div>
          <Link to='/' className="text-xl md:text-2xl font-semibold text-white">Travel<span className='font-bold text-[#2bf29c]'>aro</span><FaPaperPlane className='inline-block text-sm -mt-5' /></Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Home</Link></li>
            <li tabIndex={0}>
              <Link to='/services'>
                Services
              </Link>
            </li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      {
                        user?.photoURL ? 
                        <img src={user?.photoURL} alt="" /> : 
                        <FaUserCircle className='text-white text-[40px]'/>
                      }
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#002333] text-white rounded-box w-52">
                    <li>
                      <Link to='/my-reviews' className="justify-between">
                        My Reviews
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li><Link to='/add-service'>Add Service</Link></li>
                    <li><button onClick={handleLogOut}>Log Out</button></li>
                  </ul>
                </div>
              </>
              :
              <Link to='/login' className="text-center bg-[#2bf29c] hover:bg-[#19e98f] py-2 px-3 rounded-md duration-300">Log In<FaLongArrowAltRight className='inline-block ml-2' /> </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;