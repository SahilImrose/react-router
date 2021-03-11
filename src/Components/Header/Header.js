import React from 'react';
import banner from './banner.svg';
import './Header.css';
const Header = () => {

    return (
        <header className="header">
            <img className="image" src={banner} alt=""/>
        </header>
    );
};

export default Header;