'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Github, Linkedin, Mail, Send, ArrowUpRight, Code2, Camera, X, ChevronLeft, ChevronRight,
} from 'lucide-react';

// ============================================================================
// Hero
// ============================================================================
function Hero() {
  const [counts, setCounts] = useState({ repos: 0, tests: 0, intern: 0 });
  useEffect(() => {
    const targets = { repos: 10, tests: 100, intern: 3 };
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCounts({
        repos: Math.round(eased * targets.repos),
        tests: Math.round(eased * targets.tests),
        intern: Math.round(eased * targets.intern),
      });
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[1fr,auto] gap-8 md:gap-12 items-center">
          <div>
            <p className="text-xs font-mono text-white/40 mb-3 tracking-widest">HELLO, I'M</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              Joshua<br />
              <span className="gradient-text">Riangkamang</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium mb-2">
              Quantitative Researcher · Software Engineer · Photographer
            </p>
            <p className="text-base text-white/50 max-w-md mb-8">
              Building systematic trading systems, risk models, and the occasional photo essay from Jakarta.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#projects" className="px-5 py-2.5 rounded-lg bg-blue-500 text-black font-semibold text-sm hover:bg-blue-400 transition flex items-center gap-2">
                View Projects <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg border border-white/15 text-white font-semibold text-sm hover:border-white/30 hover:bg-white/5 transition">
                Get in Touch
              </a>
            </div>
            <div className="flex gap-10">
              <Stat n={counts.repos} label="Public Repos" />
              <Stat n={counts.tests} label="Tests" />
              <Stat n={counts.intern} label="Internships" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden glass rotate-3 hover:rotate-0 transition duration-500">
              <img src="/img/portrait.jpg" alt="Joshua Riangkamang" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold gradient-text">{n}+</div>
      <div className="text-xs text-white/40 font-mono mt-1">{label}</div>
    </div>
  );
}

// ============================================================================
// About
// ============================================================================
function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="01" title="About" />
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-12">
          <div className="space-y-5 text-white/70 text-base md:text-lg leading-relaxed">
            <p className="text-xl text-white font-medium leading-snug">
              Computer Engineering student at the University of Indonesia, transitioning into quantitative finance and algorithmic trading.
            </p>
            <p>
              I build research infrastructure and trading systems that close the gap between academic finance and shipping production code. My work spans market-data backtesters, regime-detection models, Kelly-based position sizing, and event-driven execution frameworks.
            </p>
            <p>
              Outside of finance, I shoot street photography and write about the Indonesian macro environment.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-xs font-mono text-white/40 tracking-widest uppercase mb-3">Currently</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><span className="text-white font-semibold">Intern ·</span> Astra Sedaya Finance (ACC) — Starship Batch 23</li>
                <li><span className="text-white font-semibold">Building ·</span> Quant research platform + trading infra</li>
                <li><span className="text-white font-semibold">Targeting ·</span> Investment analyst / algo trading roles</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-mono text-white/40 tracking-widest uppercase mb-3">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'pandas', 'numpy', 'FastAPI', 'Streamlit', 'Flutter', 'PostgreSQL', 'Parquet'].map(s => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/70">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Projects
// ============================================================================
const PROJECT_BLURB: Record<string, string> = {
  'backtest-harness': 'Walk-forward backtest engine with Sharpe, Sortino, Calmar, drawdown, and parameter sweep.',
  'kelly-sizer': 'Position sizing from edge + vol. Full Kelly, fractional Kelly, vol targeting.',
  'portfolio-risk-dashboard': 'FastAPI service for VaR, CVaR, correlation, sector exposure, and stress scenarios.',
  'pairs-trader': 'Engle-Granger cointegration, half-life mean reversion, z-score backtester.',
  'regime-detector': '3-state Gaussian HMM + GARCH(1,1) to classify volatility regimes and forecast next-day vol.',
  'factor-research': 'Momentum, value, quality, low-vol factor backtests with decile spreads and Spearman IC.',
  'market-data-store': 'Parquet time-series store partitioned by ticker/year, with deterministic replay engine.',
  'trading-bot': 'Broker-agnostic execution engine with order state machine, kill switch, structlog JSON events.',
  'strategy-dsl': 'Custom DSL + recursive-descent parser + compiler. Strategies as plain text.',
  'quant-research-platform': 'Flagship: strategy plugins, walk-forward backtest, paper trading, FastAPI, Streamlit, Docker.',
};

function Projects() {
  const [repos, setRepos] = useState<any[] | null>(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    fetch('https://api.github.com/users/JoshRiang/repos?per_page=100&sort=updated')
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then((all: any[]) => {
        const targets = Object.keys(PROJECT_BLURB);
        setRepos(all.filter(r => targets.includes(r.name)).sort((a, b) => targets.indexOf(a.name) - targets.indexOf(b.name)));
      })
      .catch(() => setErr(true));
  }, []);
  return (
    <section id="projects" className="py-20 md:py-32 border-t border-white/5 bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="02" title="Projects" subtitle="A curated portfolio of quantitative and engineering work. All open-source on GitHub." />
        {repos === null && !err && <SkeletonGrid />}
        {err && <p className="text-white/50">Could not load projects. Visit <a className="text-blue-400" href="https://github.com/JoshRiang">GitHub</a> directly.</p>}
        {repos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((r) => (
              <a key={r.id} href={r.html_url} target="_blank" rel="noopener noreferrer"
                 className="group glass rounded-2xl p-5 flex flex-col gap-3 hover:border-white/20 transition">
                <div className="flex items-start justify-between gap-3">
                  <Code2 className="w-5 h-5 text-white/60 group-hover:text-blue-400 transition flex-shrink-0" />
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/50">{r.language || 'Code'}</span>
                </div>
                <h3 className="text-base font-semibold text-white">{r.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed flex-1">{PROJECT_BLURB[r.name] || r.description || ''}</p>
                <div className="flex items-center justify-between text-xs text-white/40 font-mono pt-3 border-t border-white/5">
                  <span>★ {r.stargazers_count}</span>
                  <span className="text-blue-400 group-hover:underline">View →</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="glass rounded-2xl p-5 h-40 animate-pulse" />
      ))}
    </div>
  );
}

// ============================================================================
// Photography
// ============================================================================
function Photography() {
  const [photos, setPhotos] = useState<{ src: string; title: string; alt: string }[] | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  useEffect(() => {
    fetch('/photos/manifest.json').then(r => r.ok ? r.json() : { photos: [] }).then(d => setPhotos(d.photos || []));
  }, []);
  return (
    <section id="photography" className="py-20 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="03" title="Photography" subtitle="Street, architecture, and quiet moments. Mostly shot on a Fuji X-T30." />
        {photos === null && <SkeletonGrid />}
        {photos && photos.length === 0 && (
          <div className="glass rounded-2xl p-8 text-center text-white/50">No photos yet.</div>
        )}
        {photos && photos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {photos.map((p, i) => (
              <button key={p.src} onClick={() => setLightboxIdx(i)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl glass">
                <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                {p.title && (
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                    {p.title}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      {lightboxIdx !== null && photos && (
        <Lightbox photos={photos} index={lightboxIdx} onClose={() => setLightboxIdx(null)} onNav={(d) => setLightboxIdx((lightboxIdx + d + photos.length) % photos.length)} />
      )}
    </section>
  );
}

function Lightbox({ photos, index, onClose, onNav }: { photos: { src: string; title: string }[]; index: number; onClose: () => void; onNav: (d: number) => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNav(-1);
      if (e.key === 'ArrowRight') onNav(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [onClose, onNav]);
  const photo = photos[index];
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Close">
        <X className="w-5 h-5" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNav(-1); }} className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Previous">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onNav(1); }} className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Next">
        <ChevronRight className="w-6 h-6" />
      </button>
      <img src={photo.src} alt={photo.title} className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
      {photo.title && <div className="absolute bottom-6 text-white text-sm font-medium">{photo.title} · {index + 1}/{photos.length}</div>}
    </div>
  );
}

// ============================================================================
// Contact
// ============================================================================
function Contact() {
  const items = [
    { icon: Mail, label: 'Email', value: 'joshuariangkamang@gmail.com', href: 'mailto:joshuariangkamang@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/JoshRiang', href: 'https://github.com/JoshRiang' },
    { icon: Linkedin, label: 'LinkedIn', value: 'joshua-riangkamang', href: 'https://linkedin.com/in/joshua-riangkamang' },
    { icon: Send, label: 'Telegram', value: '@JoshRiang', href: 'https://t.me/JoshRiang' },
  ];
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-white/5 bg-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle eyebrow="04" title="Contact" subtitle="Open to internships, full-time roles, and interesting collaborations." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
               className="group glass rounded-2xl p-5 hover:border-blue-400/50 transition">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/15 to-violet-500/15 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                <Icon className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-[10px] font-mono text-white/40 tracking-widest uppercase mb-1">{label}</div>
              <div className="text-sm text-white font-medium truncate">{value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 text-center text-xs text-white/30">
      <p>© 2026 Joshua Riangkamang. Built with discipline, deployed to the world.</p>
    </footer>
  );
}

// ============================================================================
// Shared
// ============================================================================
function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-mono text-blue-400 mb-3 tracking-widest">— {eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-white/50 max-w-xl">{subtitle}</p>}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#photography', label: 'Photography' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-40 glass">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg gradient-text">JR</a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="text-sm text-white/60 hover:text-white transition">{l.label}</a></li>
          ))}
          <li>
            <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition">
              <Github className="w-4 h-4" />
            </a>
          </li>
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-3">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block text-sm text-white/70 hover:text-white">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

// ============================================================================
// Page
// ============================================================================
export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
    </main>
  );
}
