import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectForm from "../components/ProjectForm";


function HomePage() {
    const { projects, loading, error } = useProjects();

    return (
        <div>
            <Hero
                title="Welcome to BookWish"
                subtitle="Empowering communities through the gift of books."
                image=""
                buttonLabel="Learn More About Us"
                buttonLink="/about"
            />
            {/* <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />; 
            })}
            </div> */}
            <div id="project-list">
                {loading && <p className="loading-message">Loading projects...</p>}
                {error && <p className="error-message">Failed to load projects. Please try again later.</p>}
                {!loading && !error && projects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
                
            <div>
                <ProjectForm />
            </div>

            <Footer />
        </div>
        
    );
}

export default HomePage;