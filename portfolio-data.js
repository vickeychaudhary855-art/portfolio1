/**
 * ============================================================================
 * VICKEY CHAUDHARY — PORTFOLIO CONTENT DATA STORE
 * ============================================================================
 * 
 * HOW TO UPDATE YOUR PORTFOLIO:
 * 1. You can edit this file directly to add, remove, or modify any content!
 * 2. To add a project, simply append an object to the `projects` array.
 * 3. To update your skills, edit the `skills.demonstrated` or `skills.currentlyLearning` arrays.
 * 4. To add a learning milestone, add an entry to the `journey` array.
 * 5. Commit and push this file to GitHub: GitHub Pages will immediately reflect the changes!
 * 
 * No HTML or CSS editing is required to keep your portfolio up to date.
 * ============================================================================
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Vickey Chaudhary",
    monogram: "VC",
    role: "Aspiring Software Engineer & Developer",
    statusBadge: "Open to Collaborations & Learning • Pune, India",
    heroIntro: "Building software from first principles with Python. Passionate about problem solving, algorithms, and crafting clean, functional digital products.",
    photo: "images.jpg",
    email: "vickeychaudhary855@gmail.com",
    location: "Pune, Maharashtra, India",
    college: "Newton School of Technology",
    university: "Ajeenkya DY Patil University",
    expectedGraduation: 2030,
    githubUrl: "https://github.com/vickeychaudhary855-art",
    githubHandle: "vickeychaudhary855-art",
    linkedinUrl: "https://www.linkedin.com/in/vickey-chaudhary-796892423/",
    linkedinHandle: "vickey-chaudhary",
    whatsappUrl: "https://wa.me/919216856536",
    whatsappDisplay: "+91 9216856536",
    quickBadges: [
      { label: "Python Builder", icon: "code" },
      { label: "B.Tech CSE '30", icon: "academic" },
      { label: "Newton School of Tech", icon: "building" },
      { label: "Pune, India", icon: "pin" }
    ]
  },

  about: {
    heading: "Engineering Mindset & Ambition",
    badge: "01 // ABOUT ME",
    lead: "I'm Vickey Chaudhary, a computer science student at Newton School of Technology (Ajeenkya DY Patil University, Pune) who believes that true engineering capability comes from building things yourself, not just watching tutorials.",
    paragraphs: [
      "My approach to software engineering is grounded in curiosity and first principles. Rather than relying solely on high-level abstractions, I strive to understand what happens under the hood—how Python manages data in memory, how algorithms scale with input size, and how well-architected software solves tangible problems.",
      "Currently, I spend my days writing modular Python scripts, analyzing algorithmic complexities, practicing version control on GitHub, and exploring modern frontend workflows. My goal is to build deep foundational mastery in computer science and grow into a full-stack engineer who builds resilient, high-impact systems."
    ],
    principles: [
      {
        title: "Code to Understand",
        description: "Writing scripts and data structures from scratch to develop intuition for edge cases, performance, and modularity."
      },
      {
        title: "Consistent Builder Cadence",
        description: "Committing verified code to GitHub, testing scripts rigorously, and turning academic concepts into running programs."
      },
      {
        title: "Craft & Detail",
        description: "Valuing clean code formatting, semantic architecture, accessible interfaces, and zero-bullshit engineering."
      }
    ]
  },

  projects: [
    {
      id: "portfolio-engine",
      title: "Personal Portfolio & Decoupled Content Engine",
      status: "Production / Live",
      featured: true,
      problem: "Needed a high-performance personal brand platform that communicates engineering potential without relying on generic cookie-cutter templates, while allowing portfolio content to be updated effortlessly without touching raw HTML.",
      contribution: "Architected a custom dark-themed portfolio from scratch with an isolated JavaScript data layer (portfolio-data.js). Implemented semantic HTML5, keyboard navigation (WCAG AA), responsive CSS Grid, and zero external runtime dependencies.",
      technologies: ["JavaScript (ES6+)", "CSS3 / Custom Properties", "HTML5 Semantics", "Git & GitHub Pages"],
      githubUrl: "https://github.com/vickeychaudhary855-art",
      liveUrl: "#home",
      takeaway: "Mastered data-view decoupling, client-side progressive enhancement, and building polished UI with zero framework bloat."
    },
    {
      id: "python-cli-suite",
      title: "Python Logic & CLI Utilities Suite",
      status: "Active Build",
      featured: true,
      problem: "Repetitive developer tasks such as text parsing, custom metric formatting, and multi-file organization require reliable, reusable scripts rather than manual effort.",
      contribution: "Writing a modular collection of command-line tools in Python 3 incorporating robust input validation, modular functions, formatted terminal outputs, and automated test cases.",
      technologies: ["Python 3", "CLI Architecture", "File I/O", "Pytest Basics"],
      githubUrl: "https://github.com/vickeychaudhary855-art",
      liveUrl: null,
      takeaway: "Deepened practical skills in Python error handling, defensive programming, and writing cleanly separated modules."
    },
    {
      id: "dsa-practice-tracker",
      title: "Algorithmic Problem Solving & Data Structures Practice",
      status: "Ongoing Practice",
      featured: true,
      problem: "Solving algorithmic problems efficiently requires structured tracking of time/space complexity and recognizing pattern variations across problem domains.",
      contribution: "Maintaining a documented repository of Python solutions covering array manipulations, two-pointers, frequency counting, recursion, and search algorithms with edge-case breakdowns.",
      technologies: ["Python 3", "Algorithms", "Complexity Analysis (Big-O)", "Data Structures"],
      githubUrl: "https://github.com/vickeychaudhary855-art",
      liveUrl: null,
      takeaway: "Building intuition for algorithmic trade-offs, space complexity, and step-by-step logical decomposition."
    }
  ],

  currentlyBuilding: [
    {
      title: "Deepening Core Data Structures in Python",
      focus: "Linked lists, stacks, queues, and recursive tree traversals implemented from scratch.",
      tag: "DSA Sprint"
    },
    {
      title: "Building First Lightweight REST API",
      focus: "Exploring FastAPI to create modular HTTP endpoints with Pydantic validation.",
      tag: "Backend Exploration"
    },
    {
      title: "Git & Shell Workflow Mastery",
      focus: "Automating terminal tasks, branch workflows, and writing comprehensive project READMEs.",
      tag: "Developer Tooling"
    }
  ],

  skills: {
    demonstrated: [
      {
        name: "Python",
        category: "Programming Language",
        level: "Active Language",
        highlight: "Core syntax, functions, data structures, file handling, and algorithmic problem solving."
      },
      {
        name: "Git & GitHub",
        category: "Version Control",
        level: "Daily Workflow",
        highlight: "Branching, committing, repository management, Markdown documentation, and GitHub Pages."
      },
      {
        name: "HTML5 & Accessibility",
        category: "Web Foundations",
        level: "Working Knowledge",
        highlight: "Semantic page structure, keyboard navigation, meta tags, and accessible document outline."
      },
      {
        name: "Modern CSS3",
        category: "Design & Styling",
        level: "Working Knowledge",
        highlight: "Flexbox, CSS Grid, custom properties, responsive media queries, and dark-theme aesthetics."
      },
      {
        name: "Modern JavaScript",
        category: "Frontend Scripting",
        level: "Working Knowledge",
        highlight: "ES6+ syntax, DOM manipulation, event handling, clipboard API, and data rendering."
      }
    ],

    currentlyLearning: [
      {
        name: "Data Structures & Algorithms",
        focus: "Arrays, lists, recursion, sorting/searching algorithms, and asymptotic complexity (Big-O).",
        status: "Active Study"
      },
      {
        name: "Object-Oriented System Design",
        focus: "Classes, inheritance, encapsulation, polymorphism, and modular architecture patterns.",
        status: "Active Study"
      },
      {
        name: "Backend APIs & Web Services",
        focus: "HTTP methods, REST conventions, JSON serialization, and Python web frameworks (FastAPI/Flask).",
        status: "Exploring"
      },
      {
        name: "Linux CLI & Scripting",
        focus: "Zsh/Bash commands, piping, process management, and shell productivity tools.",
        status: "Active Study"
      }
    ]
  },

  journey: [
    {
      year: "2024",
      period: "Milestone 01",
      title: "First Lines of Code & Computational Logic",
      description: "Started learning Python programming. Built first terminal-based scripts, mastered variables, loops, conditionals, and wrote initial algorithmic problem solutions."
    },
    {
      year: "2024",
      period: "Milestone 02",
      title: "Enrolled at Newton School of Technology (ADPU)",
      description: "Admitted into the B.Tech Computer Science & Technology program (Class of 2030) at Newton School of Technology, Ajeenkya DY Patil University, Pune, committing to intensive CS training."
    },
    {
      year: "2024",
      period: "Milestone 03",
      title: "Version Control & Open Source Hub Setup",
      description: "Configured local Git environment and established GitHub profile (@vickeychaudhary855-art). Began maintaining daily code commits and documenting learning."
    },
    {
      year: "2024",
      period: "Milestone 04",
      title: "Engineered Decoupled Personal Portfolio",
      description: "Designed, coded, and deployed a high-performance personal brand platform with an isolated content data layer, responsive dark layout, and accessibility features."
    },
    {
      year: "Current",
      period: "Active Sprint",
      title: "Algorithmic Problem Solving & Microservices",
      description: "Deepening data structure proficiency in Python while building modular CLI utilities and preparing to architect my first RESTful web application."
    }
  ],

  education: {
    institution: "Newton School of Technology",
    university: "Ajeenkya DY Patil University",
    location: "Pune, Maharashtra, India",
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Technology",
    timeline: "2024 – 2030 (Expected)",
    note: "Focusing on core computer science foundations, algorithms, systems programming, and modern software engineering practices."
  }
};

// Make accessible to browser window or module exports
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

