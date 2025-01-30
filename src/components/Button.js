import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, to, onClick }) => {
    return (
        <Link to={to} className='arrow-button' onClick={onClick}>
            {text}<span className='button-arrow'> &gt;&gt; </span>
        </Link>
    );
};

export default Button;