import { useState, useEffect } from "react";
import getProjects from "../api/get-projects";

export default function useProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true); // Renamed from isLoading to loading for consistency
    const [error, setError] = useState(null); // Initialized error state with null

    useEffect(() => {
        async function fetchProjects() {
            try {
                setLoading(true);
                const projectsData = await getProjects();
                setProjects(projectsData);
            } catch (err) {
                setError(err.message || "An error occurred while fetching projects.");
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return { projects, loading, error };
}
