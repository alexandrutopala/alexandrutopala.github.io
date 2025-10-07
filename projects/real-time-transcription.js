// ==========================================
// PROJECT TEMPLATE
// ==========================================
// Copy this file to create a new project
// Rename the file to match your project (e.g., my-awesome-project.js)
// Then update the HTML file to include your new project script

(function() {
    const project = {
    title: "Real-time Transcription API",
    description: "Process live audio/video streams and generate real-time transcriptions with AI-generated insights",
    detailedDescription: `
        <h2>Project Overview</h2>
        <p>
            The system was designed to process live audio/video streams using a dynamic set of processors to handle tasks like:
            transcription, summarization, sentiment analysis, while offering a back-pressure mechanism to adapt to varying loads 
            and allow multiple concurrent consumers of the results
        </p>
        
        <h3>Features</h3>
        <ul>
            <li>Low-latency</li>
            <li>Highly customizable operations</li>
            <li>Back-pressure</li>
        </ul>
        
        <h3>Technical Details</h3>
        <p>
            The system is based on the <b>orchestrator pattern</b>, having the following components:
            <ul>
                <li><b>Ingestor</b> - receives the audio/video stream over a variety of protocols (HTTP, WebSocket, RTMP) and pushes the data to the data-bus</li>
                <li><b>Orchestrator</b> - manages the processing pipeline, handling lifecycle events of the pipeline components</li>
                <li><b>Processors</b> - perform specific tasks like transcription, summarization, sentiment analysis</li>
                <li><b>Data-bus</b> - highly-available data transfer component that handles the back-pressure</li>
                <li><b>Egressor</b> - accepts consumers connections, and forwards the processed data from the data-bus</li>
            </ul>
            The orchestrator, ingestor and egressor are implemented using <b>Spring WebFlux</b> 
            to handle multiple concurrent connections in a non-blocking manner.<br/><br/>
            
            For the processor, I implement a common Python framework using <b>FastAPI</b> 
            that handles the common functionalities, while the specific processors implement the required logic.<br/><br/>
            
            After a long comparison between <b>Apache Kafka</b> and <b>Apache Pulsar</b>, I settled with <b>Apache Pulsar</b> 
            for its improved performance resulted after splitting the broker and storage functionalities,
            as well as its built-in support for geo-replication and multi-tenancy.<br/><br/>
        </p>
    `,
    image: "/assets/img/real-time-transcription-thumbnail.png",
    tags: ["Java 21", "WebFlux", "Spring", "Kafka", "Pulsar", "Python", "FastAPI", "MongoDB", "Keycloak"],
    category: "data", // Options: "web", "mobile", "data", "other"
    liveLink: "https://docs.vatis.tech/introduction", // Optional - remove if not available
};

    // Add this project to the global projects array
    projects.push(project);
})();

