// JavaScript to check if the current page is "HistoryPage.html"
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("HistoryPage.html")) {
        // If we're on the History page, add a bold style to the History link
        document.getElementById("history-link").classList.add("bold");
    }
});

// Function to show the login popup
function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "flex"; // Change to 'flex' for centering
}

// Function to close the login popup
function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

// Function to check login credentials
function checkLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Basic validation (could be expanded)
    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        // Example of hardcoded credentials (for testing purposes)
        var validEmail = "user@example.com";
        var validPassword = "password123";

        if (email === validEmail && password === validPassword) {
            alert("Login successful!");
            closeLoginPopup();
        } else {
            alert("Invalid credentials. Please try again.");
        }
    }
}

// Function to search for projects (dummy function for now)
function searchProjects() {
    var query = document.getElementById("searchInput").value;
    if (query !== "") {
        // Placeholder for actual search logic
        alert("Searching for projects: " + query);
    }
}

// Function to refresh the search results
function refreshResults() {
    document.getElementById("searchInput").value = "";
    document.getElementById("resultsContainer").innerHTML = "";
}
