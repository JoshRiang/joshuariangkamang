// Portfolio site — main.js
// Loads GitHub repos, photo gallery, animated counters, lightbox

const GITHUB_USER = 'JoshRiang';

// ===== Animated counters =====
function animateCounters() {
    const counters = document.querySelectorAll('.meta-num');
    counters.forEach(c => {
        const target = parseInt(c.dataset.target, 10);
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            c.textContent = Math.round(eased * target);
            if (t < 1) requestAnimationFrame(tick);
            else c.textContent = target;
        }
        requestAnimationFrame(tick);
    });
}

// ===== Load GitHub repos for Projects section =====
const PROJECT_BLURB = {
    'backtest-harness': 'Walk-forward backtest engine with Sharpe, Sortino, Calmar, drawdown, and parameter sweep. Forces out-of-sample validation.',
    'kelly-sizer': 'Position sizing from edge + vol. Full Kelly, fractional Kelly, vol targeting, multi-asset correlation adjustment.',
    'portfolio-risk-dashboard': 'FastAPI service for VaR, CVaR, correlation, sector exposure, and stress scenarios.',
    'pairs-trader': 'Engle-Granger cointegration, half-life mean reversion, z-score backtester. Logs every trade with Sharpe.',
    'regime-detector': '3-state Gaussian HMM + GARCH(1,1) to classify low/mid/high volatility regimes and forecast next-day vol.',
    'factor-research': 'Momentum, value, quality, low-vol factor backtests with decile spreads and Spearman information coefficient.',
    'market-data-store': 'Parquet time-series store partitioned by ticker/year, with deterministic replay engine for strategies.',
    'trading-bot': 'Broker-agnostic execution engine with order state machine, kill switch, structlog JSON events.',
    'strategy-dsl': 'Custom DSL + recursive-descent parser + compiler. Write strategies in plain text, backtest on any OHLCV data.',
    'quant-research-platform': 'Flagship: strategy plugins, walk-forward backtest, paper trading, FastAPI, Streamlit dashboard, Docker.',
};

async function loadProjects() {
    const grid = document.getElementById('projects-grid');
    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
        if (!res.ok) throw new Error('GitHub API error');
        const repos = await res.json();
        const targets = Object.keys(PROJECT_BLURB);
        const filtered = repos.filter(r => targets.includes(r.name));
        if (filtered.length === 0) {
            grid.innerHTML = '<div class="loading">No portfolio projects found on GitHub.</div>';
            return;
        }
        grid.innerHTML = filtered.map(r => {
            const blurb = PROJECT_BLURB[r.name] || (r.description || '');
            const lang = r.language || 'Code';
            return `
                <article class="project-card">
                    <div class="project-head">
                        <h3 class="project-title">${r.name}</h3>
                        <span class="project-lang">${lang}</span>
                    </div>
                    <p class="project-desc">${blurb}</p>
                    <div class="project-meta">
                        <span>★ ${r.stargazers_count}</span>
                        <span>⑂ ${r.forks_count}</span>
                        <a href="${r.html_url}" target="_blank" rel="noopener" class="project-link">View →</a>
                    </div>
                </article>
            `;
        }).join('');
    } catch (e) {
        grid.innerHTML = `<div class="loading">Could not load projects. Visit <a href="https://github.com/${GITHUB_USER}" style="color: var(--accent)">GitHub</a> directly.</div>`;
        console.error(e);
    }
}

// ===== Photo gallery =====
async function loadGallery() {
    const gallery = document.getElementById('photo-gallery');
    const note = document.getElementById('gallery-note');
    // Try manifest.json first (allows easy photo management)
    let photos = [];
    try {
        const res = await fetch('photos/manifest.json');
        if (res.ok) {
            const data = await res.json();
            photos = data.photos || [];
        }
    } catch (e) {}
    // Fallback: scan a few common names
    if (photos.length === 0) {
        const candidates = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg',
                          '01.webp', '02.webp', '03.webp', '01.png', '02.png'];
        for (const c of candidates) {
            photos.push({ src: `photos/${c}`, title: c.replace(/\.[^.]+$/, ''), alt: c });
        }
    }
    // Test if any photos actually exist
    let existing = [];
    for (const p of photos) {
        try {
            const r = await fetch(p.src, { method: 'HEAD' });
            if (r.ok) existing.push(p);
        } catch (e) {}
    }
    if (existing.length === 0) {
        gallery.innerHTML = `
            <div class="gallery-empty">
                <p style="margin-bottom: 12px;">Photography gallery is ready for your photos.</p>
                <p style="font-size: 14px;">Drop your photos into the <code>public/photos/</code> folder, then create <code>public/photos/manifest.json</code>:</p>
                <pre style="text-align: left; max-width: 540px; margin: 16px auto; background: var(--bg); padding: 16px; border-radius: 8px; font-size: 12px; color: var(--fg-dim);">
{
  "photos": [
    { "src": "photos/01.jpg", "title": "Street, Jakarta", "alt": "..." },
    { "src": "photos/02.jpg", "title": "Old Town", "alt": "..." }
  ]
}</pre>
            </div>
        `;
        note.textContent = '';
        return;
    }
    gallery.innerHTML = existing.map(p => `
        <div class="gallery-item" data-src="${p.src}" data-title="${p.title || ''}">
            <img src="${p.src}" alt="${p.alt || ''}" loading="lazy">
            ${p.title ? `<div class="overlay">${p.title}</div>` : ''}
        </div>
    `).join('');
    note.textContent = `${existing.length} photo${existing.length === 1 ? '' : 's'}. Shot on Fuji X-T30, mostly Jakarta.`;
    attachLightbox();
}

// ===== Lightbox =====
function attachLightbox() {
    let lb = document.querySelector('.lightbox');
    if (!lb) {
        lb = document.createElement('div');
        lb.className = 'lightbox';
        lb.innerHTML = '<img><div class="caption"></div>';
        document.body.appendChild(lb);
        lb.addEventListener('click', () => lb.classList.remove('active'));
    }
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            lb.querySelector('img').src = item.dataset.src;
            lb.querySelector('.caption').textContent = item.dataset.title || '';
            lb.classList.add('active');
        });
    });
}

// ===== Mobile menu toggle =====
function setupMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
            links.style.flexDirection = 'column';
            links.style.position = 'absolute';
            links.style.top = '64px';
            links.style.right = '24px';
            links.style.background = 'var(--bg-elev)';
            links.style.padding = '16px 24px';
            links.style.borderRadius = '12px';
            links.style.border = '1px solid var(--border)';
        });
    }
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    loadProjects();
    loadGallery();
    setupMenu();
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
});
