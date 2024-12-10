import React from 'react';
import './Header.css';
import NavBar from './NavBar'

import { Outlet } from "react-router-dom";


function Header () {
    return (
        <div>
            <header className="header-container">
                <h1 className="header-logo">BookWish</h1>
                <NavBar />
            </header>
            <Outlet />
        </div>
    );
}

export default Header;