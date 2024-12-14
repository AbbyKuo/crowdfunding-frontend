import React from 'react';
import './Header.css';
import NavBar from './NavBar'
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <div>
            <header className="header-container">
                <div className="header-content">
                    <Link to="/" className="header-logo">
                        <h1>BookWish</h1>
                    </Link>
                    <NavBar />
                </div>
            </header>
            <Outlet />
        </div>
    );
}

export default Header;