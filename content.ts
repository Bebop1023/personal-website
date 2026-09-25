// ============================================================
//  content.ts: EVERYTHING on the site comes from this file.
//  To update the site, edit the text below and save.
//  To add a new item, copy an existing { ... } block, paste it
//  right after (keep the comma between blocks), and change it.
// ============================================================

export const site = {
  name: "Miles Johnson",
  // Short line shown in browser tabs and link previews
  title: "Miles Johnson | Software, Security & Founder",
  description:
    "Computer Science student at North Carolina A&T building AI products, working in cybersecurity operations, and running two businesses.",
  url: "https://milesjohnson.vercel.app", // change once you have a custom domain
  location: "Greensboro, NC",
  // Put a photo in /public (e.g. /public/me.jpg) and set photo: "/me.jpg"
  photo: "",
  resume: "/Miles-Johnson-Resume.pdf",
};

export const hero = {
  status: "Cyber & Security Operations Intern @ Ridge IT Cyber",
  headline: ["I build software,", "secure systems,", "and businesses."],
  intro:
    "CS student at North Carolina A&T. I ship AI products at hackathons, triage real threats in CrowdStrike, and run an AI automation agency and a streetwear brand on the side.",
  roles: ["Software Engineer", "Security Ops", "AI Builder", "Founder"],
};

export const stats = [
  { value: "3.75", label: "GPA, CS @ NC A&T" },
  { value: "1st", label: "Lenovo Hackathon" },
  { value: "30+", label: "security alerts triaged weekly" },
  { value: "2x", label: "USA Taekwondo National Team" },
];

export const links = {
  email: "miles.chance.johnson@gmail.com",
  linkedin: "https://www.linkedin.com/in/miles-c-johnson11",
  github: "https://github.com/Bebop1023",
  // Add a Calendly (or similar) link here to show a "Book a call" button
  booking: "",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science student at North Carolina A&T (Class of 2029) who likes being useful in more than one room. Some days that means tuning CrowdStrike detections for client environments. Other days it's wiring an LLM into a product at 3 a.m. during a hackathon, or closing a deal for my agency.",
    "I'm staying broad on purpose: software engineering, security, AI, and business all feed each other. Building my own companies taught me to ship and sell. Working in security taught me how things break. Competing on the USA Taekwondo National Team taught me how to keep showing up.",
  ],
  // Chips shown under the About text
  focus: ["Full-stack development", "Applied AI / LLMs", "Security operations", "Fintech", "Entrepreneurship"],
};

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "Java"] },
  { group: "Frameworks & Tools", items: ["Next.js", "React", "Flask", "FastAPI", "REST APIs", "JWT Auth", "Supabase", "Git/GitHub"] },
  { group: "AI / ML", items: ["OpenAI API", "Claude API", "Whisper", "Text-to-Speech", "Vapi", "Make.com"] },
  { group: "Security", items: ["CrowdStrike Falcon", "Zscaler ZIA / ZPA / ZDX", "Qualys", "Okta"] },
];

export const experience = [
  {
    role: "Cyber & Security Operations Intern",
    org: "Ridge IT Cyber",
    link: "https://ridgeit.com",
    dates: "May 2026 – Present",
    points: [
      "Triage 30+ endpoint and identity alerts weekly in CrowdStrike, building exclusion rules that significantly cut recurring false-positive noise across managed devices.",
      "Completed Zscaler zero trust training (ZIA, ZPA, ZDX) and shadow engineers configuring access policies, SSL/TLS inspection, and App Connector Groups for live client environments.",
      "Support CrowdStrike client onboarding: kickoff calls, product demos, and hands-on identity protection training.",
      "Draft security communications and document configuration changes supporting policy reviews, IdP migration, and version profile management.",
    ],
    tags: ["CrowdStrike", "Zscaler", "Qualys", "Okta"],
  },
];

export const projects = [
  {
    name: "PitchPad",
    award: "1st Place",
    event: "NC A&T Hackathon · Lenovo",
    date: "Mar 2026",
    summary:
      "AI pitch studio that turns a business idea into a structured pitch deck in under 5 minutes, then coaches your delivery in real time.",
    points: [
      "Integrated Claude's API to generate pitch deck content and slide formatting from user-submitted ideas.",
      "Built a real-time voice coach with GPT-4o and Whisper that scores pacing, clarity, and confidence.",
      "Architected 12+ REST APIs with JWT auth for multi-user decks, coaching sessions, and live slide generation.",
    ],
    stack: ["Next.js", "TypeScript", "Python", "Claude API", "GPT-4o", "Whisper"],
    link: "", // add a demo or repo link here
  },
  {
    name: "ScholarSync",
    award: "3rd Place",
    event: "NC A&T Hackathon · Bank of America",
    date: "Apr 2026",
    summary:
      "Financial wellness platform that puts a student's expenses, scholarships, GPA, and career plan in one dashboard, with a voice AI advisor.",
    points: [
      "Consolidated 5+ student pain points into a single full-stack dashboard.",
      "Engineered a voice-enabled advisor (Whisper, GPT-4o, TTS) delivering personalized budgeting and career guidance.",
    ],
    stack: ["Next.js", "TypeScript", "Python", "GPT-4o", "Whisper", "TTS"],
    link: "",
  },
  {
    name: "Heart Care AI",
    award: "",
    event: "NC A&T Hackathon · Medtronic",
    date: "Nov 2025",
    summary:
      "AI medical site that translates and simplifies cardiac documents into 100+ languages, with gamified education to keep patients engaged.",
    points: [
      "Built LLM-powered translation and simplification of cardiac documents in 100+ languages.",
      "Designed a quiz and reward engine projected to boost patient engagement 30–40%.",
      "Engineered Supabase auth and real-time dashboards for secure patient monitoring.",
    ],
    stack: ["Python", "Flask", "FastAPI", "JavaScript", "OpenAI", "Supabase"],
    link: "",
  },
  {
    name: "Stryde",
    award: "",
    event: "Personal Project",
    date: "2026",
    summary:
      "Mobile app that lets coaches push live training plans, practice schedules, diet plans, and recovery routines straight to their athletes, even offline.",
    points: [],
    stack: ["TypeScript", "Mobile"],
    link: "https://github.com/Bebop1023/Stryde",
  },
];

export const ventures = [
  {
    name: "AutonomIQ",
    role: "Co-Founder · Voice AI & Automation Lead",
    tagline: "Every call answered. Every opportunity captured.",
    description:
      "An AI automation agency for local service businesses. I build the product: a 24/7 AI voice receptionist that answers calls, recovers missed ones, and books appointments straight onto the calendar, plus automations for reminders, reviews, and payments.",
    stack: ["Vapi", "Make.com", "Twilio", "Google Calendar"],
    link: "https://autonomiq.llc",
    cta: "Visit autonomiq.llc",
  },
  {
    name: "Operating System",
    role: "Founder · Creative Director",
    tagline: "Independent streetwear, self-funded from day one.",
    description:
      "My clothing brand. I handle design, production, drops, and marketing. Our first drop sold out, and every dollar since has been reinvested into the next release.",
    stack: ["Brand", "Shopify", "Marketing", "Operations"],
    link: "https://osworldd.com",
    cta: "Visit osworldd.com",
  },
];

export const leadership = [
  {
    role: "Cyber Development SIG Lead",
    org: "ACM · NC A&T",
    dates: "Mar 2026 – Present",
    detail:
      "Design and lead a cybersecurity workshop each semester (network security, endpoint protection, ethical hacking) and co-facilitate ~5 general meetings per semester.",
  },
  {
    role: "Social Media Chair",
    org: "Project Renaissance · NC A&T",
    dates: "Aug 2025 – Present",
    detail:
      "Grow the organization's presence across platforms with campaigns that drive member engagement and event attendance.",
  },
];

export const honors = [
  "Chancellor's List (Fall 2025)",
  "Aggie Merit Scholarship",
  "2x USA Taekwondo National Team",
  "Member: ACM, Project Renaissance, Noble Brothers & Sisters, SpeakOut",
];
