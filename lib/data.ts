export const profile = {
  name: "TUBA ARIF",
  title: "Front-End AI Engineer | Next.js & React Developer | WordPress & Shopify Developer",
  tagline:
    "Front-End AI Engineer building real-time streaming AI applications with Next.js (App Router), React, TypeScript, and the Vercel AI SDK. Experienced in Gemini API integration, secure Route Handlers, prompt engineering, and 6+ live WordPress client sites.",
  location: "Sargodha, Pakistan (Open to Remote Roles)",
  email: "tubaarif002@gmail.com",
  // WhatsApp username link (no phone number anywhere on the site).
  whatsapp: "https://wa.me/tuba.arif_",
  linkedin: "https://www.linkedin.com/in/tuba-arif-it",
  github: "https://github.com/tubaarif-dev",
  upwork: "https://www.upwork.com/freelancers/~013f7932eec9f589a2",
};

export const nav = ["About", "Skills", "Projects", "Experience", "Contact"];

export const skills: { title: string; items: string[] }[] = [
  { title: "Front-End", items: ["Next.js (App Router)", "React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
  { title: "AI Integration", items: ["Vercel AI SDK", "Google Gemini API", "Prompt Engineering", "Real-Time Token Streaming", "Anthropic 4D Framework"] },
  { title: "Back-End & Data", items: ["Node.js", "Route Handlers", "REST APIs", "MySQL", "Oracle"] },
  { title: "CMS & SEO", items: ["WordPress (Elementor, Divi, WooCommerce, Custom Layouts)", "Shopify Store Setup", "On-Page & Technical SEO"] },
  { title: "Tools & Workflow", items: ["Git", "GitHub", "Vercel", "Figma", "VS Code", "Cursor"] },
];

export const experience: { role: string; org: string; period: string; points: string[] }[] = [
  {
    role: "Front-End AI Engineer Intern",
    org: "FlyRank AI | Remote",
    period: "Jul 2026 – Sep 2026",
    points: [
      "Built real-time streaming AI interfaces in Next.js/React integrating the Google Gemini API via the Vercel AI SDK.",
      "Implemented server-side Route Handlers, error boundaries, and status monitoring endpoints.",
      "Applied Anthropic prompt engineering standards and documented iterations in PROMPTS.md.",
    ],
  },
  {
    role: "WordPress Developer",
    org: "Webster Tech | Sargodha",
    period: "May 2025 – Feb 2026",
    points: [
      "Built, customized, and launched 6+ live client WordPress websites on schedule.",
      "Performed full theme customization, performance tweaks, and technical/on-page SEO.",
    ],
  },
  {
    role: "Freelance Content Writer & Academic Specialist",
    org: "Upwork & Direct Clients | Remote",
    period: "2024 – Present",
    points: ["Write academic, blog, and SEO content, and refine AI-assisted drafts for clarity, structure, and academic tone."],
  },
  {
    role: "Freight Dispatcher & E-commerce Virtual Assistant",
    org: "Remote",
    period: "May 2024 – Apr 2026",
    points: ["Handled logistics route optimization, client communication, and seller account operations (Amazon/Walmart)."],
  },
];

export const projects: { name: string; stack: string[]; desc: string; live?: string; code?: string }[] = [
  {
    name: "SiteLingo AI: Plain-English Website Audit Tool",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
    desc: "Converts Google PageSpeed Insights & Lighthouse data into plain-English audits and freelancer-ready client pitches.",
    live: "https://site-lingo-ai.vercel.app",
    code: "https://github.com/tubaarif-dev/SiteLingo-AI",
  },
  {
    name: "Streaming AI Chat Interface",
    stack: ["Next.js 15", "React 19", "TypeScript", "Vercel AI SDK", "Gemini 1.5 Flash", "Tailwind CSS"],
    desc: "Real-time, token-by-token streaming AI chat with mid-stream cancellation, smart auto-scroll, safe markdown rendering, and dark/light themes.",
    live: "https://streaming-ai-chat-interface-murex.vercel.app",
    code: "https://github.com/tubaarif-dev/Streaming-Ai-Chat-Interface",
  },
  {
    name: "Capstone AI Application",
    stack: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Vercel AI SDK v6", "Gemini API"],
    desc: "Real-time AI app with streaming completions, error boundaries, status endpoints, and prompt engineering tracking (PROMPTS.md).",
    live: "https://capstone-ai-app-pi.vercel.app",
    code: "https://github.com/tubaarif-dev/capstone-ai-app",
  },
  {
    name: "PlateFinder",
    stack: ["React 18", "TypeScript", "Tailwind CSS", "TheMealDB API"],
    desc: "Responsive recipe discovery web application featuring real-time API integration, async data fetching, and responsive filtering.",
    live: "https://platefinder-phi.vercel.app",
    code: "https://github.com/tubaarif-dev/platefinder",
  },
  {
    name: "ContentCraft: AI Content Generator",
    stack: ["React.js", "Node.js", "MySQL", "Generative AI APIs"],
    desc: "Converts audio/video into text and generates automated social media content using AI APIs.",
  },
  {
    name: "GitHub Profile Finder",
    stack: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)", "GitHub REST API"],
    desc: "Responsive web application fetching real-time GitHub user profiles, repositories, and activity with async/await and try/catch error handling.",
    code: "https://github.com/tubaarif-dev/github-profile-finder",
  },
];

export const clientSites: { domain: string; desc: string }[] = [
  { domain: "mission-eng.com", desc: "Corporate business website built with Divi & custom SEO optimization." },
  { domain: "femaledriving.co.uk", desc: "Driving school web platform with optimized UI & performance." },
  { domain: "advanceddrivingschool.co.uk", desc: "Service-based driving academy site built on Divi." },
  { domain: "weststandltd.co.uk", desc: "Responsive commercial site built with Elementor." },
  { domain: "andalusproject.com", desc: "Modern business website built with custom Elementor layouts." },
  { domain: "b2telectric.com", desc: "Corporate electrical engineering service website." },
];

const cv = (id: string) => `https://www.coursera.org/account/accomplishments/verify/${id}`;

export const certs: { name: string; date: string; id?: string; verify?: string }[] = [
  { name: "FlyRank AI Internship: Front-end AI Engineering", date: "Sep 2026", id: "FR-D11-702F7-55872", verify: "https://verify.flyrank.ai" },
  { name: "Anthropic Claude Academy: AI Fluency", date: "Sep 2026", id: "7490bf484a45f19964544a196acba57b" },
  { name: "Deloitte Australia Data Analytics Job Simulation", date: "Jun 2026", id: "QpJBgnLrNmc2FZhDN" },
  { name: "McKinsey.org Forward Program", date: "Jun 2026" },
  { name: "Simplilearn Introduction to Databases", date: "May 2025", id: "8276260" },
  { name: "Webster Tech WordPress & SEO Certificate", date: "May 2025" },
  { name: "IBM Getting Started with Front-End and Web Development", date: "Nov 2025", id: "RFJYHX7JX3H7", verify: cv("RFJYHX7JX3H7") },
  { name: "Google Foundations of UX Design", date: "Oct 2025", id: "3DYX9WC9GWTD", verify: cv("3DYX9WC9GWTD") },
  { name: "Coursera Discovery and Low-Fidelity Design with Figma", date: "Oct 2025", id: "OS7YI7MUU3SU", verify: cv("OS7YI7MUU3SU") },
  { name: "Coursera Create a Mockup in Figma", date: "Oct 2025", id: "3NPP2N913G93", verify: cv("3NPP2N913G93") },
];

export const education: { title: string; school: string; detail: string }[] = [
  { title: "BS Information Technology (BSIT)", school: "University of Sargodha", detail: "2021 – 2025 | GPA 3.31" },
  { title: "Intermediate (ICS)", school: "Punjab Group of Colleges", detail: "2019 – 2021 | 85.36% (Grade A+)" },
];
