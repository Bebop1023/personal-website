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
  // Your headshot lives at /public/me.jpg. Swap the file to change it.
  photo: "/me.jpg",
  resume: "/Miles-Johnson-Resume.pdf",
};

export const hero = {
  status: "Cyber & Security Operations Intern @ Ridge IT Cyber",
  headline: ["I build software,", "secure systems,", "and businesses."],
  intro:
    "CS student at North Carolina A&T and co-founder of AutonomIQ, a voice AI startup. I ship AI products at hackathons, triage real threats in CrowdStrike, and run a streetwear brand on the side.",
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
    // image: a screenshot in /public/projects. Leave "" to show a styled placeholder.
    image: "",
    link: "https://pitchpadapp.vercel.app/", // live site, demo video, or repo
    linkLabel: "Live site",
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
    image: "/projects/scholarsync.jpg",
    link: "https://scholar-sync1.vercel.app/",
    linkLabel: "Live site",
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
    image: "",
    link: "",
    linkLabel: "",
  },
];

// ---------- STARTUP (featured "Founder" section) ----------
export const startup = {
  name: "AutonomIQ",
  role: "Co-Founder · Product & Voice AI Lead",
  since: "2026",
  tagline: "Every call answered. Every opportunity captured.",
  description:
    "AutonomIQ is my startup. Local service businesses lose jobs every time a call goes to voicemail, so we built an AI receptionist that picks up 24/7, answers questions, recovers missed calls, and books the appointment on the spot.",
  highlights: [
    "Built the core product: a voice agent that checks live calendar availability, books jobs mid-call, and transfers emergencies to the owner.",
    "Took it from idea to a registered LLC with a live site, published pricing, and an approved business texting brand.",
    "Lead product and sales on a three-person founding team, plus the automation suite for reminders, reviews, and payment links.",
  ],
  stack: ["Vapi", "Make.com", "Twilio", "Google Calendar", "LLMs"],
  link: "https://autonomiq.llc",
  cta: "Visit autonomiq.llc",
  // The example call shown on the right side of the card
  demoCall: [
    { who: "caller", text: "Hey, my garage door won't close and I leave for work at 7." },
    { who: "ai", text: "Sorry about that! I have a technician open tomorrow at 6:15 AM. Want me to lock that in?" },
    { who: "caller", text: "Yes, please." },
    { who: "ai", text: "Done. You'll get a text confirmation in a moment." },
  ],
};

// ---------- OTHER VENTURES (smaller cards under the startup) ----------
export const ventures = [
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
