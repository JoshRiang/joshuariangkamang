'use client';

import { useEffect, useState } from 'react';

const PROJECTS = [
  { name: 'quant-research-platform', desc: 'Flagship: strategy plugins, walk-forward backtest, paper trading, FastAPI, Streamlit, Docker.', lang: 'Python' },
  { name: 'strategy-dsl', desc: 'Custom DSL with recursive-descent parser and compiler. Strategies as plain text.', lang: 'Python' },
  { name: 'trading-bot', desc: 'Broker-agnostic execution engine with order state machine, kill switch, structlog JSON events.', lang: 'Python' },
  { name: 'market-data-store', desc: 'Parquet time-series store partitioned by ticker/year, with deterministic replay engine.', lang: 'Python' },
  { name: 'factor-research', desc: 'Momentum, value, quality, low-vol factor backtests with decile spreads and Spearman IC.', lang: 'Python' },
  { name: 'regime-detector', desc: '3-state Gaussian HMM + GARCH(1,1) for volatility regime classification and forecasting.', lang: 'Python' },
  { name: 'pairs-trader', desc: 'Engle-Granger cointegration, half-life mean reversion, z-score backtester.', lang: 'Python' },
  { name: 'portfolio-risk-dashboard', desc: 'FastAPI service for VaR, CVaR, correlation, sector exposure, and stress scenarios.', lang: 'Python' },
  { name: 'kelly-sizer', desc: 'Position sizing from edge + vol. Full Kelly, fractional Kelly, vol targeting.', lang: 'Python' },
  { name: 'backtest-harness', desc: 'Walk-forward backtest engine with Sharpe, Sortino, Calmar, drawdown, parameter sweep.', lang: 'Python' },
];

const EXPERIENCE = [
  { role: 'Intern', company: 'Astra Sedaya Finance', date: '2025 — present', desc: 'Built monitoring platform, automated ~70% of manual work, and contributed to internal strategy/QA workflows. Starship Batch 23.' },
  { role: 'Independent quant', company: 'Self', date: '2025 — present', desc: 'Built Kelly+Vol risk engine for a live Pluang portfolio (NVDA/AVGO/TSM/GLD). Nightly walk-forward reports, regime detection, and factor research.' },
];

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-name">Joshua Riangkamang</a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#gallery">Photos</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header id="top" className="intro">
      <p className="eyebrow">Joshua Riangkamang</p>
      <h1>Joshua Riangkamang</h1>
      <p className="role">Quantitative researcher and software engineer · Jakarta, Indonesia</p>
      <p className="lede">
        I build research infrastructure and trading systems that close the gap between
        academic finance and shipping production code. Currently interning at Astra Sedaya
        Finance and targeting investment analyst or algo trading roles.
      </p>
    </header>
  );
}

function Stack() {
  return (
    <section>
      <h2>Stack</h2>
      <div className="stack">
        <span>Python</span>
        <span>pandas</span>
        <span>numpy</span>
        <span>FastAPI</span>
        <span>Streamlit</span>
        <span>Flutter</span>
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>PostgreSQL</span>
        <span>Parquet</span>
        <span>Docker</span>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {EXPERIENCE.map((e, i) => (
        <div key={i} className="exp-item">
          <h3 className="exp-role">
            <span>{e.role}</span> · <span className="exp-company">{e.company}</span>
          </h3>
          <div className="exp-date">{e.date}</div>
          <p className="exp-desc">{e.desc}</p>
        </div>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Ten open-source projects on GitHub. All shipped with tests, docs, and a real use case.</p>
      <ul className="projects">
        {PROJECTS.map((p) => (
          <li key={p.name} className="project">
            <a href={`https://github.com/JoshRiang/${p.name}`} target="_blank" rel="noopener noreferrer">
              <span className="project-name">{p.name}</span>
              <span style={{ color: 'var(--fg-faint)' }}>↗</span>
            </a>
            <p className="project-desc">{p.desc}</p>
            <div className="project-meta">{p.lang}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Gallery() {
  const [photos, setPhotos] = useState<{ src: string; title: string; alt: string }[] | null>(null);
  const [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    fetch('/photos/manifest.json').then(r => r.ok ? r.json() : { photos: [] }).then(d => setPhotos(d.photos || []));
  }, []);

  useEffect(() => {
    if (lb === null || !photos) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLb(null);
      if (e.key === 'ArrowRight') setLb((lb + 1) % photos.length);
      if (e.key === 'ArrowLeft') setLb((lb - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [lb, photos]);

  return (
    <section id="gallery">
      <h2>Photos</h2>
      <p>Street, architecture, and quiet moments. Mostly shot on a Fuji X-T30, around Jakarta.</p>
      {photos && photos.length > 0 && (
        <div className="gallery">
          {photos.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              onClick={() => setLb(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      )}
      {lb !== null && photos && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <button className="lightbox-btn lightbox-prev" onClick={(e) => { e.stopPropagation(); setLb((lb - 1 + photos.length) % photos.length); }}>‹</button>
          <img src={photos[lb].src} alt={photos[lb].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-btn lightbox-next" onClick={(e) => { e.stopPropagation(); setLb((lb + 1) % photos.length); }}>›</button>
          {photos[lb].title && <div className="lightbox-caption">{photos[lb].title}</div>}
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Open to internships, full-time roles, and interesting collaborations.</p>
      <ul className="contact-list">
        <li><span className="key">Email</span><a href="mailto:joshuariangkamang@gmail.com">joshuariangkamang@gmail.com</a></li>
        <li><span className="key">GitHub</span><a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer">github.com/JoshRiang ↗</a></li>
        <li><span className="key">LinkedIn</span><a href="https://linkedin.com/in/joshua-riangkamang" target="_blank" rel="noopener noreferrer">joshua-riangkamang ↗</a></li>
        <li><span className="key">Telegram</span><a href="https://t.me/JoshRiang" target="_blank" rel="noopener noreferrer">@JoshRiang ↗</a></li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>© 2026 Joshua Riangkamang</span>
      <span>Built with Next.js · Tailscale 100.89.180.23</span>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <Stack />
      <Projects />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
