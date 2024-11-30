import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero"


function HomePage() {
    const { projects } = useProjects();

    return (
        <div>
            <Hero
                title="Welcome to BookWish"
                subtitle="Empowering communities through the gift of books."
                image=""
                buttonLabel="Learn More About Us"
                buttonLink="/about"
            />
            <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />; 
            })}
            </div>
            <Footer />
        </div>
        
    );
}

export default HomePage;