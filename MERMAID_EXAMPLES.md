# Mermaid Diagrams Examples

Mermaid is now integrated into your portfolio! You can add diagrams and charts to your project descriptions.

## How to Use Mermaid

In your project's `detailedDescription` field, wrap Mermaid code in a `<div class="mermaid">` tag:

```javascript
detailedDescription: `
    <h2>Architecture</h2>
    <p>Here's how the system works:</p>
    
    <div class="mermaid">
    graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server 1]
        B --> D[Server 2]
    </div>
`
```

## Mermaid Diagram Types

### 1. Flowchart

```html
<div class="mermaid">
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> A
</div>
```

### 2. Sequence Diagram

```html
<div class="mermaid">
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant Database
    
    User->>Frontend: Click Login
    Frontend->>API: POST /auth/login
    API->>Database: Validate credentials
    Database-->>API: User data
    API-->>Frontend: JWT Token
    Frontend-->>User: Redirect to dashboard
</div>
```

### 3. Class Diagram

```html
<div class="mermaid">
classDiagram
    class User {
        +String name
        +String email
        +login()
        +logout()
    }
    class Admin {
        +manageUsers()
        +viewAnalytics()
    }
    User <|-- Admin
</div>
```

### 4. State Diagram

```html
<div class="mermaid">
stateDiagram-v2
    [*] --> Idle
    Idle --> Loading: Fetch Data
    Loading --> Success: Data Loaded
    Loading --> Error: Failed
    Success --> Idle: Reset
    Error --> Idle: Retry
</div>
```

### 5. ER Diagram (Database)

```html
<div class="mermaid">
erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ ORDER-ITEM : contains
    PRODUCT ||--o{ ORDER-ITEM : "ordered in"
    
    USER {
        int id
        string email
        string name
    }
    ORDER {
        int id
        date createdAt
        string status
    }
</div>
```

### 6. Gantt Chart (Project Timeline)

```html
<div class="mermaid">
gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Design
    Wireframes           :a1, 2024-01-01, 7d
    UI Design           :a2, after a1, 10d
    section Development
    Backend API         :a3, 2024-01-15, 14d
    Frontend            :a4, after a2, 14d
    section Testing
    QA Testing          :a5, after a4, 7d
</div>
```

### 7. Pie Chart

```html
<div class="mermaid">
pie title Technology Stack
    "React" : 35
    "Node.js" : 25
    "PostgreSQL" : 20
    "Redis" : 10
    "Docker" : 10
</div>
```

### 8. Git Graph

```html
<div class="mermaid">
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
</div>
```

## Complete Example in a Project File

Here's how to add a diagram to your project:

```javascript
(function() {
    const project = {
        title: "Microservices Platform",
        description: "A scalable microservices architecture with service mesh.",
        detailedDescription: `
            <h2>System Architecture</h2>
            <p>Our platform uses a modern microservices architecture for scalability and maintainability.</p>
            
            <div class="mermaid">
            graph TB
                subgraph "Frontend"
                    Web[Web App]
                    Mobile[Mobile App]
                end
                
                subgraph "API Gateway"
                    Gateway[API Gateway]
                end
                
                subgraph "Microservices"
                    Auth[Auth Service]
                    User[User Service]
                    Order[Order Service]
                    Payment[Payment Service]
                end
                
                subgraph "Data Layer"
                    DB1[(Auth DB)]
                    DB2[(User DB)]
                    DB3[(Order DB)]
                    Cache[(Redis Cache)]
                end
                
                Web --> Gateway
                Mobile --> Gateway
                Gateway --> Auth
                Gateway --> User
                Gateway --> Order
                Gateway --> Payment
                Auth --> DB1
                User --> DB2
                Order --> DB3
                Payment --> Cache
            </div>
            
            <h3>Data Flow</h3>
            <p>Here's how a typical order flow works:</p>
            
            <div class="mermaid">
            sequenceDiagram
                participant U as User
                participant G as Gateway
                participant A as Auth Service
                participant O as Order Service
                participant P as Payment Service
                
                U->>G: Place Order
                G->>A: Validate Token
                A-->>G: Token Valid
                G->>O: Create Order
                O->>P: Process Payment
                P-->>O: Payment Confirmed
                O-->>G: Order Created
                G-->>U: Success Response
            </div>
            
            <h3>Development Timeline</h3>
            
            <div class="mermaid">
            gantt
                title Project Phases
                dateFormat  YYYY-MM-DD
                section Phase 1
                Design              :2024-01-01, 14d
                Infrastructure      :2024-01-08, 21d
                section Phase 2
                Core Services       :2024-01-29, 30d
                API Gateway         :2024-02-12, 21d
                section Phase 3
                Testing             :2024-03-04, 14d
                Deployment          :2024-03-18, 7d
            </div>
        `,
        tags: ["Microservices", "Docker", "Kubernetes", "Node.js"],
        category: "web",
        liveLink: "https://example.com",
        githubLink: "https://github.com/yourusername/project"
    };
    
    projects.push(project);
})();
```

## Tips

1. **Keep diagrams simple**: Too much detail can make them hard to read
2. **Use subgraphs**: Group related nodes together
3. **Add labels**: Make relationships clear
4. **Test locally**: Open your site to see how diagrams render
5. **Theme support**: Diagrams automatically adapt to dark/light mode!

## More Information

For complete Mermaid syntax and options, visit: https://mermaid.js.org/

