import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../hooks/use-auth.js";

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    console.log(auth)

    return (
        <div>
            <nav className="navbar-container">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="create-project">Create Project</Link>
                {/* <Link to="/login">Log In</Link> */}
                {auth.token ? (
                    <Link to="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                    ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </div>
    );
}

export default NavBar;