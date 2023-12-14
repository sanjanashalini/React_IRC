
import React from 'react';
import { Link } from 'react-router-dom';

const Header1 = () => {
  return (
    <div>
      <div className='nva'><h1>Home Decor</h1></div>
      <nav>
        <Link to="">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header1;
