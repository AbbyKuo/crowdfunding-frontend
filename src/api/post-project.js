async function postProject(projectData) {
    const token = localStorage.getItem("token");
    
    if (!token) {
        throw new Error("You must be logged in to create a project");
    }

    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/projects/`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify(projectData),
        }
    );

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Failed to create project");
    }

    return await response.json();
}

export default postProject;
