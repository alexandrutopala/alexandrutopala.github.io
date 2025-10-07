// ==========================================
// PROJECT TEMPLATE
// ==========================================
// Copy this file to create a new project
// Rename the file to match your project (e.g., my-awesome-project.js)
// Then update the HTML file to include your new project script

(function() {
    const project = {
    title: "ETL Pipeline",
    description: "Transform large volumes of data and load into multiple warehouses",
    detailedDescription: `
        <h2>Project Overview</h2>
        <p>
            Implement transformations using Java 8, then configure pipelines execute via 
            MapReduce on Hadoop clusters that extract data from S3 buckets in Avro format, 
            transform it, and load it into Snowflake or Vertica data warehouses.
        </p>
        
        <h3>Features</h3>
        <ul>
            <li>Highly customizable</li>
            <li>Multiple load destinations in the same run</li>
        </ul>
        
        <h3>Technical Details</h3>
        <p>
            I implemented the transformations using Java 8 and an in-house transformation framework that handles the 
            common functionalities.<br/><br/>
            
            The Guice framework was used for dependency injection, leveraging the modules functionality for dynamically
            enabling transformations features.<br/><br/>
            
            To configure the pipeline, I've defined versioned artifacts that declares the transformations and the implementation 
            classes, along with the Guice modules to be loaded. To put together the pipeline, I've defined a pipeline manifest file
            that references the artifacts to be used. This manifest was then passed to the launcher component that, 
            along with common configuration, parsed the <code>workflow.xml</code> file for Oozie.<br/><br/>
        </p>
        <div class="mermaid">
        flowchart LR
          A[S3] -->|Extract Avro| B(Transformation)
          B -->|Get metadata regarding previous runs| C(Meta-store)
          B -->|Load| E[Data stage location]
          E -->|Commit| F(Snowflake)
          E -->|Commit| G(Vertica)
        </div>
        
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
        
    `,
    image: "/assets/img/etl-pipeline-thumbnail.jpg", // URL to project image or leave empty for gradient placeholder
    tags: ["Java 8", "Guice", "MapReduce", "Hadoop", "Snowflake", "Vertica"],
    category: "data", // Options: "web", "mobile", "data", "other"
};

    // Add this project to the global projects array
    projects.push(project);
})();

