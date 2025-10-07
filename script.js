// ==========================================
// Theme Toggle
// ==========================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Function to get system theme preference
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Check for saved theme preference, or use system preference
const savedTheme = localStorage.getItem('theme');
const currentTheme = savedTheme || getSystemTheme();
html.setAttribute('data-theme', currentTheme);

// Listen for system theme changes (only if user hasn't manually set a preference)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        
        // Update Mermaid theme
        mermaid.initialize({
            theme: newTheme === 'dark' ? 'dark' : 'default',
        });
        const mermaidDivs = document.querySelectorAll('.mermaid');
        mermaidDivs.forEach((div) => {
            const graphDefinition = div.getAttribute('data-original');
            if (graphDefinition) {
                div.removeAttribute('data-processed');
                div.innerHTML = graphDefinition;
            }
        });
        mermaid.run();
    }
});

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// ==========================================
// Mobile Menu Toggle
// ==========================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ==========================================
// Projects Rendering
// ==========================================

const projectsGrid = document.getElementById('projectsGrid');
let currentFilter = 'all';

function renderProjects(filter = 'all') {
    // Clear grid
    projectsGrid.innerHTML = '';
    
    // Filter projects
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    // If no projects found
    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.2rem;">No projects found in this category.</p>
            </div>
        `;
        return;
    }
    
    // Render projects
    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.setProperty('--index', index);
    card.style.cursor = 'pointer';
    
    // Create image/placeholder
    const imageHTML = project.image 
        ? `<img src="${project.image}" alt="${project.title}">`
        : `<div class="project-image">${project.title.charAt(0)}</div>`;
    
    // Create tags
    const tagsHTML = project.tags
        .map(tag => `<span class="project-tag">${tag}</span>`)
        .join('');
    
    // Create links
    let linksHTML = '<div class="project-links">';
    
    if (project.liveLink) {
        linksHTML += `
            <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="project-link project-link-primary" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
            </a>
        `;
    }
    
    if (project.githubLink) {
        linksHTML += `
            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link project-link-secondary" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
            </a>
        `;
    }
    
    linksHTML += '</div>';
    
    card.innerHTML = `
        ${project.image ? `<div class="project-image">${imageHTML}</div>` : imageHTML}
        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${tagsHTML}
            </div>
            ${linksHTML}
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => openProjectModal(project));
    
    return card;
}

// ==========================================
// Filter Functionality
// ==========================================

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Get filter value and render
        const filter = button.getAttribute('data-filter');
        currentFilter = filter;
        
        // Add fade out effect
        projectsGrid.classList.add('fade-out');
        
        setTimeout(() => {
            renderProjects(filter);
            projectsGrid.classList.remove('fade-out');
        }, 300);
    });
});

// ==========================================
// Smooth Scrolling for Navigation
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Scroll Animations
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section-header, .project-card').forEach(el => {
    observer.observe(el);
});

// ==========================================
// Project Modal Functionality
// ==========================================

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.querySelector('.modal-overlay');

function openProjectModal(project) {
    // Create modal content
    const tagsHTML = project.tags
        .map(tag => `<span class="modal-tag">${tag}</span>`)
        .join('');
    
    let linksHTML = '';
    if (project.liveLink || project.githubLink) {
        linksHTML = '<div class="modal-links">';
        
        if (project.liveLink) {
            linksHTML += `
                <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="modal-link modal-link-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View Live Demo
                </a>
            `;
        }
        
        if (project.githubLink) {
            linksHTML += `
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="modal-link modal-link-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View on GitHub
                </a>
            `;
        }
        
        linksHTML += '</div>';
    }
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-tags">
                ${tagsHTML}
            </div>
            ${linksHTML}
        </div>
        <div class="modal-description">
            ${project.detailedDescription || project.description}
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Reset scroll position in modal
    modalBody.scrollTop = 0;
    
    // Process any Mermaid diagrams in the modal
    setTimeout(() => {
        const mermaidDivs = modalBody.querySelectorAll('.mermaid');
        mermaidDivs.forEach(div => {
            // Store original content for theme switching
            if (!div.getAttribute('data-original')) {
                div.setAttribute('data-original', div.textContent);
            }
        });
        mermaid.run();
    }, 100);
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scrolling
}

// Close modal when clicking close button
modalClose.addEventListener('click', closeProjectModal);

// Close modal when clicking overlay
modalOverlay.addEventListener('click', closeProjectModal);

// Close modal when pressing ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// Prevent modal from closing when clicking inside modal content
document.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});

// ==========================================
// Initialize Mermaid
// ==========================================

// Initialize Mermaid for diagrams
mermaid.initialize({
    startOnLoad: true,
    theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default',
    securityLevel: 'loose',
});

// Update Mermaid theme when toggling dark/light mode
themeToggle.addEventListener('click', () => {
    setTimeout(() => {
        const theme = document.documentElement.getAttribute('data-theme');
        mermaid.initialize({
            theme: theme === 'dark' ? 'dark' : 'default',
        });
        // Re-render any visible mermaid diagrams
        const mermaidDivs = document.querySelectorAll('.mermaid');
        mermaidDivs.forEach((div, index) => {
            const graphDefinition = div.getAttribute('data-original');
            if (graphDefinition) {
                div.removeAttribute('data-processed');
                div.innerHTML = graphDefinition;
            }
        });
        mermaid.run();
    }, 100);
});

// ==========================================
// Initialize
// ==========================================

// Render all projects on page load
renderProjects();

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = 'none';
    } else {
        nav.style.boxShadow = '0 2px 10px var(--shadow)';
    }
    
    lastScroll = currentScroll;
});

