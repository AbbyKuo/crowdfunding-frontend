import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div>
            <div className="header-container">
                <div className="header-logo">
                        <h1>BookWish</h1>
                </div>
                <nav className="navbar-container">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/login">Log In</Link>
                </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default NavBar;