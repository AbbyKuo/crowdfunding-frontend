import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";
import Footer from "../components/Footer";


function HomePage() {
    const { projects } = useProjects();

    return (
        <div>
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