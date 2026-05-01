// Home.jsx — Portfolio Home Page (Orange + Navy theme)
// Dependencies: bootstrap, react-router-dom
// Install: npm install bootstrap react-router-dom
// In index.js / main.jsx add: import 'bootstrap/dist/css/bootstrap.min.css';
// Add the Google Fonts link to your public/index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ── Inline styles (CSS variables + custom classes) ──────────────────────────
const globalStyles = `
  :root {
    --accent:   #E85D3A;
    --navy:     #1A1A2E;
    --bg:       #FFFFFF;
    --bg-soft:  #F7F5F2;
    --bg-warm:  #F0EDE8;
    --text:     #1C1C1E;
    --muted:    #6E6B68;
    --border:   rgba(0,0,0,0.08);
    --border-md:rgba(0,0,0,0.15);
    --syne: 'Syne', sans-serif;
    --dm:   'DM Sans', sans-serif;
  }

  body {
    font-family: var(--dm);
    background: var(--bg-warm);
    color: var(--text);
  }

  /* ── Navbar ── */
  .pf-navbar {
    background: var(--bg) !important;
    border-bottom: 0.5px solid var(--border);
    font-family: var(--dm);
    padding: 0 1.5rem;
    height: 56px;
  }
  .pf-navbar .navbar-brand {
    font-family: var(--syne);
    font-weight: 800;
    font-size: 17px;
    letter-spacing: -0.5px;
    color: var(--text);
  }
  .pf-navbar .navbar-brand span { color: var(--accent); }
  .pf-navbar .nav-link {
    font-size: 13px;
    color: var(--muted) !important;
    padding: 4px 10px !important;
    border-radius: 6px;
    transition: all 0.15s;
    font-weight: 400;
  }
  .pf-navbar .nav-link:hover,
  .pf-navbar .nav-link.active-link {
    color: var(--text) !important;
    background: var(--bg-soft);
    font-weight: 500;
  }

  /* ── Hero ── */
  .hero-section {
    background: var(--bg);
    border-bottom: 0.5px solid var(--border);
    padding: 3.5rem 0 3rem;
    position: relative;
    overflow: hidden;
  }
  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    background: rgba(232,93,58,0.1);
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 1.5rem;
  }
  .hero-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 2s infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }

  .hero-name {
    font-family: var(--syne);
    font-weight: 800;
    font-size: clamp(2.4rem, 5vw, 3.2rem);
    line-height: 1.05;
    letter-spacing: -2px;
    color: var(--text);
    margin-bottom: 0.85rem;
  }
  .hero-name .accent { color: var(--accent); }

  .hero-sub {
    font-size: 15px;
    color: var(--muted);
    line-height: 1.75;
    max-width: 460px;
    margin-bottom: 2rem;
  }

  .btn-navy {
    background: var(--navy);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-family: var(--dm);
    font-size: 13px;
    font-weight: 500;
    padding: 9px 22px;
    transition: background 0.15s;
    text-decoration: none;
  }
  .btn-navy:hover { background: var(--accent); color: #fff; }

  .btn-outline-dark-custom {
    background: none;
    color: var(--text);
    border: 0.5px solid var(--border-md);
    border-radius: 8px;
    font-family: var(--dm);
    font-size: 13px;
    font-weight: 500;
    padding: 9px 22px;
    transition: all 0.15s;
    text-decoration: none;
  }
  .btn-outline-dark-custom:hover {
    background: var(--bg-soft);
    color: var(--text);
    border-color: var(--border-md);
  }

  /* ── Avatar deco ── */
  .avatar-deco {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(232,93,58,0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .avatar-ring {
    width: 168px;
    height: 168px;
    border-radius: 50%;
    border: 2px solid rgba(232,93,58,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .avatar-inner {
    width: 136px;
    height: 136px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--navy), var(--accent));
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--syne);
    font-weight: 800;
    font-size: 2.2rem;
    color: #fff;
  }

  /* ── Stats ── */
  .stat-num {
    font-family: var(--syne);
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--text);
    letter-spacing: -1px;
    line-height: 1;
  }
  .stat-label {
    font-size: 11px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 2px;
  }

  /* ── Tech Stack ── */
  .stack-section {
    background: var(--bg);
    border-bottom: 0.5px solid var(--border);
    padding: 1.4rem 0;
  }
  .section-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 0.85rem;
  }
  .chip {
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 20px;
    background: var(--bg-soft);
    border: 0.5px solid var(--border);
    color: var(--muted);
    font-weight: 400;
    display: inline-block;
  }
  .chip.hot {
    background: rgba(232,93,58,0.1);
    color: var(--accent);
    border-color: rgba(232,93,58,0.22);
    font-weight: 500;
  }

  /* ── Featured Projects ── */
  .featured-section {
    background: var(--bg);
    padding: 1.75rem 0 2rem;
  }
  .feat-card {
    border: 0.5px solid var(--border);
    border-radius: 12px;
    padding: 1.1rem 1.3rem;
    cursor: pointer;
    transition: all 0.18s;
    height: 100%;
    background: var(--bg);
  }
  .feat-card:hover {
    border-color: var(--border-md);
    background: var(--bg-soft);
    transform: translateY(-2px);
  }
  .feat-icon {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: rgba(232,93,58,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
  .feat-badge {
    font-size: 10px;
    padding: 2px 9px;
    border-radius: 10px;
    background: rgba(26,26,46,0.07);
    color: var(--muted);
  }
  .feat-title {
    font-family: var(--syne);
    font-weight: 600;
    font-size: 13.5px;
    color: var(--text);
    margin-bottom: 4px;
  }
  .feat-desc {
    font-size: 11.5px;
    color: var(--muted);
    line-height: 1.55;
    margin-bottom: 0.75rem;
  }
  .feat-tag {
    font-size: 10px;
    padding: 2px 9px;
    border-radius: 10px;
    background: var(--bg-soft);
    color: var(--muted);
    border: 0.5px solid var(--border);
    display: inline-block;
    margin-right: 3px;
    margin-bottom: 3px;
  }
  .view-all-link {
    font-size: 12px;
    color: var(--accent);
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .view-all-link:hover { opacity: 0.75; color: var(--accent); }

  /* ── Footer strip ── */
  .footer-strip {
    background: var(--bg);
    border-top: 0.5px solid var(--border);
    padding: 1rem 0;
    font-size: 12px;
    color: var(--muted);
  }

  /* ── fade-in animation ── */
  .fade-up {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ── Data ────────────────────────────────────────────────────────────────────
const techStack = [
  { label: "React.js",    hot: true  },
  { label: "TypeScript",  hot: true  },
  { label: "Node.js",     hot: false },
  { label: "PostgreSQL",  hot: false },
  { label: "Tailwind CSS",hot: false },
  { label: "Docker",      hot: false },
  { label: "AWS",         hot: false },
  { label: "GraphQL",     hot: false },
  { label: "Redis",       hot: false },
];

const featuredProjects = [
  {
    icon: "🛒",
    badge: "E-commerce",
    title: "ShopFlow Dashboard",
    desc: "Multi-vendor e-commerce platform with real-time analytics built on React & Node.js.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: "🤖",
    badge: "AI / ML",
    title: "DocuAI Assistant",
    desc: "Document intelligence tool using OpenAI API with a custom RAG pipeline.",
    tags: ["Python", "OpenAI", "React"],
  },
  {
    icon: "📊",
    badge: "Analytics",
    title: "FinTrack Analytics",
    desc: "Personal finance tracker with interactive charts and auto-categorisation.",
    tags: ["TypeScript", "D3.js", "REST"],
  },
  {
    icon: "💬",
    badge: "Realtime",
    title: "ChatRoom Live",
    desc: "Group chat app with rooms, reactions, file sharing & end-to-end encryption.",
    tags: ["Socket.io", "Redis", "React"],
  },
];

const stats = [
  { num: "3+", label: "Years exp" },
  { num: "18", label: "Projects done" },
  { num: "5",  label: "Clients" },
];

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About",    to: "/about" },
  { label: "Contact",  to: "/contact" },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [visible, setVisible] = useState(false);

  // Inject global styles once
  useEffect(() => {
    if (!document.getElementById("pf-styles")) {
      const style = document.createElement("style");
      style.id = "pf-styles";
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
    // trigger fade-in
    const timer = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="container-xl">
          <div className={`row align-items-center fade-up ${visible ? "visible" : ""}`}>

            {/* Left — text */}
            <div className="col-md-7 col-lg-8">
              <div className="hero-tag">
                <div className="hero-dot" />
                Open to work
              </div>

              <h1 className="hero-name">
                Hello, I'm
                <br />
                <span className="accent">Akash Dhere</span>
              </h1>

              <p className="hero-sub">
                Full-stack developer crafting performant web experiences.
                Passionate about React, Node.js, and clean system design.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <Link to="/projects" className="btn-navy">
                  View Projects
                </Link>
                <Link to="/contact" className="btn-outline-dark-custom">
                  Contact Me
                </Link>
              </div>

              {/* Stats */}
              <div className="d-flex gap-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — avatar */}
            <div className="col-md-5 col-lg-4 d-none d-md-flex justify-content-center mt-4 mt-md-0">
              <div className="avatar-deco">
                <div className="avatar-ring">
                  <div className="avatar-inner">AD</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="stack-section">
        <div className="container-xl">
          <div className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
            <div className="section-label">Tech stack</div>
            <div className="d-flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span key={t.label} className={`chip${t.hot ? " hot" : ""}`}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="featured-section">
        <div className="container-xl">
          <div
            className={`d-flex justify-content-between align-items-baseline mb-3 fade-up ${visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.18s" }}
          >
            <div className="section-label mb-0">Featured projects</div>
            <Link to="/projects" className="view-all-link">
              View all →
            </Link>
          </div>

          <div className="row g-3">
            {featuredProjects.map((proj, i) => (
              <div className="col-sm-6 col-lg-3" key={proj.title}>
                <div
                  className={`feat-card fade-up ${visible ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.24 + i * 0.07}s` }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="feat-icon">{proj.icon}</div>
                    <span className="feat-badge">{proj.badge}</span>
                  </div>
                  <div className="feat-title">{proj.title}</div>
                  <p className="feat-desc">{proj.desc}</p>
                  <div>
                    {proj.tags.map((tag) => (
                      <span key={tag} className="feat-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <footer className="footer-strip">
        <div className="container-xl d-flex justify-content-between align-items-center">
          <span>
            © {new Date().getFullYear()} <strong>Alex Kumar</strong>
          </span>
          <div className="d-flex gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="view-all-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="view-all-link">LinkedIn</a>
            <a href="mailto:alex@devfolio.dev" className="view-all-link">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}