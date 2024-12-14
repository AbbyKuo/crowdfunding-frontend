import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import postSignup from "../api/post-signup.js";
import "./SignupForm.css";

function SignupForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        
        // Validate passwords match
        if (credentials.password !== credentials.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        // Validate password length
        if (credentials.password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }

        // Validate username length
        if (credentials.username.length < 3) {
            setError("Username must be at least 3 characters long");
            return;
        }

        setLoading(true);
        try {
            await postSignup(
                credentials.username,
                credentials.email,
                credentials.password
            );
            
            // Show success message
            alert("Registration successful! Please log in.");
            navigate("/login");
        } catch (err) {
            console.error(err);
            setError(err.message || "Sign up failed! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <p className="signup-subtitle">Join our community and start making an impact!</p>
            
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
                        minLength={3}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder="Enter email"
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
                        placeholder="Enter password (min. 8 characters)"
                        required
                        minLength={8}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={credentials.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        required
                    />
                </div>

                <button type="submit" className="signup-button" disabled={loading}>
                    {loading ? "Signing up..." : "Sign Up"}
                </button>

                <div className="login-link">
                    Already have an account? <Link to="/login">Log in</Link>
                </div>
            </form>
        </div>
    );
}

export default SignupForm; 