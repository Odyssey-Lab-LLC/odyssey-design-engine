
## JSX Merge Plan

This plan outlines the process for merging `gemini-base.jsx` with `content-reference.html` into a new, unified React component.

```mermaid
graph TD
    subgraph Legend
        direction LR
        Plan["Action/Step"]
        Input[["Input/Artifact"]]
        Output[["Output/Result"]]
    end

    subgraph Phase 1: Setup & Foundational Integration
        A[1.1: Create NewHomepage.jsx] --> B[1.2: Copy gemini-base.jsx content];
        B --> C[1.3: Insert HTML content after hero];
        C --> D[["NewHomepage.jsx (raw merge)"]];
    end

    subgraph Phase 2: Componentization & Refactoring
        D --> E[2.1-2.3: Basic JSX Conversion (class, style, comments)];
        E --> F[2.4: Create master 'Content' Component];
        F --> G[2.5: Create Presentational Components e.g., PillarCard, Accordion];
        G --> H[2.6: Replace static HTML with new components];
        H --> I[["Component-based NewHomepage.jsx"]];
    end

    subgraph Phase 3: Style & Logic Integration
        I --> J[3.1: Re-implement JS logic in React];
        J --> K[3.2: Reconcile CSS & remove old styles];
        K --> L[3.3: Replace placeholder icons with Lucide icons];
        L --> M[["Styled & Interactive NewHomepage.jsx"]];
    end

    subgraph Phase 4: Verification & Finalization
        M --> N[4.1: Setup local dev environment];
        N --> O[4.2: Visually inspect in browser];
        O --> P[4.3: Create MERGE_PLAN.md and VERIFICATION_CHECKLIST.md];
        P --> Q[4.4: Write final build-report.md];
        Q --> R[["Verified & Documented Component"]];
    end

    style Legend fill:#f9f,stroke:#333,stroke-width:2px
```
