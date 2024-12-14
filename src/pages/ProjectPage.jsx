import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import postPledge from "../api/post-pledge";
import Footer from "../components/Footer";
import "./ProjectPage.css";
import { formatDate } from "../utils/formatDate";



function ProjectPage() {
    const { id } = useParams(); // Get the project ID from URL
    const { project, isLoading, error, refetchProject } = useProject(id); // Fetch project details

    const [pledgeAmount, setPledgeAmount] = useState(0); // Pledge input state
    const [pledging, setPledging] = useState(false); // State for pledge submission
    const [comment, setComment] = useState('');
    const [pledgeError, setPledgeError] = useState(null); // Error handling for pledging

    const handlePledge = async (e) => {
        e.preventDefault();
        setPledging(true);
        setPledgeError(null);

        try {
            await postPledge(id, { amount: pledgeAmount, comment: comment,
                anonymous: false, project: id }); // Submit the pledge
            await refetchProject(); // Refresh project data to update pledges
            setPledgeAmount(0); // Reset the input field
        } catch (err) {
            setPledgeError(err.message); // Handle errors from API
        } finally {
            setPledging(false);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div>
            <div className="project-page-container">
                {/* Project Header Section */}
                <div className="project-header">
                    <div className="project-title-section">
                        <h2>{project.title}</h2>
                        <div className="project-meta">
                            <span>Created {formatDate(project.date_created)}</span>
                            <span className={`project-status ${project.is_open ? 'open' : 'closed'}`}>
                                {project.is_open ? "Active" : "Closed"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="project-content">
                    {/* Left Column: Project Details */}
                    <div className="project-details">
                        <div className="project-image-container">
                            {project.image ? (
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="project-image"
                                />
                            ) : (
                                <div className="project-image-placeholder">
                                    No image available
                                </div>
                            )}
                        </div>
                        <div className="project-description">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Vivamus luctus eros aliquet convallis ultricies.
                            </p>
                        </div>
                        
                        {/* Pledge Form moved to left column */}
                        {project.is_open && (
                            <div className="pledge-form-container">
                                <form onSubmit={handlePledge}>
                                    <h4>Make a Pledge</h4>
                                    {pledgeError && <p className="error-message">{pledgeError}</p>}
                                    <div className="pledge-inputs">
                                        <input
                                            type="number"
                                            value={pledgeAmount}
                                            onChange={(e) => setPledgeAmount(Number(e.target.value))}
                                            min="1"
                                            placeholder="Number of books"
                                            required
                                        />
                                        <input
                                            type="text"
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            placeholder="Leave a comment"
                                        />
                                        <button type="submit" disabled={pledging}>
                                            {pledging ? "Pledging..." : "Pledge Now"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Pledges */}
                    <div className="project-pledges">
                        <h3>Recent Pledges</h3>
                        <div className="pledges-list">
                            {project.pledges.map((pledgeData, key) => (
                                <div key={key} className="pledge-card">
                                    <div className="pledge-amount">{pledgeData.amount} books</div>
                                    <div className="pledge-supporter">from {pledgeData.supporter_username}</div>
                                    {pledgeData.comment && (
                                        <p className="pledge-comment">"{pledgeData.comment}"</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;
