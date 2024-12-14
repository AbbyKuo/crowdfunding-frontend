import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "./LoginPage.css";

function LoginPage() {
    return (
        <div>
            <div className="login-page-container">
                <Hero 
                    title="Hello"
                    subtitle="Welcome Back!"
                    image=""
                    buttonLabel=""
                    buttonLink=""
                />
                <div className="login-form-wrapper">
                    <div className="login-form-container">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;