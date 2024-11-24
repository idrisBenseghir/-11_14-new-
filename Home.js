// JavaScript for search functionality
function searchProjects() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("resultsContainer");

    resultsContainer.innerHTML = ""; // Clear previous results

    const projects = [
        { name: "Solar Energy Project", description: "A community solar project in rural areas." },
        { name: "Reforestation Initiative", description: "Planting trees to combat deforestation." },
        { name: "Plastic Waste Management", description: "Recycling and reducing plastic waste in cities." }
    ];

    const filteredProjects = projects.filter(project => 
        project.name.toLowerCase().includes(input) || 
        project.description.toLowerCase().includes(input)
    );

    if (filteredProjects.length > 0) {
        filteredProjects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project-result");
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            `;
            resultsContainer.appendChild(projectElement);
        });
    } else {
        resultsContainer.innerHTML = "<p>No projects found. Try searching for something else!</p>";
    }
}

function refreshResults() {
    document.getElementById("searchInput").value = ""; // Clear the search input field
    document.getElementById("resultsContainer").innerHTML = ""; // Clear the displayed results
}
