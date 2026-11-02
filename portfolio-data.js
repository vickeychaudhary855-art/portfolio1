/**
 * ============================================================================
 * VICKEY CHAUDHARY — PORTFOLIO CONTENT DATA STORE
 * Verified Learning Journey & Authentic Student Profile
 * ============================================================================
 * 
 * HOW TO UPDATE YOUR PORTFOLIO:
 * 1. Edit this file to add, remove, or modify any content.
 * 2. To add a project, append an object to the `projects` array.
 * 3. To update skills, edit `skills.demonstrated` or `skills.currentlyLearning`.
 * 4. To add achievements, edit the `achievements` array.
 * 5. To add a journey milestone, edit the `journey` array.
 * 6. Commit and push: GitHub Pages reflects your updates instantly!
 * ============================================================================
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Vickey Chaudhary",
    monogram: "VC",
    role: "Aspiring Software Engineer & Developer",
    issueLabel: "VOL. 01 — PUNE, INDIA — 2026",
    statusBadge: "First-Year Computer Science Student • Pune, India",
    heroIntro: "Pursuing B.Tech in Computer Science at Newton School of Technology (ADPU). Learning programming with Python, building foundational web projects, and exploring Artificial Intelligence.",
    photo: "vickey-portrait.png",
    photoCaption: "Plate 01 — Vickey Chaudhary, Aspiring Software Engineer",
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
    curatorIndex: [
      { num: "01", label: "DISCIPLINE", value: "Computer Science & Python" },
      { num: "02", label: "ACADEMICS", value: "Newton School of Tech (ADPU)" },
      { num: "03", label: "FOCUS", value: "Programming Fundamentals & Web" },
      { num: "04", label: "LOCATION", value: "Pune, Maharashtra, India" }
    ]
  },

  about: {
    heading: "The Craft, Curiosity & Direction",
    badge: "01 // MONOGRAPH",
    lead: "I'm Vickey Chaudhary, a computer science student at Newton School of Technology (Ajeenkya DY Patil University, Pune) who began programming in August 2026, building software fundamentals step by step.",
    paragraphs: [
      "My journey into software development started in August 2026 with Python. Rather than rushing through superficial frameworks, I am focusing on building solid fundamentals—understanding variables, control flow, loops, and the logical architecture of code.",
      "Alongside university coursework in computer science and artificial intelligence, I am learning version control with Git and GitHub, building responsive web interfaces with HTML, CSS, and JavaScript, and working consistently to develop into a capable software engineer."
    ],
    principles: [
      {
        num: "01",
        title: "Code to Understand",
        description: "Writing scripts and exercises hands-on to build intuitive problem-solving skills and understand how code executes."
      },
      {
        num: "02",
        title: "Cadence of a Learner",
        description: "Practicing consistently, documenting learning milestones on GitHub, and turning concepts into working programs."
      },
      {
        num: "03",
        title: "Honest Engineering",
        description: "Focusing on genuine understanding, clean code formatting, accessible interfaces, and steady growth without exaggerated claims."
      }
    ]
  },

  projects: [
    {
      id: "portfolio-engine",
      index: "EXHIBIT 01",
      title: "Personal Web Portfolio & Brand Platform",
      status: "Active Build / Live",
      featured: true,
      problem: "Needed a clean, authentic personal space to document my learning progression, projects, and contact channels as a computer science student.",
      contribution: "Developing a personal portfolio using Antigravity, working with HTML5, CSS3, and JavaScript, featuring a decoupled data store and responsive layout.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Antigravity", "GitHub Pages"],
      githubUrl: "https://github.com/vickeychaudhary855-art",
      liveUrl: "#home",
      takeaway: "Gained practical experience in frontend structure, styling, DOM interactions, and deploying via GitHub Pages."
    },
    {
      id: "ai-hospital-dashboard",
      index: "EXHIBIT 02",
      title: "AI-Assisted Hospital Dashboard",
      status: "Exploration / AI-Assisted",
      featured: true,
      problem: "Wanted to understand how healthcare interfaces organize patient queues, appointments, and staff status, exploring digital product creation before having formal programming knowledge.",
      contribution: "Created a hospital dashboard prototype with the help of AI tools before starting programming classes. Guided layout requirements and user flow while learning how digital interfaces come together.",
      technologies: ["AI Prototyping", "UI Wireframing", "Product Design"],
      githubUrl: "https://github.com/vickeychaudhary855-art",
      liveUrl: null,
      takeaway: "Sparked my curiosity about software architecture, inspiring me to pursue computer science and learn programming from the ground up."
    },
    {
      id: "python-foundations-lab",
      index: "EXHIBIT 03",
      title: "Python Programming Fundamentals Lab",
      status: "Active Learning",
      featured: true,
      problem: "Building computational thinking requires deliberate practice with fundamental programming constructs, control flow, and iterative logic.",
      contribution: "Writing and documenting standalone Python practice exercises, solving algorithmic problems focused on conditions and loops, and organizing code using Git.",
      technologies: ["Python 3", "Logic & Loops", "Git & GitHub"],
      githubUrl: "https://github.com/vickeychaudhary855-art",
      liveUrl: null,
      takeaway: "Strengthening core problem-solving habits and developing a procedural mindset for breaking down problems."
    }
  ],

  currentlyBuilding: [
    {
      tag: "PYTHON FUNDAMENTALS",
      title: "Programming Logic & Loops in Python",
      focus: "Practicing conditional statements, loops, basic functions, and foundational algorithmic exercises."
    },
    {
      tag: "COLLEGE COURSEWORK",
      title: "Artificial Intelligence Foundations",
      focus: "Exploring core concepts of AI and computational thinking through first-year university classes."
    },
    {
      tag: "WEB DEVELOPMENT",
      title: "Personal Portfolio Development",
      focus: "Working with HTML, CSS, and JavaScript using Antigravity to craft an accessible personal website."
    }
  ],

  skills: {
    demonstrated: [
      {
        name: "Python 3",
        level: "Foundational Practice",
        detail: "Syntax, variables, conditional statements, and loops. Building core algorithmic problem-solving habits."
      },
      {
        name: "Git & GitHub",
        level: "Learning Workflow",
        detail: "Basic version control commands, staging, commits, repository tracking, and hosting via GitHub Pages."
      },
      {
        name: "HTML5",
        level: "Working Knowledge",
        detail: "Semantic elements, document structure, accessibility landmarks, and web page layout."
      },
      {
        name: "Modern CSS3",
        level: "Working Knowledge",
        detail: "Flexbox, basic CSS Grid, custom properties, responsive styling, and clean typographic design."
      },
      {
        name: "JavaScript Basics",
        level: "Working Knowledge",
        detail: "DOM manipulation, event listeners, array methods, and dynamic page hydration."
      }
    ],

    currentlyLearning: [
      {
        name: "Artificial Intelligence",
        status: "College Classes",
        detail: "Exploring foundational AI concepts and computational logic through university coursework."
      },
      {
        name: "Algorithmic Problem Solving",
        status: "Active Practice",
        detail: "Solving beginner coding exercises, understanding iteration, loops, and procedural thinking."
      },
      {
        name: "Web Development Craft",
        status: "Ongoing Study",
        detail: "Learning modern frontend patterns, responsive layouts, and user interface accessibility."
      },
      {
        name: "Computer Science Foundations",
        status: "B.Tech Program",
        detail: "Core coursework in Computer Science and Technology at Newton School of Technology."
      }
    ]
  },

  journey: [
    {
      year: "August 2026",
      period: "Milestone 01",
      title: "Beginning My Computer Science Journey",
      description: "Joined Newton School of Technology at Ajeenkya DY Patil University, Pune, to pursue B.Tech in Computer Science and Technology. Expected graduation: 2030."
    },
    {
      year: "August 2026",
      period: "Milestone 02",
      title: "Started Learning Python",
      description: "Started my programming journey with Python. Currently building programming fundamentals and have progressed through loops."
    },
    {
      year: "September 2026",
      period: "Milestone 03",
      title: "Entered the Git & GitHub Ecosystem",
      description: "Started learning Git and GitHub to understand version control and software project management."
    },
    {
      year: "2026",
      period: "Milestone 04",
      title: "Built My First AI-Assisted Hospital Dashboard",
      description: "Created a hospital dashboard with the help of AI tools before I had programming knowledge. This was an early experience of building a digital product using AI assistance."
    },
    {
      year: "2026",
      period: "Milestone 05",
      title: "Started Building My Personal Web Portfolio",
      description: "Started developing my personal portfolio using Antigravity and working with HTML, CSS and JavaScript."
    }
  ],

  currentFocus: {
    heading: "Currently Exploring",
    items: [
      "Artificial Intelligence through college classes.",
      "Continuing my programming and web development learning journey."
    ]
  },

  achievements: [
    {
      num: "01",
      title: "Admission to Newton School of Technology (ADPU)",
      category: "Academic Selection",
      description: "Selected into the B.Tech in Computer Science & Technology program (Class of 2030) through entrance evaluation."
    },
    {
      num: "02",
      title: "Engineered Personal Web Portfolio",
      category: "Web Development",
      description: "Developed an editorial personal brand website using Antigravity, working with HTML, CSS, JavaScript, and an isolated data store."
    },
    {
      num: "03",
      title: "Active Version Control Practice",
      category: "Developer Foundations",
      description: "Maintaining Git repositories on GitHub (@vickeychaudhary855-art) to track personal coding exercises and coursework."
    }
  ],

  education: {
    institution: "Newton School of Technology",
    university: "Ajeenkya DY Patil University",
    location: "Pune, Maharashtra, India",
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Technology",
    timeline: "2026 – 2030 (Expected)",
    note: "Focusing on core computer science foundations, programming fundamentals, mathematics, and modern software development practices."
  }
};

// Make accessible to browser window or module exports
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
