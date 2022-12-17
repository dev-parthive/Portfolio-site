import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const menuList = <>
    <li><a href='/'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#project'>Projects</a></li>
    <li><a href='#contact'>Contact</a></li>
    <li><Link to="/blog">Blog</Link></li>

    </>
    return (
        <div className="navbar bg-accent text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuList}
      </ul>
    </div>
    <a href='/' className="normal-case text-xl btn  btn-primary ml-5">Parthve</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuList}
    </ul>
  </div>
  <div className="navbar-end">
    <a target="_parthive" href='https://drive.google.com/file/d/1iPWY2_L19fh7f_cZrjOOmdnx5wDlXhDC/view?usp=sharing' className="btn btn-secondary">  Resume</a>
  </div>
</div>
    );
};

export default Navbar;