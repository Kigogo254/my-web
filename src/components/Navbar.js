import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-item a'> 
        <Link className='navlink' to='/'><FaHome size={32}/>Kigogo</Link>
      </div>
      <div  className='nav-item a'>
        <Link to='/bio' className='navlink'><FaUser size={24}/>Biography</Link>
      </div>
      <div  className='nav-item'>
        <Link to='/contact' className='navlink'><FaPhone size={24}/>Contacts_</Link>
      </div>
    </div>
  );
};

export default Navbar;
