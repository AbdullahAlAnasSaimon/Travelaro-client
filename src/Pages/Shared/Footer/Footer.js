import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#002333]'>
      <footer className="footer p-10 text-white">
        <div>
        <Link to='/' className="text-xl md:text-2xl font-semibold text-white">Travel<span className='font-bold text-[#2bf29c]'>aro</span><FaPaperPlane className='inline-block text-sm -mt-5' /></Link>
          <p>WellCome To My Travel Service</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
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