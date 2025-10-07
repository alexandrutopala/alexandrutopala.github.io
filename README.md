# Alexandru Topala - Portfolio Website

A modern, sleek portfolio website showcasing my projects and work. Built with vanilla HTML, CSS, and JavaScript for maximum performance and simplicity.

## 🎨 Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Dark/Light Mode**: Automatically detects system preference, with manual toggle and persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Project Filtering**: Filter projects by category (Web, Mobile, Data Science, Other)
- **Detailed Project Views**: Click any project to view detailed descriptions, images, and schematics in a modal
- **Rich Content Support**: Add images, code blocks, lists, and more to project descriptions
- **Mermaid Diagrams**: Built-in support for flowcharts, sequence diagrams, and architecture diagrams
- **Easy Customization**: Simple data structure for adding/editing projects
- **No Dependencies**: Built with vanilla JavaScript - no frameworks needed
- **Fast Loading**: Optimized for performance with minimal overhead

## 🚀 Quick Start

1. **Edit Your Information**
   - Open `index.html`
   - Update the hero section with your name and description (lines 45-52)
   - Update contact links in the contact section (lines 97-121)

2. **Add Your Projects**
   - Each project is now in its own file in the `projects/` directory
   - To add a new project:
     1. Copy `projects/_template.js` to `projects/your-project-name.js`
     2. Edit the new file with your project details
     3. Add a `<script>` tag in `index.html` (see line 156-157)
   - To edit an existing project:
     - Simply open the corresponding file in `projects/` and edit it

3. **Customize Colors** (Optional)
   - Open `style.css`
   - Modify CSS variables at the top (lines 7-20) to change colors:
     ```css
     --accent-primary: #6366f1; /* Change primary color */
     --accent-hover: #4f46e5;   /* Change hover color */
     ```

4. **Deploy to GitHub Pages**
   - Push your changes to the `main` branch
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select source: "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Save and wait a few minutes

## 📁 Project Structure

```
alexandrutopala.github.io/
├── index.html          # Main HTML file
├── style.css           # Styles and theming
├── script.js           # Main JavaScript (UI interactions)
├── projects.js         # Projects loader (initializes projects array)
├── projects/           # Individual project files
│   ├── _template.js    # Template for new projects
│   ├── ecommerce-platform.js
│   ├── fitness-tracker.js
│   ├── data-viz-dashboard.js
│   ├── ai-chatbot.js
│   ├── portfolio-generator.js
│   └── task-manager.js
├── README.md           # This file
└── MERMAID_EXAMPLES.md # Mermaid diagram examples and syntax
```

## 🎯 Customization Guide

### Adding a New Project

Projects are now organized as individual files for easier management! Each project lives in its own file in the `projects/` directory.

**Steps:**

#### Step 1: Create Your Project File

**Option A - Using Command Line:**
```bash
cd projects
cp _template.js my-new-project.js
```

**Option B - Manually:**
1. Navigate to the `projects/` folder
2. Copy the `_template.js` file
3. Rename it to something descriptive (e.g., `weather-app.js`, `blog-platform.js`)

#### Step 2: Edit Your Project File

Open your new project file (e.g., `projects/my-new-project.js`) and update:
- **title**: Your project name
- **description**: Brief 2-3 sentence description (shown on cards)
- **detailedDescription**: Full HTML description with images, features, etc.
- **tags**: Array of technologies used
- **category**: Choose from `"web"`, `"mobile"`, `"data"`, or `"other"`
- **liveLink**: URL to live demo (optional, remove if not available)
- **githubLink**: URL to GitHub repo (optional, remove if not available)
- **image**: URL to project thumbnail (optional, leave empty for gradient)

> **Note:** The template file already includes `projects.push(project);` at the end - don't remove this!

#### Step 3: Register in index.html

Open `index.html` and find the project scripts section (around line 149-157). Add your new project:

```html
<!-- Load individual project files -->
<script src="projects/ecommerce-platform.js"></script>
<script src="projects/fitness-tracker.js"></script>
<!-- ... other existing projects ... -->
<script src="projects/my-new-project.js"></script>  <!-- Add your new project here -->

<!-- Add your new project files here -->
<!-- <script src="projects/your-project-name.js"></script> -->
```

#### Step 4: Test Your Changes

Open `index.html` in your browser to see your new project appear on the site!

**That's it!** Your new project will now appear in the portfolio.

---

### Complete Example: Adding a "Weather App" Project

Here's a complete walkthrough of adding a new project:

**1. Create the file:**
```bash
cp projects/_template.js projects/weather-app.js
```

**2. Edit `projects/weather-app.js`:**
```javascript
// projects/weather-app.js
const project = {
    title: "Weather Dashboard",
    description: "A beautiful weather app with real-time forecasts, location search, and 7-day predictions.",
    detailedDescription: `
        <h2>About This Project</h2>
        <p>A modern weather dashboard that provides accurate forecasts using the OpenWeather API. Features include current conditions, hourly forecasts, and extended 7-day predictions.</p>
        
        <h3>Key Features</h3>
        <ul>
            <li>Real-time weather data from OpenWeather API</li>
            <li>Location search with autocomplete</li>
            <li>7-day forecast with detailed information</li>
            <li>Beautiful weather animations</li>
            <li>Responsive design for all devices</li>
        </ul>
        
        <h3>Technical Implementation</h3>
        <p>Built with React and TypeScript for type safety. Uses React Query for efficient data fetching and caching. Weather icons are custom SVG animations.</p>
        
        <img src="https://i.imgur.com/example.png" alt="Weather Dashboard Screenshot">
    `,
    image: "",
    tags: ["React", "TypeScript", "API", "CSS"],
    category: "web",
    liveLink: "https://my-weather-app.netlify.app",
    githubLink: "https://github.com/alexandrutopala/weather-dashboard"
};

// Add this project to the global projects array
projects.push(project);
```

**3. Update `index.html`:**
```html
<!-- Load individual project files -->
<script src="projects/ecommerce-platform.js"></script>
<script src="projects/fitness-tracker.js"></script>
<script src="projects/data-viz-dashboard.js"></script>
<script src="projects/ai-chatbot.js"></script>
<script src="projects/portfolio-generator.js"></script>
<script src="projects/task-manager.js"></script>
<script src="projects/weather-app.js"></script>  <!-- ← Your new project! -->
```

**4. Done!** Open `index.html` in your browser and you'll see your Weather Dashboard project card.

---

### Adding Images and Rich Content

The `detailedDescription` field supports full HTML, allowing you to create rich, detailed project descriptions:

**Single Image:**
```html
<img src="https://example.com/your-image.png" alt="Description">
```

**Multiple Images in a Grid:**
```html
<div class="image-grid">
    <img src="https://example.com/screenshot1.png" alt="Screenshot 1">
    <img src="https://example.com/screenshot2.png" alt="Screenshot 2">
    <img src="https://example.com/screenshot3.png" alt="Screenshot 3">
</div>
```

**Other Supported Elements:**
- `<h2>` and `<h3>` for section headings
- `<p>` for paragraphs
- `<ul>` and `<ol>` for lists
- `<blockquote>` for quotes or highlights
- `<code>` for inline code
- `<a href="...">` for links
- `<div class="mermaid">` for diagrams (see MERMAID_EXAMPLES.md)

**Full Example:**
```javascript
detailedDescription: `
    <h2>About This Project</h2>
    <p>This project solves the problem of...</p>
    
    <img src="https://i.imgur.com/yourimage.png" alt="Main interface">
    
    <h3>Architecture</h3>
    <p>The system uses a microservices architecture with...</p>
    
    <div class="image-grid">
        <img src="https://i.imgur.com/diagram1.png" alt="Architecture diagram">
        <img src="https://i.imgur.com/diagram2.png" alt="Data flow">
    </div>
    
    <blockquote>
    "This was my most challenging project to date, teaching me valuable lessons about scalability."
    </blockquote>
    
    <h3>Technologies Used</h3>
    <ul>
        <li><code>React</code> for the frontend</li>
        <li><code>Node.js</code> and <code>Express</code> for the backend</li>
        <li><code>PostgreSQL</code> for data storage</li>
    </ul>
`
```

**Where to Host Images:**
- GitHub (upload to your repo or use GitHub Issues as an image host)
- Imgur (free image hosting)
- Your own server or CDN
- Direct links from your project's deployment

### Adding Mermaid Diagrams

You can add interactive diagrams and charts using Mermaid! Perfect for architecture diagrams, flowcharts, and more.

**Basic Example:**
```html
<div class="mermaid">
graph TD
    A[Client] --> B[API Gateway]
    B --> C[Database]
</div>
```

**Supported Diagram Types:**
- Flowcharts and flow diagrams
- Sequence diagrams
- Class diagrams
- State diagrams
- ER diagrams (database schemas)
- Gantt charts (project timelines)
- Pie charts
- Git graphs

📖 **See `MERMAID_EXAMPLES.md` for complete examples and syntax!**

**Features:**
- ✨ Automatically adapts to dark/light theme
- 📱 Responsive on all devices
- 🎨 Professional styling
- 🔄 Updates when you switch themes

### Changing Colors

Edit the CSS variables in `style.css` (lines 7-20):

```css
:root {
    --accent-primary: #6366f1;  /* Your brand color */
    --accent-hover: #4f46e5;    /* Hover state */
}
```

### Managing Projects

#### Editing an Existing Project

1. Open the project file in the `projects/` directory (e.g., `projects/weather-app.js`)
2. Make your changes
3. Save and refresh your browser

#### Removing a Project

1. Open `index.html`
2. Find the `<script>` tag for your project (around line 149-157)
3. Delete or comment it out:
   ```html
   <!-- <script src="projects/weather-app.js"></script> -->
   ```
4. Optionally, delete the project file from `projects/` directory

#### Reordering Projects

Projects appear on the site in the order they're loaded in `index.html`. To reorder:

1. Open `index.html`
2. Find the project scripts section
3. Rearrange the `<script>` tags in your desired order

**Example:**
```html
<!-- Projects will appear in this order: -->
<script src="projects/weather-app.js"></script>        <!-- 1st -->
<script src="projects/ecommerce-platform.js"></script> <!-- 2nd -->
<script src="projects/fitness-tracker.js"></script>    <!-- 3rd -->
```

### Adding Project Images

You have two options:
1. **Leave empty**: The site will show a gradient placeholder with the first letter
2. **Add URL**: Use a direct link to an image (hosted on GitHub, Imgur, or any CDN)

### Updating Contact Information

In `index.html`, find the contact section (around line 97) and update:
- Email link (line 102)
- GitHub username (line 111)
- LinkedIn profile (line 120)

## 🌐 Categories

Projects can be filtered by these categories:
- `web` - Web applications and websites
- `mobile` - Mobile apps (iOS, Android, React Native, etc.)
- `data` - Data Science, ML, AI projects
- `other` - Everything else

## 💡 Tips

1. **Project Organization**: Each project in its own file makes it easy to manage and update
2. **Project Images**: For best results, use images with a 16:9 aspect ratio (e.g., 800x450px)
3. **Descriptions**: Keep card descriptions concise (2-3 sentences), save details for the modal
4. **Tags**: Use 3-5 tags per project for best visual appearance
5. **Testing**: Test your site locally by opening `index.html` in a browser
6. **Mobile**: Always check how your site looks on mobile devices

## 📝 Quick Reference

### File Organization

- **`index.html`** - Main HTML structure and script loading order
- **`style.css`** - All styling, colors, and responsive design
- **`script.js`** - UI interactions, modal, filtering, animations
- **`projects.js`** - Initializes the empty projects array
- **`projects/`** - Individual project files
  - **`_template.js`** - Copy this to create new projects
  - **Other `.js` files** - Your individual project data

### Adding a Project (Quick Steps)

```bash
# 1. Copy template
cp projects/_template.js projects/my-project.js

# 2. Edit the file with your content
# 3. Add to index.html around line 156:
# <script src="projects/my-project.js"></script>
```

## 🎨 Color Schemes

Here are some suggested color schemes you can use:

**Purple (Default)**
```css
--accent-primary: #6366f1;
--accent-hover: #4f46e5;
```

**Blue**
```css
--accent-primary: #3b82f6;
--accent-hover: #2563eb;
```

**Green**
```css
--accent-primary: #10b981;
--accent-hover: #059669;
```

**Pink**
```css
--accent-primary: #ec4899;
--accent-hover: #db2777;
```

**Orange**
```css
--accent-primary: #f97316;
--accent-hover: #ea580c;
```

## 🔧 Advanced Customization

### Adding New Sections

To add a new section, follow this pattern in `index.html`:

```html
<section class="your-section" id="your-id">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Your Title</h2>
            <p class="section-subtitle">Your subtitle</p>
        </div>
        <!-- Your content here -->
    </div>
</section>
```

### Modifying Animations

Animations are defined in `style.css` (lines 635-649). You can adjust:
- Animation duration
- Animation timing function
- Animation delay

## 📱 Browser Support

This website works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Feel free to use this template for your own portfolio. No attribution required.

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request!

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
