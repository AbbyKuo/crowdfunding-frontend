import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import Footer from '../components/Footer';
import "./ProjectPage.css";

function ProjectPage() {
    const { id } = useParams();
    const { project, isLoading, error } = useProject(id);

    if (isLoading) {
        return (<p>Loading...</p>);
    }

    if (error) {
        return (<p>{error.message}</p>);
    }

    return (
        <div>
            <div className="project-page-container">
                {/* Left Column: Project Details */}
                <div className="project-details">
                    <h2>{project.title}</h2>
                    <h3>Created at: {project.date_created}</h3>
                    <h3>{`Status: ${project.is_open ? 'Open' : 'Closed'}`}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus luctus eros aliquet convallis ultricies.
                    </p>
                </div>
                {/* Right Column: Pledges */}
                <div className="project-pledges">
                    <h3>Pledges</h3>
                    <ul>
                        {project.pledges.map((pledgeData, key) => (
                            <li key={key}>
                                ${pledgeData.amount} from {pledgeData.supporter}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;
