// ==========================================
// PROJECT TEMPLATE
// ==========================================
// Copy this file to create a new project
// Rename the file to match your project (e.g., my-awesome-project.js)
// Then update the HTML file to include your new project script

(function() {
    const project = {
    title: "Linkedin Post Generator",
    description: "Tool to generate engaging Linkedin posts using AI",
    detailedDescription: `
        <h2>Project Overview</h2>
        <p>
            Platform dedicated to individual creators and small businesses to help them promote their product by
            generating engaging Linkedin posts using AI.
        </p>
        
        <h3>Features</h3>
        <ul>
            <li>Easy-to-use</li>
            <li>Handle any multi-media content</li>
            <li>Available in any language</li>
        </ul>
        
        <h3>Technical Details</h3>
        <p>
            The platform is implemented using a modern web stack with a focus on performance and scalability.<br/><br/>
            
            As main frontend technology, I've used <b>React</b> with <b>Tailwind CSS</b> for rapid UI development.<br/><br/>
            
            The serverless backend is build using <b>TypeScript</b> <b>Next.js</b> deployed on <b>Vercel</b>, 
            leveraging its edge functions for low-latency API responses.<br/><br/>
            
            For AI agents workflows I've used <b>Upstash</b> that automatically handles retries and error handling, 
            along with <b>OpenAI</b> and <b>Anthropic</b> APIs.<br/><br/>
            
            User authentication is handled via <b>Clerk</b> that also handles the SSO connections, 
            while user data and billing is managed using <b>Paddle</b>.<br/><br/> 
        </p>
    `,
    image: "/assets/img/brewbrand-thumbnail.png", // URL to project image or leave empty for gradient placeholder
    tags: ["TypeScript", "React", "NextJS", "Clerk", "Convex", "Paddle"],
    category: "web", // Options: "web", "mobile", "data", "other"
    liveLink: "https://brewbrand.ai/", // Optional - remove if not available
};

    // Add this project to the global projects array
    projects.push(project);
})();

