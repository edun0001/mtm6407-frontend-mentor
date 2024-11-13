// Create a "Back to Top" button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "Back to Top";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

// Show the button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll smoothly to the top when clicking the button
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const articles = [
    { title: "Breaking News: Major Event", content: "Details about the event..." },
    { title: "Technology Update", content: "Latest trends in tech..." },
    { title: "Sports Highlights", content: "Highlights from recent games..." }
];

// Function to load articles dynamically
function loadArticles() {
    const articleSection = document.querySelector(".articles");

    articles.forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
        `;
        articleSection.appendChild(articleElement);
    });
}

// Load articles when the page loads
document.addEventListener("DOMContentLoaded", loadArticles);

function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.content-section');
    
    // Loop through each section and set display based on sectionId
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.style.display = 'block';  // Show the selected section
        } else {
            section.style.display = 'none';   // Hide other sections
        }
    });
}
function showSection(sectionId) {
    // Select all sections with the class 'content-section'
    const sections = document.querySelectorAll('.content-section');
    
    // Loop through each section
    sections.forEach((section) => {
        // Show the section if it matches the sectionId; otherwise, hide it
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    // Update the active link styling
    document.querySelectorAll('.nav a').forEach((link) => {
        // Toggle the 'active' class based on the href attribute matching the sectionId
        link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
    });
}