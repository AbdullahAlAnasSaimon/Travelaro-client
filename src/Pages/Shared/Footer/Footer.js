import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#002333]'>
      <footer className="footer p-10 text-white">
        <div>
        <Link to='/' className="text-xl md:text-2xl font-semibold text-white">Travel<span className='font-bold text-[#2bf29c]'>aro</span><FaPaperPlane className='inline-block text-sm -mt-5' /></Link>
          <p>Copyright &copy; 2022 <br /> Travelaro Reserved All Rights</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to='/services/636a94b44e852b7626c91468' className="link link-hover">Tour Operator</Link>
          <Link to='/services/636b36e08240891c037f5c4f' className="link link-hover">Safari & Camping</Link>
          <Link to='/services/636b377c8240891c037f5c50' className="link link-hover">Paragliding</Link>
          <Link to='/services/636c93bc9f5f849378798f26' className="link link-hover">River Rafting</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to='/services' className="link link-hover">Services</Link>
          <Link to='/blog' className="link link-hover">Blog</Link>
          <Link to='/login' className="link link-hover">Log In</Link>
          <Link to='/signup' className="link link-hover">Sign Up</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;