import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import "./LoginForm.css";

function LoginForm() {
    const navigate = useNavigate(); 
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
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

        setLoading(true)
        postLogin(credentials.username, credentials.password)
            .then((response) => {
                window.localStorage.setItem("token", response.token);
                navigate(location.state?.from || "/"); // Redirect to previous page or home
            })
            .catch(()=> {
                setError("Invalid username or password.");
                setLoading(false);
            });
    };

    // catch() js promise.then

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        style={{ marginTop: "10px" }}
                    >
                        {showPassword ? "Hide Password" : "Show Password"}
                    </button>
                </div>
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Login"}
            </button>
            <div>
                <a href="/forgot-password">Forgot Password?</a>
            </div>
        </form>
    );
}

export default LoginForm;