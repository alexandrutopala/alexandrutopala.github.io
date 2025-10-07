// ==========================================
// PROJECT TEMPLATE
// ==========================================
// Copy this file to create a new project
// Rename the file to match your project (e.g., my-awesome-project.js)
// Then update the HTML file to include your new project script

(function() {
    const project = {
    title: "Batch Transcription API",
    description: "Highly-scalable API dedicated for processing large number of files",
    detailedDescription: `
        <h2>Project Overview</h2>
        <p>
            The system is implemented using the Producer-Consumer pattern, and leverages the 
            auto-scaling capability of cloud platforms to handle large number of files in a cost-effective manner.
        </p>
   
        <h3>Technical Details</h3>
        <p>
            The entrypoint is a Python-based REST API built with <b>Flask</b>. It accepts the transcription requests,
            validates them, and pushes them to a <b>RabbitMQ</b> queue for processing.<br/><br/>
            
            The consumers are implemented using <b>Python</b> and <b>HuggingFace Transformers</b> library 
            for performing the inference. <br/><br/>
            
            The system is deployed on <b>EKS</b>, using <b>Keda</b> for queue-based auto-scaling of the consumers,
            and using <b>Karpenter</b> for node provisioning. <br/><br/>
        </p>
    `,
    image: "/assets/img/producer-consumer-thumbnail.webp", // URL to project image or leave empty for gradient placeholder
    tags: ["Python", "HF Transformers", "Kubernetes", "RabbitMQ", "Keda", "Karpenter"],
    category: "data", // Options: "web", "mobile", "data", "other"
};

    // Add this project to the global projects array
    projects.push(project);
})();

