'use client';

import { useEffect, useRef, useState } from 'react';

// ============================================================================// DATA
// ============================================================================
const PROJECTS = [
  { name: 'quant-research-platform', desc: 'flagship: strategies, backtest, paper, FastAPI, Streamlit, Docker', lang: 'py', status: 'active' },
  { name: 'strategy-dsl',             desc: 'custom DSL + parser + compiler. strategies as plain text',         lang: 'py', status: 'active' },
  { name: 'trading-bot',               desc: 'broker-agnostic engine, order state machine, kill switch',         lang: 'py', status: 'active' },
  { name: 'market-data-store',         desc: 'parquet time-series store, deterministic replay engine',           lang: 'py', status: 'active' },
  { name: 'factor-research',           desc: 'momentum/value/quality/low-vol factor backtests, IC',              lang: 'py', status: 'active' },
  { name: 'regime-detector',           desc: '3-state Gaussian HMM + GARCH(1,1) for vol regime',                lang: 'py', status: 'active' },
  { name: 'pairs-trader',              desc: 'cointegration, half-life, z-score backtester',                    lang: 'py', status: 'active' },
  { name: 'portfolio-risk-dashboard',  desc: 'FastAPI: VaR, CVaR, correlation, sector exposure, stress',         lang: 'py', status: 'active' },
  { name: 'kelly-sizer',               desc: 'position sizing from edge + vol, full Kelly, vol targeting',        lang: 'py', status: 'active' },
  { name: 'backtest-harness',          desc: 'walk-forward backtest, Sharpe, Sortino, Calmar, drawdown',         lang: 'py', status: 'active' },
];

const TIMELINE = [
  { year: '2024', title: 'Universitas Indonesia', body: 'Computer Engineering. Built foundation in CS, Python, Linux.' },
  { year: '2025', title: 'ACC Starship intern',   body: 'Astra Sedaya Finance. Monitoring platform, 70% manual work automated.' },
  { year: '2025', title: 'Quant pivot',           body: 'Kelly+Vol engine, Pluang book overlay, 10 quant repos, nightly reports.' },
  { year: '2026', title: 'Now',                   body: 'Targeting investment analyst / algo trading roles. Pushing this site to v1.' },
];

// ============================================================================// HOOKS
// ============================================================================
function useCount(target: number, duration = 1500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return n;
}

// ============================================================================// HEADER
// ============================================================================
function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-path">
          ~/<span className="path-segment">portfolio</span>/<span className="path-active">README.md</span>
        </div>
        <nav className="nav">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a href="#timeline">timeline</a>
          <a href="#gallery">gallery</a>
          <a href="#contact">contact</a>
        </nav>
      </div>
    </header>
  );
}

// ============================================================================// HERO (terminal session)
// ============================================================================
function Hero() {
  const repos = useCount(10);
  const tests = useCount(150);
  return (
    <section className="hero" id="top">
      <p className="hero-line delay-1 prompt">
        <span className="fn">cat</span> <span className="path">~/portfolio/README.md</span>
      </p>
      <p className="hero-line delay-2">
        <span className="comment"># Joshua Riangkamang</span>
      </p>
      <p className="hero-line delay-2">
        <span className="comment"># Quantitative researcher and software engineer, Jakarta</span>
      </p>
      <p className="hero-line delay-3">
        <span className="comment"># Working on systematic trading systems.</span>
      </p>
      <p className="hero-line delay-4">&nbsp;</p>
      <p className="hero-line delay-4">
        <span className="keyword">export const</span> <span className="fn">profile</span> = {'{'}
      </p>
      <p className="hero-line delay-4">
        {'  '}<span className="key">role</span>: <span className="string">"quantitative researcher"</span>,
      </p>
      <p className="hero-line delay-4">
        {'  '}<span className="key">stack</span>: [<span className="string">"python"</span>, <span className="string">"flutter"</span>, <span className="string">"next.js"</span>],
      </p>
      <p className="hero-line delay-4">
        {'  '}<span className="key">targeting</span>: <span className="string">"investment analyst / algo trading"</span>,
      </p>
      <p className="hero-line delay-4">
        {'  '}<span className="key">status</span>: <span className="string">"open to roles"</span>,
      </p>
      <p className="hero-line delay-4">{'}'}</p>
      <p className="hero-line delay-5">&nbsp;</p>
      <p className="hero-line delay-5">
        <span className="comment">$</span> <span className="fn">ls</span> <span className="path">~/projects</span> | <span className="fn">wc</span> -l
        <span style={{ color: 'var(--green)' }}> &nbsp;{repos}</span>
        <span className="text-fg-faint"> repos</span>
        <span style={{ color: 'var(--amber)' }}> &nbsp;{tests}+</span>
        <span className="text-fg-faint"> tests</span>
        <span className="cursor" />
      </p>
    </section>
  );
}

// ============================================================================// STATS
// ============================================================================
function Stats() {
  const repos = useCount(10);
  const tests = useCount(150);
  const intern = useCount(3);
  const photos = useCount(6);
  return (
    <section className="section" id="stats">
      <h2 className="section-title">stats</h2>
      <div className="stats-grid">
        <div className="stat-cell">
          <div className="stat-value">{repos}</div>
          <div className="stat-label">public repos</div>
        </div>
        <div className="stat-cell">
          <div className="stat-value">{tests}+</div>
          <div className="stat-label">tests</div>
        </div>
        <div className="stat-cell">
          <div className="stat-value">{intern}</div>
          <div className="stat-label">internships</div>
        </div>
        <div className="stat-cell">
          <div className="stat-value">{photos}</div>
          <div className="stat-label">photos</div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================// ABOUT
// ============================================================================
function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">about.md</h2>
      <div className="about-text">
        <p>
          <span className="comment">#</span> I&apos;m a Computer Engineering student at
          <span className="highlight"> Universitas Indonesia</span>, interning at
          <span className="highlight"> Astra Sedaya Finance (ACC)</span> on the Starship program.
        </p>
        <p>
          <span className="comment">#</span> I build research infrastructure and trading systems
          that close the gap between academic finance and shipping production code.
          My work spans market-data backtesters, regime-detection models, Kelly-based
          position sizing, and event-driven execution frameworks.
        </p>
        <p>
          <span className="comment">#</span> Stack:{' '}
          <span className="val">python</span>, <span className="val">pandas</span>,{' '}
          <span className="val">flutter</span>, <span className="val">next.js</span>,{' '}
          <span className="val">postgres</span>, <span className="val">docker</span>.
        </p>
        <p>
          <span className="comment">#</span> Targeting: <span className="key">investment analyst</span> or{' '}
          <span className="key">algo trading</span> roles.
        </p>
      </div>
    </section>
  );
}

// ============================================================================// WORK (as a project table)
// ============================================================================
function Work() {
  return (
    <section className="section" id="work">
      <h2 className="section-title">projects/</h2>
      <div className="project-list">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={`https://github.com/JoshRiang/${p.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
          >
            <span className={`project-status ${p.status === 'archived' ? 'archived' : ''}`} />
            <div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
            <span className="project-lang">{p.lang}</span>
            <span className="project-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ============================================================================// TIMELINE
// ============================================================================
function Timeline() {
  return (
    <section className="section" id="timeline">
      <h2 className="section-title">timeline.log</h2>
      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <div
            key={i}
            className="timeline-item"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-title">{item.title}</div>
            <p className="timeline-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================// GALLERY
// ============================================================================
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
    <section className="section" id="gallery">
      <h2 className="section-title">~/photos/</h2>
      {photos && photos.length > 0 && (
        <div className="gallery-grid">
          {photos.map((p, i) => (
            <button key={p.src} onClick={() => setLb(i)} className="gallery-item">
              <img src={p.src} alt={p.alt} loading="lazy" />
              {p.title && <div className="gallery-overlay">{p.title}</div>}
            </button>
          ))}
        </div>
      )}
      {lb !== null && photos && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <button className="lightbox-btn lightbox-prev" onClick={(e) => { e.stopPropagation(); setLb((lb - 1 + photos.length) % photos.length); }}>‹</button>
          <img src={photos[lb].src} alt={photos[lb].alt} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-btn lightbox-next" onClick={(e) => { e.stopPropagation(); setLb((lb + 1) % photos.length); }}>›</button>
          <div className="lightbox-counter">{lb + 1} / {photos.length}</div>
          {photos[lb].title && <div className="lightbox-caption">{photos[lb].title}</div>}
        </div>
      )}
    </section>
  );
}

// ============================================================================// CONTACT
// ============================================================================
function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">contact.sh</h2>
      <div className="contact-list">
        <a href="mailto:joshuariangkamang@gmail.com" className="contact-row">
          <span className="contact-key">email</span>
          <span className="contact-value">joshuariangkamang@gmail.com</span>
          <span className="contact-arrow">↗</span>
        </a>
        <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer" className="contact-row">
          <span className="contact-key">github</span>
          <span className="contact-value">github.com/JoshRiang</span>
          <span className="contact-arrow">↗</span>
        </a>
        <a href="https://linkedin.com/in/joshua-riangkamang" target="_blank" rel="noopener noreferrer" className="contact-row">
          <span className="contact-key">linkedin</span>
          <span className="contact-value">joshua-riangkamang</span>
          <span className="contact-arrow">↗</span>
        </a>
        <a href="https://t.me/JoshRiang" target="_blank" rel="noopener noreferrer" className="contact-row">
          <span className="contact-key">telegram</span>
          <span className="contact-value">@JoshRiang</span>
          <span className="contact-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}

// ============================================================================// FOOTER
// ============================================================================
function Footer() {
  const today = new Date().toISOString().split('T')[0];
  return (
    <footer className="footer">
      <p>
        <span className="comment">$</span> <span className="fn">echo</span> <span className="string">&quot;built with discipline. deployed to the world. © 2026.&quot;</span>
      </p>
      <p>
        <span className="comment"># uptime: 99.9% · last deploy: {today}</span>
      </p>
    </footer>
  );
}

// ============================================================================// PAGE
// ============================================================================
export default function Home() {
  return (
    <main className="terminal">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Work />
      <Timeline />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
