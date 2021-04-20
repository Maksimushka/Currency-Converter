import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='headerBlock'>
            <div>
                <NavLink to={'/list'}>LIST</NavLink>
                <NavLink to={'/'}>CONVERTER</NavLink>
            </div>
        </div>
    );
};

export default Header;