// ==========================================
// PROJECT TEMPLATE
// ==========================================
// Copy this file to create a new project
// Rename the file to match your project (e.g., my-awesome-project.js)
// Then update the HTML file to include your new project script

(function() {
    const project = {
    title: "Your Project Name",
    description: "A brief description shown on the project card (2-3 sentences max).",
    detailedDescription: `
        <h2>Project Overview</h2>
        <p>A comprehensive description of your project. You can use HTML here!</p>
        
        <h3>Features</h3>
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
        </ul>
        
        <h3>Technical Details</h3>
        <p>Explain your technical approach, architecture, and interesting challenges.</p>
        
        <!-- Add images like this: -->
        <!-- <img src="https://example.com/image.png" alt="Description"> -->
        
        <!-- For multiple images in a grid: -->
        <!-- <div class="image-grid">
            <img src="https://example.com/img1.png" alt="Screenshot 1">
            <img src="https://example.com/img2.png" alt="Screenshot 2">
        </div> -->
        
        <!-- You can also use: -->
        <!-- <blockquote>Important quote or insight</blockquote> -->
        <!-- <code>inline code</code> -->
        
        <h3>Lessons Learned</h3>
        <p>What did you learn from this project?</p>
    `,
    image: "", // URL to project image or leave empty for gradient placeholder
    tags: ["Tech1", "Tech2", "Tech3"],
    category: "web", // Options: "web", "mobile", "data", "other"
    liveLink: "https://your-project-url.com", // Optional - remove if not available
    githubLink: "https://github.com/yourusername/yourproject" // Optional - remove if not available
};

    // Add this project to the global projects array
    projects.push(project);
})();

