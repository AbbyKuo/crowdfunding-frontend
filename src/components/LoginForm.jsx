import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import postLogin from "../api/post-login.js";
import useAuth from "../hooks/use-auth.js";
import "./LoginForm.css";

function LoginForm() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(""); // Clear previous errors
        if (!credentials.username || !credentials.password) {
            setError("Please fill in all fields.");
            return;
        }

        setLoading(true);
        postLogin(credentials.username, credentials.password)
            .then((response) => {
                window.localStorage.setItem("token", response.token);
                setAuth({
                    token: response.token,
                });
                navigate(location.state?.from || "/");
            })
            .catch(() => {
                setError("Invalid username or password.");
                setLoading(false);
            });
    };

    return (
        <div className="login-container">
            <h1>Log in</h1>
            <p className="login-subtitle">See your lifetime impact and manage your account settings.</p>
            
            <form onSubmit={handleSubmit}>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        required
                    />
                </div>

                <button type="submit" className="login-button" disabled={loading}>
                    {loading ? "Logging in..." : "Log in"}
                </button>
                
                <div className="signup-link">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;