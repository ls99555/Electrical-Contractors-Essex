import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
         <ul className='navbar'>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/team'>Meet The Team</Link></li>
            <li> <Link to='/services'>Services</Link></li>
            <li> <Link to='/estimates'>Estimates</Link></li>
            <li> <Link to='/contact'>Contact</Link></li>
         </ul>
        </nav>
    );
};

export default Navbar;