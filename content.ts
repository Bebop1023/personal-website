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
  url: "https://www.milesjohnson.site",
  location: "Greensboro, NC",
  // Your headshot lives at /public/me.jpg. Swap the file to change it.
  photo: "/me.jpg",
  resume: "/Miles-Johnson-Resume.pdf",
  // Picture of page 1 of the resume, shown in the Resume section near the top.
  // When you swap the PDF, ask Claude to regenerate this image too.
  resumePreview: "/resume-preview.jpg",
  resumeUpdated: "Sept 2026",
};

export const hero = {
  status: "Prev. Cyber & Security Operations Intern @ Ridge IT Cyber",
  headline: ["I build software,", "secure systems,", "and businesses."],
  intro:
    "CS student at North Carolina A&T and co-founder of AutonomIQ, a voice AI startup. I ship AI products at hackathons, have triaged real threats in CrowdStrike, and run a streetwear brand on the side.",
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

// ---------- CONTACT (closing section) ----------
export const contact = {
  headline: "Let’s work",
  accent: "together.",
  blurb:
    "I’m looking for software engineering, security, and fintech internships for Summer 2027. Recruiters, founders, and fellow builders: my inbox is open.",
  signoff: "Thanks for stopping by.",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science student at North Carolina A&T (Class of 2029) who likes being useful in more than one room. That has meant tuning CrowdStrike detections for client environments, wiring an LLM into a product at 3 a.m. during a hackathon, and closing deals for my startup.",
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
    dates: "May 2026 – Aug 2026",
    points: [
      "Triaged 30+ endpoint and identity alerts weekly in CrowdStrike, building exclusion rules that significantly cut recurring false-positive noise across managed devices.",
      "Completed Zscaler zero trust training (ZIA, ZPA, ZDX) and shadowed engineers configuring access policies, SSL/TLS inspection, and App Connector Groups for live client environments.",
      "Supported CrowdStrike client onboarding: kickoff calls, product demos, and hands-on identity protection training.",
      "Drafted security communications and documented configuration changes supporting policy reviews, IdP migration, and version profile management.",
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
    image: "/projects/pitchpad.jpg",
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
    // Photos in /public/os, shown in a scrollable strip (same format as the Taekwondo photos)
    photos: [
      { src: "/os/01-running-the-business.jpg", alt: "Miles in an OS beanie working on his laptop next to a label printer", caption: "Running the business", size: "tall" },
      { src: "/os/02-drop-lineup.jpg", alt: "OS beanies in four colors and OS//TEMPO shorts", caption: "The drop: beanies + OS//TEMPO shorts", size: "tall" },
      { src: "/os/03-on-the-run.jpg", alt: "Runner in OS shorts passing a museum", caption: "OS//TEMPO on the move", size: "tall" },
      { src: "/os/04-lookbook.jpg", alt: "Models wearing OS//TEMPO shorts on wooden steps", caption: "Lookbook shoot", size: "tall" },
      { src: "/os/05-tempo-shorts.jpg", alt: "OS//TEMPO shorts laid on packaged inventory", caption: "OS//TEMPO shorts", size: "tall" },
      { src: "/os/06-orders-shipped.jpg", alt: "A pile of packed OS orders ready to ship", caption: "Orders out the door", size: "tall" },
    ],
  },
];

// ---------- TAEKWONDO ----------
// Photos live in /public/tkd and show in a scrollable strip, in this order.
// size sets the slide width: "wide" or "big" (landscape), "tall" (portrait), or "" (medium).
// position (optional): which part of the photo to keep in frame, e.g. "center 20%".
export const athletics = {
  title: "Discipline, on the mat.",
  intro: [
    "Long before hackathons, there was the mat. Taekwondo taught me the habits I bring to everything else: show up, put in the reps, take the loss, and come back sharper.",
    "It took me to national team trials, international competition, 11 national medals (4 gold), and two selections to the USA Taekwondo National Team.",
  ],
  achievements: [
    { year: "11x", title: "National Medalist", detail: "4 gold medals at the national level" },
    { year: "2x", title: "USA Taekwondo National Team", detail: "Represented Team USA internationally" },
    { year: "2023", title: "Gold, USA Taekwondo Team Trials", detail: "National team qualifier" },
    { year: "2024", title: "Bronze, Costa Rica President's Cup", detail: "World Taekwondo G2 ranking event · Heredia, Costa Rica" },
    { year: "2024", title: "Gold, AAU Junior Olympic Games", detail: "Greensboro, NC" },
    { year: "2024", title: "Gold, AAU Team Trials", detail: "Won trials to make the 2024 AAU Senior National Team" },
  ],
  photos: [
    { src: "/tkd/kick-nationals.jpg", alt: "Miles landing a kick at USA Taekwondo Nationals", caption: "USA Taekwondo Nationals", size: "big", position: "" },
    { src: "/tkd/costa-rica-match.jpg", alt: "Miles competing in Costa Rica", caption: "Costa Rica President's Cup", size: "tall", position: "" },
    { src: "/tkd/team-usa-uniform.jpg", alt: "Team USA uniform and black belt embroidered with Miles Johnson", caption: "Team USA kit", size: "tall", position: "" },
    { src: "/tkd/trials-gold.jpg", alt: "Miles with his coaches after winning gold at USA Taekwondo Team Trials", caption: "Team Trials gold, 2023", size: "big", position: "" },
    { src: "/tkd/costa-rica-podium.jpg", alt: "Miles on the podium in Costa Rica", caption: "Podium, Costa Rica 2024", size: "", position: "center 40%" },
    { src: "/tkd/spin-kick.jpg", alt: "Miles throwing a spinning kick", caption: "Spinning hook kick", size: "", position: "" },
    { src: "/tkd/aau-jo-gold.jpg", alt: "Miles with his gold medal at the AAU Junior Olympic Games", caption: "AAU Junior Olympics gold, 2024", size: "wide", position: "center 18%" },
    { src: "/tkd/team-usa.jpg", alt: "Team USA holding the American flag", caption: "Team USA", size: "wide", position: "" },
    { src: "/tkd/aau-senior-team.jpg", alt: "2024 AAU Senior Team photo", caption: "2024 AAU Senior Team", size: "wide", position: "" },
  ],
};

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
