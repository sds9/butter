---
sidebar_position: 4
title: Diagrams with Mermaid
description: Interactive diagrams and flowcharts using Mermaid
---

This page demonstrates the powerful diagramming capabilities available through Mermaid integration in Docusaurus.

## Flowcharts

Flowcharts are perfect for visualizing processes and decision trees:

```mermaid
flowchart TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug the code]
    D --> E[Run tests]
    E --> F{Tests passing?}
    F -->|Yes| G[Deploy to production]
    F -->|No| D
    C --> H[End]
    G --> H
```

## Sequence Diagrams

Sequence diagrams show interactions between different actors over time:

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant Database

    User->>Frontend: Submit form
    Frontend->>API: POST /api/data
    API->>Database: INSERT query
    Database-->>API: Success response
    API-->>Frontend: 201 Created
    Frontend-->>User: Show success message
```

## Class Diagrams

Class diagrams illustrate the structure of your code:

```mermaid
classDiagram
    class Butter {
        +String name
        +String version
        +constructor(props: ButterProps)
        +render() ReactElement
        +validate() boolean
    }

    class ButterProps {
        +String title
        +String description
        +boolean isActive
    }

    Butter --> ButterProps : uses
```

## Git Flow Diagrams

Visualize your Git workflow:

```mermaid
gitgraph
    commit id: "Initial commit"
    branch develop
    checkout develop
    commit id: "Add feature A"
    commit id: "Add feature B"
    checkout main
    merge develop
    commit id: "Release v1.0"
    branch hotfix
    checkout hotfix
    commit id: "Fix critical bug"
    checkout main
    merge hotfix
    commit id: "Release v1.0.1"
```

## Entity Relationship Diagrams

Perfect for database design:

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER {
        string id PK
        string email
        string name
        datetime created_at
    }
    ORDER ||--|{ ORDER_ITEM : contains
    ORDER {
        string id PK
        string user_id FK
        decimal total
        datetime created_at
    }
    ORDER_ITEM }|--|| PRODUCT : references
    ORDER_ITEM {
        string id PK
        string order_id FK
        string product_id FK
        int quantity
        decimal price
    }
    PRODUCT {
        string id PK
        string name
        string description
        decimal price
        int stock
    }
```

## State Diagrams

Show state transitions in your application:

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Loading : start_process
    Loading --> Success : process_complete
    Loading --> Error : process_failed
    Success --> Idle : reset
    Error --> Idle : reset
    Error --> Loading : retry

    state Loading {
        [*] --> Fetching
        Fetching --> Validating
        Validating --> Processing
        Processing --> [*]
    }
```

## Pie Charts

Great for showing data distributions:

```mermaid
pie title Code Coverage by File Type
    "TypeScript" : 45
    "JavaScript" : 25
    "Tests" : 20
    "Config Files" : 10
```

## User Journey Maps

Visualize user interactions:

```mermaid
journey
    title User Journey: Getting Started with Butter
    section Discovery
      Visit documentation: 5: User
      Read introduction: 4: User
      Browse examples: 5: User
    section Installation
      Install package: 3: User
      Setup configuration: 2: User
      Run first example: 4: User
    section Usage
      Implement in project: 5: User
      Customize settings: 4: User
      Deploy to production: 5: User
```

## Timeline

Show project milestones:

```mermaid
timeline
    title Project Development Timeline

    2024 Q1 : Project Inception
           : Initial Planning
           : Team Formation

    2024 Q2 : Core Development
           : MVP Features
           : Alpha Testing

    2024 Q3 : Beta Release
           : User Feedback
           : Bug Fixes

    2024 Q4 : Production Release
           : Documentation
           : Marketing Launch
```

These diagrams are fully interactive and will render beautifully in your documentation. Mermaid supports many more diagram types and extensive customization options.

## Next Steps

- Explore the [Mermaid documentation](https://mermaid-js.github.io/) for more diagram types
- Learn about [Docusaurus diagrams](https://docusaurus.io/docs/markdown-features/diagrams)
- Try creating your own diagrams in the documentation
