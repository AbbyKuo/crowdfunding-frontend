import { useState, useEffect } from "react";
import getProject from "../api/get-project";

export default function useProject(id) {
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProject = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await getProject(id);
            setProject(data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProject();
    }, [id]);

    return { project, isLoading, error, refetchProject: fetchProject };
}
