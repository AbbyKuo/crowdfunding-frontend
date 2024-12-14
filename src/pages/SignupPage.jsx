import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";
import "./SignupPage.css";

function SignupPage() {
    return (
        <div>
            <div className="signup-page-container">
                <Hero 
                    title="Hello"
                    subtitle="Join Our Community!"
                    image=""
                    buttonLabel=""
                    buttonLink=""
                />
                <div className="signup-form-wrapper">
                    <div className="signup-form-container">
                        <SignupForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignupPage; 