async function postProject(title, description, goal, image, isOpen, dateCreated) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token = window.localStorage.getItem("token");
    
    const payload = {
        title: title,
        description: description,
        goal: goal,
        image: image,
        is_open: isOpen, // Match the API's expected key format
    };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`, // Include the token for authenticated requests
        },
        body: JSON.stringify(payload), // Serialize the project data
    });

    if (!response.ok) {
        const fallbackError = "Error creating project.";
        
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postProject;
