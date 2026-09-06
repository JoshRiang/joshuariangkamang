'use client';

import { useEffect, useRef, useState } from 'react';

const PROJECTS = [
  { name: 'quant-research-platform', desc: 'Flagship: strategy plugins, walk-forward backtest, paper trading, FastAPI, Streamlit, Docker.', tag: 'Platform' },
  { name: 'strategy-dsl', desc: 'Custom DSL with parser and compiler. Strategies as plain text files.', tag: 'Quant' },
  { name: 'trading-bot', desc: 'Broker-agnostic execution engine with order state machine and kill switch.', tag: 'Execution' },
  { name: 'market-data-store', desc: 'Parquet time-series store with deterministic replay engine.', tag: 'Data' },
  { name: 'factor-research', desc: 'Momentum, value, quality, low-vol factor backtests with decile spreads and Spearman IC.', tag: 'Research' },
  { name: 'regime-detector', desc: '3-state Gaussian HMM + GARCH(1,1) for volatility regime classification and forecasting.', tag: 'ML' },
  { name: 'pairs-trader', desc: 'Cointegration, half-life, z-score backtester for statistical arbitrage pairs.', tag: 'Stat-Arb' },
  { name: 'portfolio-risk-dashboard', desc: 'FastAPI for VaR, CVaR, correlation, sector exposure, and stress scenarios.', tag: 'Risk' },
  { name: 'kelly-sizer', desc: 'Position sizing from edge and volatility. Full Kelly, fractional Kelly, vol targeting.', tag: 'Risk' },
  { name: 'backtest-harness', desc: 'Walk-forward backtest engine with Sharpe, Sortino, Calmar, drawdown, parameter sweep.', tag: 'Quant' },
];

const EXPERIENCE = [
  { role: 'Intern', company: 'Astra Sedaya Finance (ACC)', date: '2025 — present', desc: 'Built monitoring platform, automated ~70% of manual work, contributed to strategy/QA workflows. Starship Batch 23.' },
  { role: 'Independent quant', company: 'Self', date: '2025 — present', desc: 'Built Kelly+Vol risk engine for a live Pluang portfolio (NVDA/AVGO/TSM/GLD). Nightly walk-forward reports, regime detection, factor research.' },
];

const STACK = ['Python', 'pandas', 'FastAPI', 'Streamlit', 'Flutter', 'Next.js', 'TypeScript', 'PostgreSQL', 'Parquet', 'Docker', 'Linux', 'Git'];

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-name">Joshua Riangkamang</a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#photos">Photos</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero-eyebrow">Hi, I'm Joshua</p>
      <h1 className="hero-title">I build tools for<br />systematic traders.</h1>
      <p className="hero-subtitle">
        Quantitative researcher and software engineer. Interning at Astra Sedaya Finance.
        Targeting investment analyst or algo trading roles.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">See my work</a>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div>
        <div className="stat-num">10</div>
        <div className="stat-label">Open-source projects</div>
      </div>
      <div>
        <div className="stat-num">150+</div>
        <div className="stat-label">Tests passing</div>
      </div>
      <div>
        <div className="stat-num">3</div>
        <div className="stat-label">Internships</div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-eyebrow">Projects</p>
      <h2 className="section-title">Built in public, tested in code.</h2>
      <p className="section-sub">
        Ten open-source projects spanning backtesting, risk management, and execution
        infrastructure. Each one ships with tests, docs, and a real use case.
      </p>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <a
            key={p.name}
            href={`https://github.com/JoshRiang/${p.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card ${i === 0 ? 'project-card-feature' : ''}`}
          >
            <span className="project-tag">{p.tag}</span>
            <div className="project-name">{p.name}</div>
            <p className="project-desc">{p.desc}</p>
            <span className="project-link">View on GitHub →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-eyebrow">Experience</p>
      <h2 className="section-title">Where I've worked.</h2>
      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="exp-item">
            <div className="exp-date">{e.date}</div>
            <div>
              <div className="exp-role">
                {e.role} <span className="exp-company">· {e.company}</span>
              </div>
              <p className="exp-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
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
    <section className="section" id="photos">
      <p className="section-eyebrow">Photos</p>
      <h2 className="section-title">Moments in between.</h2>
      <p className="section-sub">
        Street, architecture, and quiet moments. Mostly shot on a Fuji X-T30, around Jakarta.
      </p>
      {photos && photos.length > 0 && (
        <div className="gallery">
          {photos.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              onClick={() => setLb(i)}
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
    <section className="contact" id="contact">
      <p className="section-eyebrow">Contact</p>
      <h2 className="section-title">Let's talk.</h2>
      <p className="section-sub" style={{ margin: '0 auto 0' }}>
        Open to internships, full-time roles, and interesting collaborations.
      </p>
      <div className="contact-cta">
        <a href="mailto:joshuariangkamang@gmail.com" className="btn btn-primary">Send an email</a>
        <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View GitHub</a>
      </div>
      <div className="contact-secondary">
        <a href="https://linkedin.com/in/joshua-riangkamang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://t.me/JoshRiang" target="_blank" rel="noopener noreferrer">Telegram</a>
        <span style={{ color: 'var(--fg-faint)' }}>joshuariangkamang@gmail.com</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Joshua Riangkamang</span>
      <span>Designed like Apple's website, but built by hand.</span>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
