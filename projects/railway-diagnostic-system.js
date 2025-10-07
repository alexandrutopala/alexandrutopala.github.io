// ==========================================
// PROJECT TEMPLATE
// ==========================================
// Copy this file to create a new project
// Rename the file to match your project (e.g., my-awesome-project.js)
// Then update the HTML file to include your new project script

(function() {
    const project = {
    title: "Railway Diagnostic System",
    description: "Micro-services based system for real-time railway diagnostics and monitoring",
    detailedDescription: `
        <h2>Project Overview</h2>
        <p>
            The system was able to connect to railway's existing sensors and data sources using dedicated micro-services,
            then process the data in real-time to provide insights and alerts to the operators.
        </p>
       
        <h3>Technical Details</h3>
        <p>
            The micro-services where implemented using <b>Java 11</b> and <b>Spring Boot</b>, and deployed as an on-prem <b>Kubernetes</b> cluster.<br/><br/>
            
            The system implemented the event-driven architecture using <b>RabbitMQ</b> as the data bus for inter-service communication.<br/><br/>
        </p>
    `,
    image: "", // URL to project image or leave empty for gradient placeholder
    tags: ["Java", "RabbitMQ", "Kubernetes", "Spring", "PostgreSQL", "Keycloak"],
    category: "other", // Options: "web", "mobile", "data", "other"
};

    // Add this project to the global projects array
    projects.push(project);
})();

