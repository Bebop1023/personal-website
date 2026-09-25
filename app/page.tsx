import { site, hero, stats, links, about, skills, experience, projects, startup, ventures, athletics, leadership, honors, contact } from "@/content";
import Reveal from "@/components/Reveal";
import RoleCycler from "@/components/RoleCycler";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal className="section-head">
      <span className="sec-num" aria-hidden>{index}</span>
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
    </Reveal>
  );
}

export default function Home() {
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <>
      <div className="grain" aria-hidden />

      <header className="nav">
        <a href="#top" className="mark" aria-label="Back to top">
          {initials}
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#startup">Startup</a>
          <a href="#projects">Hackathons</a>
          <a href="#taekwondo">Taekwondo</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-sm" href={site.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="hero wrap">
          <div className="glow" aria-hidden />
          <div className="hero-grid">
            <div>
              <p className="status load" style={{ animationDelay: "0ms" }}>
                <span className="dot" /> {hero.status}
              </p>
              <h1 className="load" style={{ animationDelay: "120ms" }}>
                {hero.headline.map((line, i) => (
                  <span key={i} className={i === hero.headline.length - 1 ? "accent-line" : ""}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="role-line load" style={{ animationDelay: "260ms" }}>
                <span className="prompt">$ whoami</span> <RoleCycler roles={hero.roles} />
              </p>
              <p className="intro load" style={{ animationDelay: "360ms" }}>
                {hero.intro}
              </p>
              <div className="ctas load" style={{ animationDelay: "460ms" }}>
                <a className="btn btn-primary" href={site.resume} target="_blank" rel="noreferrer">
                  View Resume <Arrow />
                </a>
                <a className="btn" href="#contact">
                  Get in touch
                </a>
                <div className="socials">
                  <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            <div className="portrait load" style={{ animationDelay: "300ms" }}>
              {site.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={site.photo} alt={site.name} />
              ) : (
                <div className="portrait-fallback" aria-hidden>
                  {initials}
                </div>
              )}
              <div className="portrait-tag">
                <span>NC A&T · CS ’29</span>
                <span>{site.location}</span>
              </div>
            </div>
          </div>

          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section id="about" className="wrap section">
          <SectionHead index="01" label="About" title="Builder first. Specialist later." />
          <div className="about-grid">
            <Reveal className="about-text">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="chips">
                {about.focus.map((f) => (
                  <span key={f} className="chip chip-accent">{f}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="skills">
              {skills.map((g) => (
                <div key={g.group} className="skill-group">
                  <p className="eyebrow">{g.group}</p>
                  <div className="chips">
                    {g.items.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ---------- EXPERIENCE ---------- */}
        <section id="experience" className="wrap section">
          <SectionHead index="02" label="Experience" title="Where I work." />
          <div className="timeline">
            {experience.map((job) => (
              <Reveal key={job.role + job.org} className="job">
                <div className="job-meta">
                  <span className="mono muted">{job.dates}</span>
                </div>
                <div className="job-body">
                  <h3>
                    {job.role}{" "}
                    <a className="org" href={job.link} target="_blank" rel="noreferrer">
                      @ {job.org}
                    </a>
                  </h3>
                  <ul>
                    {job.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                  <div className="chips">
                    {job.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- STARTUP ---------- */}
        <section id="startup" className="wrap section">
          <SectionHead index="03" label="Founder" title="My startup." />
          <Reveal className="startup">
            <div className="startup-main">
              <p className="eyebrow">
                <span className="accent">{startup.role}</span> · Since {startup.since}
              </p>
              <h3>{startup.name}</h3>
              <p className="venture-tagline">{startup.tagline}</p>
              <p className="venture-desc">{startup.description}</p>
              <ul>
                {startup.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="chips">
                {startup.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
              <a className="btn btn-primary venture-btn" href={startup.link} target="_blank" rel="noreferrer">
                {startup.cta} <Arrow />
              </a>
            </div>
            <div className="call" aria-label="Example AutonomIQ call">
              <div className="call-head">
                <span className="call-live"><span className="dot" /> Live call</span>
                <span className="mono muted">AI Receptionist</span>
              </div>
              <div className="call-body">
                {startup.demoCall.map((m, i) => (
                  <div key={i} className={`bubble ${m.who}`}>
                    <span className="who">{m.who === "ai" ? "AutonomIQ" : "Caller"}</span>
                    {m.text}
                  </div>
                ))}
              </div>
              <div className="call-foot">
                <span>✓ Appointment booked</span>
                <span>✓ SMS sent</span>
                <span>✓ Owner notified</span>
              </div>
            </div>
          </Reveal>

          {ventures.length > 0 && (
            <>
              <p className="eyebrow also">Also building</p>
              <div className="ventures">
                {ventures.map((v, i) => (
                  <Reveal key={v.name} delay={i * 120} className="venture">
                    <p className="eyebrow">{v.role}</p>
                    <h3>{v.name}</h3>
                    <p className="venture-tagline">{v.tagline}</p>
                    <p className="venture-desc">{v.description}</p>
                    <div className="chips">
                      {v.stack.map((s) => (
                        <span key={s} className="chip">{s}</span>
                      ))}
                    </div>
                    <a className="btn venture-btn" href={v.link} target="_blank" rel="noreferrer">
                      {v.cta} <Arrow />
                    </a>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section id="projects" className="wrap section">
          <SectionHead index="04" label="Hackathon Projects" title="Built at hackathons." />
          <div className="projects">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 100} className={`project ${p.award ? "has-award" : ""}`}>
                <div className="project-shot">
                  <div className="shot-bar" aria-hidden>
                    <i /><i /><i />
                    <span>{p.link ? p.link.replace(/^https?:\/\//, "").replace(/\/$/, "") : p.name.toLowerCase()}</span>
                  </div>
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
                  ) : (
                    <div className="shot-fallback" aria-hidden>
                      <span>{p.name}</span>
                    </div>
                  )}
                </div>
                <div className="project-top">
                  <span className="mono muted">{p.event}</span>
                  <span className="mono muted">{p.date}</span>
                </div>
                <h3>
                  {p.name}
                  {p.award && <span className="award">{p.award}</span>}
                </h3>
                <p className="project-summary">{p.summary}</p>
                {p.points.length > 0 && (
                  <ul>
                    {p.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                )}
                <div className="project-foot">
                  <div className="chips">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a className="link" href={p.link} target="_blank" rel="noreferrer">
                      {p.linkLabel || "View"} <Arrow />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- TAEKWONDO ---------- */}
        <section id="taekwondo" className="wrap section">
          <SectionHead index="05" label="Taekwondo" title={athletics.title} />
          <div className="tkd-top">
            <Reveal className="tkd-intro">
              {athletics.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={100} className="medals">
              {athletics.achievements.map((a) => (
                <div key={a.title} className="medal">
                  <span className="medal-year">{a.year}</span>
                  <div>
                    <p className="medal-title">{a.title}</p>
                    {a.detail && <p className="medal-detail">{a.detail}</p>}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
          <div className="gallery">
            {athletics.photos.map((ph, i) => (
              <Reveal key={ph.src} delay={(i % 4) * 70} className={`tile ${ph.size}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ph.src} alt={ph.alt} loading="lazy" style={ph.position ? { objectPosition: ph.position } : undefined} />
                <span className="tile-cap">{ph.caption}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- LEADERSHIP ---------- */}
        <section id="leadership" className="wrap section">
          <SectionHead index="06" label="Leadership & Honors" title="On campus and beyond." />
          <div className="lead-grid">
            <div className="lead-list">
              {leadership.map((l, i) => (
                <Reveal key={l.role} delay={i * 80} className="lead">
                  <div className="lead-row">
                    <h3>{l.role}</h3>
                    <span className="mono muted">{l.dates}</span>
                  </div>
                  <p className="org-line">{l.org}</p>
                  <p className="muted">{l.detail}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="honors">
              <p className="eyebrow">Honors</p>
              <ul>
                {honors.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="wrap section contact">
          <Reveal className="closer">
            <div className="closer-main">
              <div className="section-head">
                <span className="sec-num" aria-hidden>07</span>
                <p className="eyebrow">Contact</p>
              </div>
              <h2 className="contact-title">
                {contact.headline} <span className="accent-line">{contact.accent}</span>
              </h2>
              <p className="intro">{contact.blurb}</p>
              <a className="btn btn-primary closer-cta" href={`mailto:${links.email}`}>
                Email me <Arrow />
              </a>
            </div>
            <div className="closer-links">
              <a className="clink" href={`mailto:${links.email}`}>
                <span className="eyebrow">Email</span>
                <span className="clink-val">{links.email}</span>
                <Arrow />
              </a>
              <a className="clink" href={links.linkedin} target="_blank" rel="noreferrer">
                <span className="eyebrow">LinkedIn</span>
                <span className="clink-val">in/miles-c-johnson11</span>
                <Arrow />
              </a>
              <a className="clink" href={links.github} target="_blank" rel="noreferrer">
                <span className="eyebrow">GitHub</span>
                <span className="clink-val">@Bebop1023</span>
                <Arrow />
              </a>
              <a className="clink" href={site.resume} target="_blank" rel="noreferrer">
                <span className="eyebrow">Resume</span>
                <span className="clink-val">Download PDF</span>
                <Arrow />
              </a>
              {links.booking && (
                <a className="clink" href={links.booking} target="_blank" rel="noreferrer">
                  <span className="eyebrow">Meet</span>
                  <span className="clink-val">Book a call</span>
                  <Arrow />
                </a>
              )}
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="wrap footer">
        <div className="footer-sign">
          <span className="footer-name">{site.name}</span>
          <span className="accent-line footer-thanks">{contact.signoff}</span>
        </div>
        <div className="footer-meta">
          <span className="mono muted">© {new Date().getFullYear()} · {site.location}</span>
          <a className="mono to-top" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
