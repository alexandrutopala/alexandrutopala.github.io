// ==========================================
// PROJECT TEMPLATE
// ==========================================
// Copy this file to create a new project
// Rename the file to match your project (e.g., my-awesome-project.js)
// Then update the HTML file to include your new project script

(function() {
    const project = {
    title: "Transcription Software",
    description: "Web platform for transcribing multi-media content using AI",
    detailedDescription: `
        <h2>Project Overview</h2>
        <p>
            The web platform offers an easy-to-use interface for uploading audio and video files,
            augmented with an AI assistant for generating transcription insights. 
        </p>
        
        <h3>Features</h3>
        <ul>
            <li>User-friendly</li>
            <li>AI generated insights</li>
            <li>Transcription editor</li>
        </ul>
        
        <h3>Technical Details</h3>
        <p>
            The web platform it's a monolithic application with the backend implemented in <b>Java 11</b> using <b>Spring Boot</b>,
            and the frontend using <b>React</b>. <br/><br/>
            
            The persistance layer is handled using <b>PostgreSQL</b>, and the data access is done by using <b>Hibernate ORM</b> 
            and <b>Spring Data</b>. <br/><br/>  
            
            The platform offers the subscription purchase functionality using <b>Stripe</b>.
        </p>
    `,
    image: "assets/img/vatis-thumbnail.png", // URL to project image or leave empty for gradient placeholder
    tags: ["Java 11", "Spring", "PostgresSQL", "Hibernate", "React", "JavaScript", "Stripe"],
    category: "web", // Options: "web", "mobile", "data", "other"
    liveLink: "https://vatis.tech/", // Optional - remove if not available
};

    // Add this project to the global projects array
    projects.push(project);
})();

