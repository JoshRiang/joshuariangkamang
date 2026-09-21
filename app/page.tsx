import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joshua Riangkamang — quant researcher & software engineer',
  description:
    'Student in Indonesia building open-source tools for systematic trading: backtest engines, position sizing, market-data infrastructure.',
};

const WORK = [
  {
    name: 'quant-research-platform',
    desc: 'Strategy plugins, walk-forward backtests, paper trading. FastAPI + Streamlit, shipped in Docker.',
    meta: 'Python · 2026',
  },
  {
    name: 'backtest-harness',
    desc: 'Walk-forward engine reporting Sharpe, Sortino, Calmar and max drawdown, with parameter sweeps.',
    meta: 'Python · 2026',
  },
  {
    name: 'factor-research',
    desc: 'Momentum / value / quality / low-vol decile backtests with Spearman IC on a 50-ticker US universe.',
    meta: 'Python · 2026',
  },
  {
    name: 'kelly-sizer',
    desc: 'Full and fractional Kelly with volatility targeting — sizing from edge instead of gut feel.',
    meta: 'Python · 2026',
  },
  {
    name: 'regime-detector',
    desc: '3-state Gaussian HMM plus GARCH(1,1) to classify and forecast low / mid / high volatility regimes.',
    meta: 'Python · 2026',
  },
  {
    name: 'market-data-store',
    desc: 'Parquet time-series store with a deterministic replay engine so backtests rerun bit-for-bit.',
    meta: 'Python · 2026',
  },
  {
    name: 'strategy-dsl',
    desc: 'Small language for writing strategies as text files — own parser and compiler, no YAML soup.',
    meta: 'Python · 2026',
  },
  {
    name: 'portfolio-risk-dashboard',
    desc: 'VaR, CVaR, correlation, sector exposure and stress scenarios behind a FastAPI service.',
    meta: 'Python · 2026',
  },
];

const PHOTOS = [
  { src: 'photos/img_b88fd0d5655e.jpg', title: 'Three boys, golden hour', note: 'Jakarta street' },
  { src: 'photos/img_d29ca888a1f9.jpg', title: 'Satellite birds', note: 'Starlink dish, dusk' },
  { src: 'photos/img_fceafc429c12.jpg', title: 'White cat', note: 'Close-up' },
  { src: 'photos/img_94d7faecb1d1.jpg', title: 'Puffed up', note: 'Sparrow at dusk' },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="mark" href="#top">joshriang</a>
          <nav>
            <a href="#work">work</a>
            <a href="#experience">experience</a>
            <a href="#photos">photos</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>

      <main className="wrap" id="top">
        {/* ---------- hero ---------- */}
        <section className="hero">
          <div>
            <p className="kicker">
              Jakarta, Indonesia<span className="dot">·</span>UTC+7
            </p>
            <h1>
              Joshua Riangkamang builds <em>backtesting &amp; risk tooling</em> for
              systematic traders.
            </h1>
            <p className="lede">
              I&apos;m a student in Indonesia and an intern at{' '}
              <a href="https://www.acc.co.id" target="_blank" rel="noopener noreferrer">
                Astra Sedaya Finance
              </a>
              . I write open-source quant infrastructure in Python — walk-forward
              engines, position sizers, a Parquet market-data store — each with
              tests and docs, all on{' '}
              <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
            <p className="lede">
              Currently looking for investment-analyst or junior algo-trading roles.
              Previously ran nightly walk-forward reports on a live NVDA / AVGO /
              TSM / GLD book.
            </p>
            <div className="hero-meta">
              <a href="mailto:joshuariangkamang@gmail.com">joshuariangkamang@gmail.com</a>
              <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer">github</a>
              <a href="https://linkedin.com/in/joshua-riangkamang" target="_blank" rel="noopener noreferrer">linkedin</a>
            </div>
          </div>
          <figure className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="img/portrait.jpg" alt="Portrait of Joshua Riangkamang" />
            <figcaption>Josh, 2026. Fuji X-T30, probably.</figcaption>
          </figure>
        </section>

        {/* ---------- work ---------- */}
        <section className="section" id="work">
          <div className="section-head">
            <span className="section-num">01</span>
            <span className="section-label">Selected work</span>
          </div>
          <p className="section-note">
            Eight repos I&apos;d defend in an interview. Everything is tested,
            documented, and MIT-licensed — links go straight to the code.
          </p>
          <ol className="worklist">
            {WORK.map((w, i) => (
              <li key={w.name}>
                <a
                  href={`https://github.com/JoshRiang/${w.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-idx">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="w-name">{w.name}</span>
                    <span className="w-desc">{w.desc}</span>
                  </span>
                  <span className="w-meta">
                    {w.meta} <span className="w-arrow">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- experience ---------- */}
        <section className="section" id="experience">
          <div className="section-head">
            <span className="section-num">02</span>
            <span className="section-label">Experience</span>
          </div>
          <ul className="jobs">
            <li>
              <span className="job-date">2025 — now</span>
              <div>
                <div className="job-role">
                  Intern <span className="job-co">· Astra Sedaya Finance (ACC), Starship Batch 23</span>
                </div>
                <p className="job-desc">
                  Built an internal monitoring platform that automated roughly 70%
                  of a manual workflow, and contributed to strategy and QA
                  workflows on the team.
                </p>
              </div>
            </li>
            <li>
              <span className="job-date">2025 — now</span>
              <div>
                <div className="job-role">
                  Independent quant <span className="job-co">· self-directed</span>
                </div>
                <p className="job-desc">
                  Kelly + volatility-targeted risk engine on a live Pluang
                  portfolio (NVDA / AVGO / TSM / GLD). Nightly walk-forward
                  reports, regime detection, factor research — the repos above.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* ---------- about ---------- */}
        <section className="section" id="about">
          <div className="section-head">
            <span className="section-num">03</span>
            <span className="section-label">About</span>
          </div>
          <div className="about-text">
            <p>
              I got into markets through code, not finance classes: first a
              trading bot with a kill switch, then the uncomfortable question of
              whether any of it actually worked. That led to the backtest
              harness, the Kelly sizer, and everything downstream. I&apos;m
              skeptical of backtests by default — including my own — which is
              why the replay engine is deterministic and the reports run
              walk-forward.
            </p>
            <p>
              Outside quant work I&apos;ve shipped a Flutter emergency-response
              app and an offline on-device AI demo for Android. I also shoot
              street photography around Jakarta on a Fuji X-T30 — a few frames
              below.
            </p>
          </div>
          <div className="stackline">
            <strong>Stack:</strong> Python · pandas · FastAPI · Streamlit ·
            Parquet · PostgreSQL · Docker · TypeScript / Next.js · Flutter ·
            Linux · Git
          </div>
        </section>

        {/* ---------- photos ---------- */}
        <section className="section" id="photos">
          <div className="section-head">
            <span className="section-num">04</span>
            <span className="section-label">Photos</span>
          </div>
          <p className="section-note">
            Street, birds, and quiet moments. Full set on request — these four
            are the keepers.
          </p>
          <div className="photogrid">
            {PHOTOS.map((p) => (
              <figure key={p.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.title} loading="lazy" />
                <figcaption>
                  <span>{p.title}</span>
                  <span>{p.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- contact ---------- */}
        <section className="section" id="contact">
          <div className="section-head">
            <span className="section-num">05</span>
            <span className="section-label">Contact</span>
          </div>
          <div className="contact-box">
            <p>
              Open to internships, junior analyst roles, and collaborations on
              open-source trading infrastructure. The fastest way to reach me is
              email — I reply within a day or two.
            </p>
            <a className="email-big" href="mailto:joshuariangkamang@gmail.com">
              joshuariangkamang@gmail.com
            </a>
            <div className="contact-links">
              <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer">github ↗</a>
              <a href="https://linkedin.com/in/joshua-riangkamang" target="_blank" rel="noopener noreferrer">linkedin ↗</a>
              <a href="https://t.me/JoshRiang" target="_blank" rel="noopener noreferrer">telegram ↗</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 Joshua Riangkamang</span>
          <span>Set in Palatino &amp; system sans. No trackers, no cookies.</span>
        </footer>
      </main>
    </>
  );
}
