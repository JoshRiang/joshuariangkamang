import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joshua Riangkamang — software engineer',
  description:
    'Engineering undergrad in Indonesia building open-source software: quant research tools, on-device AI, mobile apps, and hardware hacks.',
};

/* Featured index: one strong pick per area, not one area. */
const WORK = [
  {
    name: 'quant-research-platform',
    desc: 'End-to-end backtest, paper-trade and dashboard platform. FastAPI + Streamlit, shipped in Docker.',
    meta: 'Python · 2026',
  },
  {
    name: 'offline-android-ai',
    desc: 'Chat with small language models fully on-device. Downloads once, then works with no connection.',
    meta: 'Kotlin · 2026',
  },
  {
    name: 'emergency-community-response-911',
    desc: 'One-tap SOS, incident reports and geospatial alerts on offline maps. Built with a team for a software-engineering course.',
    meta: 'Flutter · 2026',
  },
  {
    name: 'agent-orchestrator',
    desc: 'Task router that drafts several reasoning paths, scores them, and logs every decision to SQLite.',
    meta: 'Python · 2026',
  },
  {
    name: 'Press',
    desc: 'Gym logger with anatomical muscle mapping. Open source, live backend.',
    meta: 'TypeScript · 2026',
  },
  {
    name: 'smartalarm',
    desc: 'Alarm that wakes you in light sleep via movement sensing — then an ESP32 motor opens the curtains.',
    meta: 'JS / C++ · 2025',
  },
  {
    name: 'FearJosh',
    desc: 'Narrative psychological-horror game set in a sealed school. Object-oriented course final.',
    meta: 'Java · 2025',
  },
  {
    name: 'EMAS3-Calendar-Fetcher',
    desc: 'Pulls coursework deadlines into Google Keep automatically. Live.',
    meta: 'Python · 2026',
  },
];

/* The quant depth, kept as a compact series instead of eight rows. */
const QUANT_SERIES = [
  'backtest-harness',
  'kelly-sizer',
  'market-data-store',
  'factor-research',
  'regime-detector',
  'strategy-dsl',
  'pairs-trader',
  'trading-bot',
  'portfolio-risk-dashboard',
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
              Bogor / Jakarta, Indonesia<span className="dot">·</span>UTC+7
            </p>
            <h1>
              Joshua Riangkamang builds <em>software that measures things.</em>
            </h1>
            <p className="lede">
              I&apos;m an engineering undergrad at{' '}
              <a href="https://www.ui.ac.id" target="_blank" rel="noopener noreferrer">
                Universitas Indonesia
              </a>
              . I like instruments: gym loggers, sleep alarms, parking radars,
              backtest engines — anything that turns the world into numbers you
              can argue with. More of it is on{' '}
              <a href="https://github.com/JoshRiang" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
            <p className="lede">
              Currently interning at{' '}
              <a href="https://www.acc.co.id" target="_blank" rel="noopener noreferrer">
                Astra Sedaya Finance
              </a>{' '}
              (Starship Batch 23). Open to internships and junior engineering
              roles.
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
            Eight things I&apos;d demo in an interview — one per obsession.
            Everything is open source; links go straight to the code.
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
          <div className="series">
            <strong>Plus a nine-repo quant research series</strong> — walk-forward
            backtests, Kelly sizing, factor library, regime detection, Parquet
            data store, a strategy DSL, pairs trading, risk dashboard, execution
            bot. All tested, documented, MIT:{' '}
            {QUANT_SERIES.map((n, i) => (
              <span key={n}>
                <a href={`https://github.com/JoshRiang/${n}`} target="_blank" rel="noopener noreferrer">
                  {n}
                </a>
                {i < QUANT_SERIES.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
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
                  reports, regime detection, factor research — the series above.
                </p>
              </div>
            </li>
            <li>
              <span className="job-date">2024 — now</span>
              <div>
                <div className="job-role">
                  Undergraduate <span className="job-co">· Universitas Indonesia</span>
                </div>
                <p className="job-desc">
                  Engineering, 2024 cohort. Coursework so far spans digital
                  design (VHDL), OOP, databases, and software engineering —
                  several repos above started as coursework.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* ---------- about (placeholder — fill in your own bio) ---------- */}
        <section className="section" id="about">
          <div className="section-head">
            <span className="section-num">03</span>
            <span className="section-label">About</span>
          </div>
          {/*
            ABOUT — PLACEHOLDER.
            Replace the three boxes below with your own bio (2–4 sentences
            total is plenty), then delete this comment. Suggested shape:
            1. who you are in one line, 2. what you're doing now,
            3. what you want next / an invitation to talk.
          */}
          <div className="about-text">
            <p className="ph">
              [Who you are in one line — e.g. what you study, where, and the
              kind of building you enjoy most.]
            </p>
            <p className="ph">
              [What you&apos;re doing now — internship, side interests,
              something you&apos;re learning that excites you.]
            </p>
            <p className="ph">
              [What you want next — roles you&apos;re open to, or just an
              invitation to get in touch.]
            </p>
          </div>
          <div className="stackline">
            <strong>Stack:</strong> Python · Kotlin · Dart / Flutter · TypeScript ·
            Java · C++ · VHDL · AVR Assembly · FastAPI · pandas · Parquet ·
            Docker · Linux · Git
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
              Open to internships, junior engineering roles, and collaborations
              on open-source projects. The fastest way to reach me is email —
              I reply within a day or two.
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
