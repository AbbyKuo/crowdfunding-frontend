import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postProject from "../api/post-project";

function ProjectForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
        is_open: true,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await postProject(formData);
            navigate(`/project/${response.id}`);
        } catch (err) {
            setErrorMessage(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="project-form" onSubmit={handleSubmit}>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            
            <div className="form-group">
                <label htmlFor="title">Project Title</label>
                <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter your project title"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your project..."
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="goal">Goal (Number of Books)</label>
                <input
                    type="number"
                    id="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    min="1"
                    placeholder="Enter your book goal"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input
                    type="url"
                    id="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Enter the URL for your project image"
                />
            </div>

            <button 
                type="submit" 
                className="submit-button"
                disabled={isLoading}
            >
                {isLoading ? "Creating Project..." : "Create Project"}
            </button>
        </form>
    );
}

export default ProjectForm;
