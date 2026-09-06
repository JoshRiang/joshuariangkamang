'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Github, Linkedin, Mail, Send, ArrowUpRight, ArrowDownRight, ArrowRight,
  Code2, Camera, Sparkles, TrendingUp, Terminal, Cpu, BookOpen, MapPin, Quote,
} from 'lucide-react';

// ============================================================================// DATA
// ============================================================================
const PROJECTS = [
  { name: 'backtest-harness', tag: 'Quant', blurb: 'Walk-forward backtest engine with Sharpe, Sortino, Calmar, drawdown, parameter sweep.' },
  { name: 'kelly-sizer', tag: 'Risk', blurb: 'Position sizing from edge + vol. Full Kelly, fractional Kelly, vol targeting.' },
  { name: 'portfolio-risk-dashboard', tag: 'Risk', blurb: 'FastAPI for VaR, CVaR, correlation, sector exposure, stress scenarios.' },
  { name: 'pairs-trader', tag: 'Stat-Arb', blurb: 'Engle-Granger cointegration, half-life mean reversion, z-score backtester.' },
  { name: 'regime-detector', tag: 'ML', blurb: '3-state Gaussian HMM + GARCH(1,1) to classify vol regimes and forecast next-day vol.' },
  { name: 'factor-research', tag: 'Quant', blurb: 'Momentum, value, quality, low-vol factor backtests with decile spreads and Spearman IC.' },
  { name: 'market-data-store', tag: 'Infra', blurb: 'Parquet time-series store partitioned by ticker/year, with deterministic replay engine.' },
  { name: 'trading-bot', tag: 'Execution', blurb: 'Broker-agnostic execution engine with order state machine, kill switch, structlog JSON.' },
  { name: 'strategy-dsl', tag: 'Quant', blurb: 'Custom DSL + recursive-descent parser + compiler. Strategies as plain text.' },
  { name: 'quant-research-platform', tag: 'Platform', blurb: 'Flagship: strategy plugins, walk-forward backtest, paper trading, FastAPI, Streamlit, Docker.' },
];

const TIMELINE = [
  { year: '2024', title: 'Started at Universitas Indonesia', body: 'Computer Engineering. First year exploring CS fundamentals, Python, and Linux.' },
  { year: '2025', title: 'Joined ACC Starship (Astra Sedaya Finance)', body: 'Built monitoring platform, ~70% manual work automated. Strategy + QA + execution.' },
  { year: '2025', title: 'Quant pivot', body: 'Built Kelly+Vol engine, Pluang book overlay, 10 quant repos, nightly reports.' },
  { year: '2026', title: 'Where I am now', body: 'Targeting investment analyst / algo trading roles. Pushing this portfolio to next level.' },
];

// ============================================================================// HOOKS
// ============================================================================
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-reveal]');
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.15 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

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

// ============================================================================// HEADER (vertical, no full hero takeover)
// ============================================================================
function Header() {
  return (
    <header className="header">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="logo">JR</a>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer" className="nav-icon" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

// ============================================================================// INTRO (top, name + role + counters + portrait card)
// ============================================================================
function Intro() {
  const repos = useCount(10);
  const tests = useCount(150);
  const intern = useCount(3);
  const ref = useReveal();
  return (
    <section id="top" ref={ref} className="intro pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <p data-reveal className="reveal eyebrow">Joshua Riangkamang</p>
        <h1 data-reveal className="reveal title">
          Building tools for<br />
          <span className="text-accent">systematic traders</span>.
        </h1>
        <p data-reveal className="reveal subtitle">
          Computer Engineering at Universitas Indonesia, interning at Astra Sedaya Finance.
          I ship quant research tools, trading infrastructure, and the occasional photo essay.
        </p>

        {/* BENTO GRID: 12-col, asymmetric */}
        <div className="bento mt-12">
          {/* Portrait card — wide */}
          <div data-reveal className="reveal bento-portrait">
            <img src="/img/portrait.jpg" alt="Joshua Riangkamang" />
            <div className="portrait-overlay">
              <div className="portrait-meta">
                <span className="status-dot" />
                Available for internships
              </div>
            </div>
          </div>

          {/* Stats card — counter */}
          <div data-reveal className="reveal bento-stat">
            <div className="stat-num">{repos}<span className="text-faint">+</span></div>
            <div className="stat-label">Public repos</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: '100%' }} />
            </div>
          </div>

          {/* Tests counter */}
          <div data-reveal className="reveal bento-stat">
            <div className="stat-num">{tests}<span className="text-faint">+</span></div>
            <div className="stat-label">Tests passing</div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: '85%' }} />
            </div>
          </div>

          {/* Status card — quote */}
          <div data-reveal className="reveal bento-quote">
            <Quote className="w-5 h-5 text-faint mb-2" />
            <p className="text-sm leading-relaxed">
              "What gets measured gets managed."
            </p>
            <p className="text-xs text-faint mt-1">— Peter Drucker</p>
          </div>

          {/* Now playing / status */}
          <div data-reveal className="reveal bento-status">
            <div className="flex items-center gap-2 text-xs text-faint mb-2">
              <span className="status-dot" /> Currently
            </div>
            <p className="text-sm">Pushing Vector Financial Planner to v1.0</p>
            <p className="text-xs text-faint mt-1">Flutter · shared_preferences · Cupertino</p>
          </div>

          {/* Location */}
          <div data-reveal className="reveal bento-loc">
            <MapPin className="w-4 h-4 text-accent mb-1" />
            <p className="text-sm">Jakarta, ID</p>
            <p className="text-xs text-faint">UTC+7 · WIB</p>
          </div>

          {/* Internship counter */}
          <div data-reveal className="reveal bento-stat bento-stat-wide">
            <div className="flex items-center justify-between">
              <div>
                <div className="stat-num">{intern}</div>
                <div className="stat-label">Internships</div>
              </div>
              <Cpu className="w-8 h-8 text-faint" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================// WORK (bento grid of projects)
// ============================================================================
function Work({ projects }: { projects: typeof PROJECTS }) {
  const ref = useReveal();
  return (
    <section id="work" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head">
          <p data-reveal className="reveal eyebrow">— 02</p>
          <h2 data-reveal className="reveal section-title">Selected work</h2>
          <p data-reveal className="reveal section-sub">
            10 open-source projects. Each shipped with tests, docs, and a real use case.
          </p>
        </div>

        <div className="bento bento-projects">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={`https://github.com/JoshRiang/${p.name}`}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className={`reveal bento-project ${i === 0 ? 'bento-project-feature' : ''}`}
            >
              <div className="flex items-start justify-between mb-3">
                <Code2 className="w-5 h-5 text-faint" />
                <ArrowUpRight className="w-4 h-4 text-faint" />
              </div>
              <div className="text-xs font-mono text-faint mb-1">{p.tag}</div>
              <div className="font-semibold text-base mb-2">{p.name}</div>
              <p className="text-xs text-faint leading-relaxed flex-1">{p.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================// ABOUT
// ============================================================================
function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head">
          <p data-reveal className="reveal eyebrow">— 01</p>
          <h2 data-reveal className="reveal section-title">About</h2>
        </div>

        <div className="bento">
          <div data-reveal className="reveal bento-about-text">
            <p className="text-lg leading-relaxed mb-4">
              <span className="text-fg font-medium">Quantitative Researcher & Software Engineer</span> based in Jakarta.
              I build research infrastructure and trading systems that close the gap between
              academic finance and shipping production code.
            </p>
            <p className="text-fg-mute leading-relaxed mb-4">
              My work spans market-data backtesters, regime-detection models, Kelly-based position
              sizing, and event-driven execution frameworks. Outside of finance, I shoot street
              photography and write about the Indonesian macro environment.
            </p>
            <p className="text-fg-mute leading-relaxed">
              <span className="text-fg font-medium">Targeting</span>: investment analyst or algo trading roles.
            </p>
          </div>

          <div data-reveal className="reveal bento-stack">
            <h3 className="text-xs font-mono text-faint mb-3 uppercase tracking-widest">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'pandas', 'numpy', 'statsmodels', 'FastAPI', 'Streamlit', 'Flutter', 'Dart', 'PostgreSQL', 'Parquet', 'TypeScript', 'Next.js', 'Tailwind', 'Docker'].map(s => (
                <span key={s} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-fg-mute">{s}</span>
              ))}
            </div>
          </div>

          <div data-reveal className="reveal bento-quote-2">
            <Sparkles className="w-4 h-4 text-accent mb-2" />
            <p className="text-sm text-fg-mute italic leading-relaxed">
              "I don't believe in magic. I believe in compounding: small reliable systems, iterated
              daily, that get sharper over time."
            </p>
            <p className="text-xs text-faint mt-2">— me, on a slow Tuesday</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================// TIMELINE
// ============================================================================
function Timeline() {
  const ref = useReveal();
  return (
    <section id="timeline" ref={ref} className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head">
          <p data-reveal className="reveal eyebrow">— 03</p>
          <h2 data-reveal className="reveal section-title">Timeline</h2>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-white/10" />
          {TIMELINE.map((item, i) => (
            <div key={i} data-reveal className="reveal relative pl-8 pb-10 last:pb-0">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-accent" />
              <div className="text-xs font-mono text-accent mb-1">{item.year}</div>
              <div className="font-semibold mb-1">{item.title}</div>
              <p className="text-sm text-fg-mute">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================// PHOTOGRAPHY
// ============================================================================
function Gallery() {
  const ref = useReveal();
  const [photos, setPhotos] = useState<{src: string, title: string, alt: string}[] | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  useEffect(() => {
    fetch('/photos/manifest.json').then(r => r.ok ? r.json() : { photos: [] }).then(d => setPhotos(d.photos || []));
  }, []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight' && photos) setLightboxIdx((lightboxIdx + 1) % photos.length);
      if (e.key === 'ArrowLeft' && photos) setLightboxIdx((lightboxIdx - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [lightboxIdx, photos]);

  return (
    <section id="gallery" ref={ref} className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head">
          <p data-reveal className="reveal eyebrow">— 04</p>
          <h2 data-reveal className="reveal section-title">Photography</h2>
          <p data-reveal className="reveal section-sub">
            Street, architecture, and quiet moments. Mostly shot on a Fuji X-T30, around Jakarta.
          </p>
        </div>

        {photos && photos.length > 0 && (
          <div className="bento bento-photos">
            {photos.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setLightboxIdx(i)}
                data-reveal
                className={`reveal bento-photo ${i === 0 ? 'bento-photo-feature' : ''}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
                {p.title && <div className="photo-title">{p.title}</div>}
              </button>
            ))}
          </div>
        )}

        {lightboxIdx !== null && photos && (
          <div className="lightbox" onClick={() => setLightboxIdx(null)}>
            <button className="lightbox-btn lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + photos.length) % photos.length); }} aria-label="Previous">
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <img src={photos[lightboxIdx].src} alt={photos[lightboxIdx].alt} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
            <button className="lightbox-btn lightbox-next" onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % photos.length); }} aria-label="Next">
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="lightbox-counter">{lightboxIdx + 1} / {photos.length}</div>
            <div className="lightbox-caption">{photos[lightboxIdx].title}</div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================================================// CONTACT
// ============================================================================
function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head">
          <p className="eyebrow">— 05</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub">
            Open to internships, full-time roles, and interesting collaborations.
          </p>
        </div>

        <div className="bento bento-contact">
          <a href="mailto:joshuariangkamang@gmail.com" className="contact-card contact-primary">
            <Mail className="w-5 h-5" />
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">joshuariangkamang@gmail.com</div>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>
          <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Github className="w-5 h-5" />
            <div>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">github.com/JoshRiang</div>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>
          <a href="https://linkedin.com/in/joshua-riangkamang" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Linkedin className="w-5 h-5" />
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">joshua-riangkamang</div>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>
          <a href="https://t.me/JoshRiang" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Send className="w-5 h-5" />
            <div>
              <div className="contact-label">Telegram</div>
              <div className="contact-value">@JoshRiang</div>
            </div>
            <ArrowUpRight className="contact-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-6">
        <p>© 2026 Joshua Riangkamang. Built with discipline, deployed to the world.</p>
      </div>
    </footer>
  );
}

// ============================================================================// PAGE
// ============================================================================
export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Timeline />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
