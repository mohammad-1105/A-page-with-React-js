import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';




const Navbar = () => {

  const toggleNavbar = () => {
    document.getElementById('navbar').classList.toggle('change');
  }

  const removeStyle = () => {
    document.getElementById('navbar').classList.remove('change')
  }
  return (

    <nav>
      <h1>TECHNO.LOGY</h1>
      <main id='navbar'>
        <HashLink onClick={removeStyle} to="/#home">Home</HashLink>
        <HashLink onClick={removeStyle} to="/#about">About</HashLink>
        <Link onClick={removeStyle} to="/services">Services</Link>
        <Link onClick={removeStyle} to="/contact">Contact</Link>
        <HashLink onClick={removeStyle} to="/#brands">Brands</HashLink>
      </main>
      <div id='hamburger' onClick={toggleNavbar}>
      <i className="fa-solid fa-bars" ></i>
      </div>
    </nav>
    
  )
  
}

export default Navbar