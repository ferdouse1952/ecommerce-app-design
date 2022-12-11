import React from 'react';
import './Header.css';
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';

const Header = ({cartItem}) => {
    return (
        <>
            <Head cartItem={cartItem}/>
            <Search cartItem={cartItem}/>
            <Navbar/>
           
        </>
    );
};

export default Header;