import { useNavigate } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import "./CreateProjectPage.css";

function CreateProjectPage() {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");

    // Redirect to login if user is not authenticated
    if (!token) {
        navigate("/login");
        return null;
    }

    return (
        <div className="create-project-container">
            <h1 className="page-title">Create New Project</h1>
            <div className="form-container">
                <ProjectForm />
            </div>
        </div>
    );
}

export default CreateProjectPage; 