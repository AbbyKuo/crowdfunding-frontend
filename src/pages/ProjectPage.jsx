import { useState } from "react";
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import postPledge from "../api/post-pledge";
import Footer from "../components/Footer";
import "./ProjectPage.css";

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
                {/* Left Column: Project Details */}
                <div className="project-details">
                    <h2>{project.title}</h2>
                    <h3>Created at: {project.date_created}</h3>
                    <h3>{`Status: ${project.is_open ? "Open" : "Closed"}`}</h3>
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
                                {pledgeData.amount} books from {pledgeData.supporter}
                            </li>
                        ))}
                    </ul>

                    {/* Pledge Form */}
                    {project.is_open && (
                        <form onSubmit={handlePledge}>
                            <h4>Make a Pledge</h4>
                            {pledgeError && <p className="error-message">{pledgeError}</p>}
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
                                onChange={(e) => setPledgeAmount(Number(e.target.value))}
                                placeholder="Leave a comment"
                            />
                            <button type="submit" disabled={pledging}>
                                {pledging ? "Pledging..." : "Pledge"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;
