import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Header = () => {
  const {user} = useContext(AuthContext);
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
                <Link className="justify-between">
                  Services
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
                <ul className="p-2 bg-[#002333]">
                  <li><Link>Submenu 1</Link></li>
                </ul>
              </li>
              <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </div>
          <Link to='/' className="text-xl md:text-2xl font-semibold text-white">Travel<span className='font-bold text-[#2bf29c]'>aro</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Home</Link></li>
            <li tabIndex={0}>
              <Link>
                Services
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </Link>
              <ul className="p-2 bg-[#002333]">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
              </ul>
            </li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/blog'>{user.email}</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/signup' className="text-center bg-[#2bf29c] hover:bg-[#19e98f] py-2 px-3 rounded-md">Get Started<FaLongArrowAltRight className='inline-block ml-2' /> </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;