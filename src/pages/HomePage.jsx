import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function HomePage() {
    const { projects, loading, error } = useProjects();

    return (
        <div className="home-container">
            <Hero
                title="Welcome to BookWish"
                subtitle="Empowering communities through the gift of books."
                image=""
                buttonLabel="Learn More About Us"
                buttonLink="/about"
            />
            <div className="projects-section">
                <h2 className="section-title">Current Projects</h2>
                <div className="project-list">
                    {loading && <p className="loading-message">Loading projects...</p>}
                    {error && <p className="error-message">Failed to load projects. Please try again later.</p>}
                    {!loading && !error && projects.map((projectData, key) => {
                        return <ProjectCard key={key} projectData={projectData} />;
                    })}
                </div>
            </div>
            
            <div className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Make a Difference?</h2>
                    <p>Learn more about the communities we support and how your contribution can help bring books and knowledge to those who need it most.</p>
                    <Link to="/about" className="cta-button">
                        Meet Our Communities
                    </Link>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default HomePage;