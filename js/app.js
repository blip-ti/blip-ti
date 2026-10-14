/**
 * LEGO Education WeDo 2.0 - Premium Interactive Catalog
 * Enhanced UI with zero emojis, modern vector icons, and optimized theme
 */

(function () {
  'use strict';

  // Vector SVG Icons System (100% emoji-free)
  const icons = {
    home: `<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    search: `<svg class="ui-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    close: `<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    book: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    code: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    download: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    eye: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    box: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 6.86-9-5a2 2 0 0 0-2 0l-9 5A2 2 0 0 0 1 8.6v6.8a2 2 0 0 0 1.07 1.76l9 5a2 2 0 0 0 2 0l9-5A2 2 0 0 0 23 15.4V8.6a2 2 0 0 0-1.27-1.74z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
    robot: `<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="3"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16.01"></line><line x1="16" y1="16" x2="16" y2="16.01"></line></svg>`,
    spark: `<svg class="ui-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    layers: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    gear: `<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    rocket: `<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4.5"></path><path d="M12 9V4s3.03.55 4.5 2"></path></svg>`,
    flask: `<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31L4.15 20.15A2 2 0 0 0 5.86 23h12.28a2 2 0 0 0 1.71-2.85L14 9.31V2"></path><line x1="8" y1="2" x2="16" y2="2"></line><line x1="6.5" y1="16" x2="17.5" y2="16"></line></svg>`,
    shield: `<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    target: `<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    arrowRight: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    arrowLeft: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    fullscreen: `<svg class="ui-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>`,
    brick: `<svg class="illustration-brick" viewBox="0 0 64 64" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="20" width="48" height="34" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2.5"/><rect x="15" y="11" width="13" height="10" rx="3" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/><rect x="36" y="11" width="13" height="10" rx="3" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/><circle cx="21" cy="37" r="4.5" fill="#e11d48" fill-opacity="0.25"/><circle cx="43" cy="37" r="4.5" fill="#f59e0b" fill-opacity="0.35"/></svg>`,
    warning: `<svg class="ui-icon" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    searchNotFound: `<svg class="ui-icon" viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#94a3b8" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`,
    story: `<svg class="ui-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
  };

  // Application State
  const state = {
    database: null,
    currentLevel: null,
    currentTab: 'instructions', // 'instructions' | 'programs'
    searchQuery: '',
    filterLevel: 'all',
    currentRobot: null,
    currentInstructionPage: 1,
    zoomLevel: 1.0,
    activeModal: null
  };

  // DOM Elements
  const appRoot = document.getElementById('appRoot');
  const mainNav = document.getElementById('mainNav');
  const headerLogoBtn = document.getElementById('headerLogoBtn');
  const programModal = document.getElementById('programModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalProgramTitle = document.getElementById('modalProgramTitle');
  const modalProgramSubtitle = document.getElementById('modalProgramSubtitle');
  const modalProgramBody = document.getElementById('modalProgramBody');

  // ==========================================
  // DATA LOADING
  // ==========================================
  async function loadDatabase() {
    try {
      if (window.DATABASE_DATA && window.DATABASE_DATA.robots) {
        state.database = window.DATABASE_DATA;
        console.log('Database loaded from window.DATABASE_DATA:', state.database.totalRobots, 'robots');
        handleRouting();
        return;
      }
      const response = await fetch('data/database.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      state.database = await response.json();
      console.log('Database loaded via fetch:', state.database.totalRobots, 'robots');
      handleRouting();
    } catch (err) {
      console.error('Failed to load database:', err);
      appRoot.innerHTML = `
        <div class="empty-state">
          <span class="empty-state-icon">${icons.warning}</span>
          <h3>Ошибка загрузки данных</h3>
          <p>Не удалось загрузить базу данных. Убедитесь, что файл <strong>data/database.js</strong> или <strong>data/database.json</strong> существует, и обновите страницу.</p>
        </div>
      `;
    }
  }

  // ==========================================
  // ROUTER
  // ==========================================
  function handleRouting() {
    if (!state.database) return;

    const hash = window.location.hash || '#home';
    const [route, param] = hash.split('/');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      const navTarget = link.getAttribute('data-nav');
      if (route === '#home' && navTarget === 'home') {
        link.classList.add('active');
      } else if (route === `#${navTarget}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (route === '#home' || route === '') {
      renderHomeView();
    } else if (route.startsWith('#level-')) {
      const levelId = route.replace('#', '');
      renderLevelView(levelId);
    } else if (route === '#robot' && param) {
      renderRobotDetailView(param);
    } else {
      renderHomeView();
    }
  }

  // ==========================================
  // HELPERS
  // ==========================================
  function getLevel(levelId) {
    return state.database.levels.find(l => l.id === levelId) || state.database.levels[0];
  }

  function getRobot(robotId) {
    return state.database.robots.find(r => r.id === robotId || r.slug === robotId);
  }

  function getSafeImg(imgPath) {
    if (!imgPath) {
      return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23f8fafc'/><text x='50%' y='50%' fill='%2394a3b8' font-family='sans-serif' font-size='15' font-weight='600' text-anchor='middle' dy='.3em'>Изображение модели</text></svg>`;
    }
    return encodeURI(imgPath);
  }

  function legoDotsHtml(rows, cols) {
    let dots = '';
    for (let i = 0; i < rows * cols; i++) {
      dots += '<div class="hero-dot"></div>';
    }
    return `<div class="hero-dots" style="grid-template-columns: repeat(${cols}, 1fr);">${dots}</div>`;
  }

  // ==========================================
  // VIEW 1: HOME VIEW
  // ==========================================
  function renderHomeView() {
    const isSearching = state.searchQuery.trim().length > 0 || state.filterLevel !== 'all';
    const db = state.database;

    let searchResults = [];
    if (isSearching) {
      const q = state.searchQuery.toLowerCase().trim();
      searchResults = db.robots.filter(robot => {
        const matchesQuery = !q || robot.name.toLowerCase().includes(q) ||
          (robot.program?.story && robot.program.story.toLowerCase().includes(q));
        const matchesLevel = state.filterLevel === 'all' || robot.levelId === state.filterLevel;
        return matchesQuery && matchesLevel;
      });
    }

    const levelsHtml = `
      <div class="levels-grid">
        ${db.levels.map((level, idx) => `
          <div class="level-card animate-fade-up animate-delay-${idx + 1}"
               style="--level-color: ${level.color}; --level-bg: ${level.accent};"
               onclick="window.location.hash='#${level.id}'"
               role="button"
               tabindex="0"
               aria-label="Открыть уровень: ${level.name}">
            <div class="level-card-header">
              <span class="level-badge">${level.tag}</span>
              <span class="level-number-badge">0${level.num}</span>
            </div>
            <h3 class="level-age">${level.name}</h3>
            <div class="level-tagline">Уровень ${level.num} сложности</div>
            <p class="level-description">${level.description}</p>
            <div class="level-footer">
              <span class="level-stat">${icons.box} ${level.modelsCount} моделей</span>
              <span class="btn-open-level">
                <span>Перейти к уровню</span>
                ${icons.arrowRight}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Totals
    const totalWithCode = db.robots.filter(r => r.program?.hasCode).length;
    const totalInstrPages = db.robots.reduce((acc, r) => acc + (r.instruction?.pages?.length || 0), 0);

    appRoot.innerHTML = `
      <!-- Hero Section (Premium Obsidian & Gold Glow) -->
      <section class="hero-section">
        ${legoDotsHtml(4, 6)}
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          <span class="hero-badge-icon">${icons.spark}</span>
          <span>LEGO Education WeDo 2.0 &bull; Авторский каталог</span>
        </div>
        <h2 class="hero-title">Каталог авторских материалов<br>по <span>робототехнике</span></h2>
        <p class="hero-desc">
          Интерактивная библиотека пошаговых инструкций и программ по 4 уровням сложности.
          От первых механических передач до самостоятельного программирования.
        </p>
        <div class="hero-stats">
          <div class="hero-stat-card">
            <div class="hero-stat-icon-wrap">${icons.robot}</div>
            <div class="hero-stat-info">
              <span class="hero-stat-number">${db.totalRobots}</span>
              <span class="hero-stat-label">Моделей роботов</span>
            </div>
          </div>
          <div class="hero-stat-card">
            <div class="hero-stat-icon-wrap">${icons.layers}</div>
            <div class="hero-stat-info">
              <span class="hero-stat-number">${db.levels.length}</span>
              <span class="hero-stat-label">Уровня сложности</span>
            </div>
          </div>
          <div class="hero-stat-card">
            <div class="hero-stat-icon-wrap">${icons.code}</div>
            <div class="hero-stat-info">
              <span class="hero-stat-number">${totalWithCode}</span>
              <span class="hero-stat-label">Программ с кодом</span>
            </div>
          </div>
          <div class="hero-stat-card">
            <div class="hero-stat-icon-wrap">${icons.book}</div>
            <div class="hero-stat-info">
              <span class="hero-stat-number">${totalInstrPages}</span>
              <span class="hero-stat-label">Страниц схем</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Search & Filters -->
      <section class="search-filter-card">
        <div class="search-input-wrapper">
          <span class="search-icon">${icons.search}</span>
          <input
            type="text"
            class="search-input"
            id="homeSearchInput"
            placeholder="Найти робота по названию (Паук, Бетмобиль, Квадрокоптер...)&hellip;"
            value="${escapeHtml(state.searchQuery)}"
            autocomplete="off"
          >
          ${state.searchQuery ? `<button class="search-clear-btn" id="homeSearchClear" aria-label="Очистить поиск">${icons.close}</button>` : ''}
        </div>

        <div class="filter-pills">
          <button class="filter-pill ${state.filterLevel === 'all' ? 'active' : ''}" data-filter="all">
            Все модели (${db.totalRobots})
          </button>
          ${db.levels.map(level => `
            <button class="filter-pill ${state.filterLevel === level.id ? 'active' : ''}" data-filter="${level.id}">
              <span class="pill-dot" style="background:${level.color};"></span>
              ${level.name} (${level.modelsCount})
            </button>
          `).join('')}
        </div>
      </section>

      <!-- Content Area -->
      ${isSearching ? `
        <div class="section-title-wrap">
          <div>
            <h3 class="section-title">Результаты поиска</h3>
            <p class="section-subtitle">Найдено моделей: <strong>${searchResults.length}</strong></p>
          </div>
          <button class="btn-secondary" id="resetSearchBtn" style="padding: 0.5rem 1.25rem;">
            ${icons.close} Сбросить
          </button>
        </div>
        ${searchResults.length > 0 ? `
          <div class="catalog-grid">
            ${searchResults.map(robot => renderRobotCard(robot)).join('')}
          </div>
        ` : `
          <div class="empty-state">
            <span class="empty-state-icon">${icons.searchNotFound}</span>
            <h3>Ничего не найдено</h3>
            <p>По запросу «${escapeHtml(state.searchQuery)}» моделей не найдено. Попробуйте изменить поисковый запрос.</p>
          </div>
        `}
      ` : `
        <div class="section-title-wrap animate-fade-up">
          <div>
            <h3 class="section-title">Уровни обучения</h3>
            <p class="section-subtitle">Выберите уровень сложности для перехода к инструкциям и программам</p>
          </div>
        </div>
        ${levelsHtml}
      `}
    `;

    // Event listeners
    const searchInput = document.getElementById('homeSearchInput');
    const searchClear = document.getElementById('homeSearchClear');
    const resetSearchBtn = document.getElementById('resetSearchBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderHomeView();
        const newInp = document.getElementById('homeSearchInput');
        if (newInp) {
          newInp.focus();
          newInp.setSelectionRange(newInp.value.length, newInp.value.length);
        }
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        state.searchQuery = '';
        renderHomeView();
      });
    }

    if (resetSearchBtn) {
      resetSearchBtn.addEventListener('click', () => {
        state.searchQuery = '';
        state.filterLevel = 'all';
        renderHomeView();
      });
    }

    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        state.filterLevel = pill.getAttribute('data-filter');
        renderHomeView();
      });
    });

    document.querySelectorAll('.level-card[tabindex]').forEach(card => {
      card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') card.click();
      });
    });
  }

  // ==========================================
  // ROBOT CARD RENDERER
  // ==========================================
  function renderRobotCard(robot) {
    const level = getLevel(robot.levelId);
    const coverUrl = getSafeImg(robot.coverImage);
    const totalPages = robot.instruction?.pages?.length || robot.instruction?.totalPages || 0;
    const hasCode = robot.program?.hasCode;
    const origFile = robot.instruction?.originalFile || '';
    const fileName = robot.instruction?.fileName || origFile.split('/').pop();

    return `
      <div class="robot-card" data-robot-id="${robot.id}">
        <div class="robot-card-image-wrap" onclick="window.location.hash='#robot/${robot.id}'">
          <span class="robot-number-pill">#${robot.topicNumber}</span>
          <span class="robot-level-pill" style="color: ${level.color};">
            <span class="level-indicator-dot" style="background:${level.color};"></span>
            ${level.name || robot.age}
          </span>
          <img src="${coverUrl}" alt="${escapeHtml(robot.name)}" class="robot-card-image" loading="lazy"
               onerror="this.src='${getSafeImg('')}'">
        </div>
        <div class="robot-card-body">
          <h4 class="robot-name" onclick="window.location.hash='#robot/${robot.id}'">${escapeHtml(robot.name)}</h4>
          <div class="robot-meta-tags">
            <span class="meta-tag has-steps">${icons.book} ${totalPages} стр.</span>
            ${hasCode ? `<span class="meta-tag has-code">${icons.code} Программа</span>` : ''}
          </div>
          <div class="robot-card-actions">
            <button class="btn-primary" onclick="window.location.hash='#robot/${robot.id}'">
              ${icons.book} Схема сборки
            </button>
            ${origFile ? `
              <button class="btn-secondary btn-icon-only"
                      onclick="window.downloadResource('${origFile}', '${escapeHtml(fileName)}')"
                      title="Скачать файл инструкции (${escapeHtml(fileName)})">
                ${icons.download}
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // PROGRAM CARD RENDERER
  // ==========================================
  function renderProgramCard(robot) {
    const level = getLevel(robot.levelId);
    const coverUrl = getSafeImg(robot.coverImage);
    const prog = robot.program;
    const firstCodeImg = prog.codeImages && prog.codeImages.length > 0 ? getSafeImg(prog.codeImages[0]) : '';

    return `
      <div class="program-card">
        <div class="program-card-preview" onclick="window.openProgramModal('${robot.id}')">
          <span class="program-badge">#${prog.topicNumber || robot.topicNumber}</span>
          ${firstCodeImg ? `
            <img src="${firstCodeImg}" alt="${escapeHtml(prog.programTitle || robot.name)}" class="program-code-img" loading="lazy">
          ` : `<div class="program-code-fallback">${icons.brick}</div>`}
        </div>
        <div class="robot-card-body">
          <div style="display:flex; align-items:center; gap:0.65rem; margin-bottom:0.5rem;">
            <img src="${coverUrl}" style="width:34px;height:34px;object-fit:contain;border-radius:8px;background:#f8fafc;padding:2px;border:1px solid #e2e8f0;" alt="">
            <h4 class="robot-name" style="margin-bottom:0;">${escapeHtml(robot.name)}</h4>
          </div>
          <div style="font-size:0.82rem;font-weight:700;color:#059669;margin-bottom:0.5rem;">
            ${escapeHtml(prog.programTitle || robot.name)}
          </div>
          <p class="program-story-snippet">
            ${escapeHtml(prog.story || prog.howItWorks || 'Схема программы с пошаговыми инструкциями выполнения.')}
          </p>
          <div class="robot-card-actions">
            <button class="btn-primary btn-program" onclick="window.openProgramModal('${robot.id}')">
              ${icons.eye} Открыть код
            </button>
            ${prog.originalFile ? `
              <button class="btn-secondary btn-icon-only" onclick="window.downloadResource('${prog.originalFile}', '${escapeHtml(prog.originalFile.split('/').pop())}')" title="Скачать DOCX">
                ${icons.download}
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // VIEW 2: LEVEL VIEW
  // ==========================================
  function renderLevelView(levelId) {
    state.currentLevel = levelId;
    const level = getLevel(levelId);
    const robots = state.database.robots.filter(r => r.levelId === levelId);
    const robotsWithCode = robots.filter(r => r.program?.hasCode);

    appRoot.innerHTML = `
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs" aria-label="Хлебные крошки">
        <a href="#home" class="breadcrumb-item">${icons.home} Главная</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item active">${escapeHtml(level.name)}</span>
      </nav>

      <!-- Level Banner -->
      <div class="level-banner" style="--level-banner-color: ${level.color};">
        <div class="level-banner-info">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.4rem;">
            <span class="level-badge" style="background:${level.accent};color:${level.color};font-size:0.85rem;padding:0.25rem 0.75rem;">${escapeHtml(level.tag)}</span>
          </div>
          <h2>${escapeHtml(level.name)}</h2>
          <p>${escapeHtml(level.description)}</p>
        </div>
        <div class="level-banner-badges">
          <div class="stat-chip">
            ${icons.robot}
            <span><strong>${robots.length}</strong> моделей роботов</span>
          </div>
          ${robotsWithCode.length > 0 ? `
            <div class="stat-chip">
              ${icons.code}
              <span><strong>${robotsWithCode.length}</strong> программ с кодом</span>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Tabs -->
      <div class="tabs-container">
        <button class="tab-btn ${state.currentTab === 'instructions' ? 'active' : ''}" id="tabBtnInstructions">
          ${icons.book}
          <span>Инструкции сборки</span>
          <span class="tab-count-badge">${robots.length}</span>
        </button>
        <button class="tab-btn ${state.currentTab === 'programs' ? 'active' : ''}" id="tabBtnPrograms">
          ${icons.code}
          <span>Программы с кодом</span>
          <span class="tab-count-badge">${robotsWithCode.length}</span>
        </button>
      </div>

      <!-- Tab Content -->
      <div id="tabContent">
        ${state.currentTab === 'instructions' ? `
          <div class="catalog-grid">
            ${robots.map(r => renderRobotCard(r)).join('')}
          </div>
        ` : `
          ${robotsWithCode.length > 0 ? `
            <div class="catalog-grid">
              ${robotsWithCode.map(r => renderProgramCard(r)).join('')}
            </div>
          ` : `
            <div class="empty-state">
              <span class="empty-state-icon">${icons.brick}</span>
              <h3>Начальный уровень конструирования</h3>
              <p>${level.id === 'level-1'
                ? 'Для 1 уровня образовательная программа сфокусирована на развитии моторики, пространственного мышления и сборке базовых механических конструкций (без электронного программирования).'
                : 'Для данного уровня программы оформляются педагогом в процессе занятий.'}</p>
            </div>
          `}
        `}
      </div>
    `;

    // Tab switchers
    const tabInstr = document.getElementById('tabBtnInstructions');
    const tabProg = document.getElementById('tabBtnPrograms');

    if (tabInstr) tabInstr.addEventListener('click', () => { state.currentTab = 'instructions'; renderLevelView(levelId); });
    if (tabProg) tabProg.addEventListener('click', () => { state.currentTab = 'programs'; renderLevelView(levelId); });
  }

  // ==========================================
  // VIEW 3: ROBOT DETAIL / INSTRUCTION VIEWER
  // ==========================================
  function renderRobotDetailView(robotId) {
    const robot = getRobot(robotId);
    if (!robot) { renderHomeView(); return; }

    state.currentRobot = robot;
    state.currentInstructionPage = 1;
    state.zoomLevel = 1.0;

    const level = getLevel(robot.levelId);
    const pages = robot.instruction?.pages || [];
    const totalPages = pages.length;
    const hasCode = robot.program?.hasCode;

    appRoot.innerHTML = `
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs" aria-label="Хлебные крошки">
        <a href="#home" class="breadcrumb-item">${icons.home} Главная</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#${level.id}" class="breadcrumb-item">${escapeHtml(level.name)}</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#${level.id}" class="breadcrumb-item">Инструкции</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item active">${escapeHtml(robot.name)}</span>
      </nav>

      <!-- Robot Hero -->
      <div class="level-banner" style="--level-banner-color: ${level.color}; margin-bottom: 2rem; animation: fadeInUp 0.4s ease both;">
        <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
          <img src="${getSafeImg(robot.coverImage)}" alt="${escapeHtml(robot.name)}"
               style="width:110px;height:110px;object-fit:contain;background:#fff;border-radius:18px;padding:8px;box-shadow:var(--shadow-lg);border:1px solid #e2e8f0;"
               onerror="this.style.display='none'">
          <div class="level-banner-info">
            <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.35rem;">
              <span class="level-badge" style="background:${level.accent};color:${level.color};">${escapeHtml(level.name || robot.age)}</span>
              <span class="meta-tag">Тема #${robot.topicNumber}</span>
            </div>
            <h2 style="font-family:var(--font-heading);font-size:2rem;font-weight:800;">${escapeHtml(robot.name)}</h2>
            <p style="margin-top:0.35rem;font-size:0.9rem;">
              Файл: <strong>${escapeHtml(robot.instruction?.fileName || '')}</strong>
              ${robot.instruction?.fileSize ? `(${robot.instruction.fileSize})` : ''}
            </p>
          </div>
        </div>
        <div class="level-banner-badges">
          ${robot.instruction?.originalFile ? `
            <button class="btn-primary" onclick="window.downloadResource('${robot.instruction.originalFile}', '${escapeHtml(robot.instruction.fileName || '')}')">
              ${icons.download} Скачать файл (${(robot.instruction.fileType || 'PDF').toUpperCase()})
            </button>
          ` : ''}
          ${hasCode ? `
            <button class="btn-secondary"
              onclick="document.getElementById('robotProgramSection').scrollIntoView({behavior:'smooth'})">
              ${icons.code} К алгоритму программы
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Instruction Viewer -->
      <section class="search-filter-card" style="padding:1.75rem; animation: fadeInUp 0.45s ease both; animation-delay:0.08s;">
        <div class="section-title-wrap" style="margin-bottom:1.25rem;">
          <div>
            <h3 class="section-title" style="font-size:1.45rem;">Пошаговая схема сборки</h3>
            <p class="section-subtitle">Листайте кнопками на экране или клавишами &larr; / &rarr; на клавиатуре</p>
          </div>
          <div class="zoom-controls">
            <button class="zoom-btn" id="zoomOutBtn" title="Уменьшить масштаб">&ndash;</button>
            <button class="zoom-btn" id="zoomResetBtn" title="Сбросить масштаб" style="width:auto;padding:0 0.75rem;font-size:0.8rem;">100%</button>
            <button class="zoom-btn" id="zoomInBtn" title="Увеличить масштаб">+</button>
            <button class="zoom-btn" id="fullscreenViewerBtn" title="Полноэкранный режим" style="width:auto;padding:0 0.75rem;">
              ${icons.fullscreen}
            </button>
          </div>
        </div>

        <div class="instruction-viewer-container">
          <div class="viewer-toolbar">
            <div class="page-controls">
              <button class="viewer-btn" id="prevPageBtn">${icons.arrowLeft} Назад</button>
              <span class="page-counter-pill" id="pageIndicator">Страница 1 из ${totalPages}</span>
              <button class="viewer-btn" id="nextPageBtn">Вперёд ${icons.arrowRight}</button>
            </div>
            <div class="viewer-hint">
              Кликните по изображению для следующего шага
            </div>
          </div>

          <div class="viewer-canvas-wrap" id="viewerCanvasWrap">
            ${pages.length > 0 ? `
              <img src="${getSafeImg(pages[0])}"
                   alt="Сборка ${escapeHtml(robot.name)} — Страница 1"
                   class="viewer-slide-image"
                   id="viewerMainImage">
            ` : `<p style="color:var(--text-muted)">Страницы инструкции недоступны</p>`}
          </div>

          <div class="thumbnail-strip" id="thumbnailStrip">
            ${pages.map((p, idx) => `
              <div class="thumb-item ${idx === 0 ? 'active' : ''}" data-page="${idx + 1}" title="Страница ${idx + 1}">
                <img src="${getSafeImg(p)}" alt="Стр ${idx + 1}" loading="lazy">
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Program Section -->
      ${hasCode ? `
        <section class="search-filter-card" id="robotProgramSection"
                 style="padding:2rem;margin-top:2rem;border-color:rgba(5,150,105,0.25);animation:fadeInUp 0.5s ease both;animation-delay:0.15s;">
          <div class="section-title-wrap">
            <div>
              <div class="program-header-tag">
                ${icons.code}
                <span>Программа WeDo 2.0</span>
              </div>
              <h3 class="section-title" style="font-size:1.5rem;">${escapeHtml(robot.program.programTitle || robot.name)}</h3>
            </div>
            ${robot.program.originalFile ? `
              <button class="btn-primary btn-program"
                      onclick="window.downloadResource('${robot.program.originalFile}', '${escapeHtml(robot.program.originalFile.split('/').pop())}')">
                ${icons.download} Скачать сборник программ
              </button>
            ` : ''}
          </div>

          <div class="program-blocks-display">
            ${robot.program.codeImages && robot.program.codeImages.length > 0
              ? robot.program.codeImages.map((cImg, i) => `
                <div class="program-block-img-card">
                  <img src="${getSafeImg(cImg)}"
                       alt="Схема блоков программы ${i + 1}"
                       onclick="window.openImageLightBox('${cImg}')"
                       style="cursor:zoom-in;"
                       title="Нажмите для увеличения">
                </div>
              `).join('')
              : ''}
          </div>

          <div class="lesson-content-grid" style="margin-top:1.5rem;">
            ${robot.program.story ? `
              <div class="lesson-section-card">
                <div class="lesson-section-header header-story">
                  <span class="lesson-icon-wrap">${icons.story}</span>
                  <span>История Мехатрона</span>
                </div>
                <div class="lesson-section-body">${robot.program.story}</div>
              </div>
            ` : ''}
            ${robot.program.modelSetup ? `
              <div class="lesson-section-card">
                <div class="lesson-section-header header-gear">
                  <span class="lesson-icon-wrap">${icons.gear}</span>
                  <span>Модель и порты подключения</span>
                </div>
                <div class="lesson-section-body">${robot.program.modelSetup}</div>
              </div>
            ` : ''}
            ${robot.program.howItWorks ? `
              <div class="lesson-section-card">
                <div class="lesson-section-header header-rocket">
                  <span class="lesson-icon-wrap">${icons.rocket}</span>
                  <span>Как работает и запускается</span>
                </div>
                <div class="lesson-section-body">${robot.program.howItWorks}</div>
              </div>
            ` : ''}
            ${robot.program.secondAttempt ? `
              <div class="lesson-section-card">
                <div class="lesson-section-header header-flask">
                  <span class="lesson-icon-wrap">${icons.flask}</span>
                  <span>Эксперимент и вторая попытка</span>
                </div>
                <div class="lesson-section-body">${robot.program.secondAttempt}</div>
              </div>
            ` : ''}
            ${robot.program.stopping ? `
              <div class="lesson-section-card">
                <div class="lesson-section-header header-shield">
                  <span class="lesson-icon-wrap">${icons.shield}</span>
                  <span>Остановка и безопасность</span>
                </div>
                <div class="lesson-section-body">${robot.program.stopping}</div>
              </div>
            ` : ''}
            ${robot.program.nextTopic ? `
              <div class="lesson-section-card">
                <div class="lesson-section-header header-target">
                  <span class="lesson-icon-wrap">${icons.target}</span>
                  <span>Следующая тема</span>
                </div>
                <div class="lesson-section-body">${robot.program.nextTopic}</div>
              </div>
            ` : ''}
          </div>
        </section>
      ` : ''}
    `;

    // Setup viewer
    if (pages.length > 0) setupInstructionViewer(robot);
  }

  // ==========================================
  // MULTI-PAGE VIEWER LOGIC
  // ==========================================
  function setupInstructionViewer(robot) {
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const indicator = document.getElementById('pageIndicator');
    const mainImg = document.getElementById('viewerMainImage');
    const canvasWrap = document.getElementById('viewerCanvasWrap');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomResetBtn = document.getElementById('zoomResetBtn');
    const fullscreenBtn = document.getElementById('fullscreenViewerBtn');
    const thumbs = document.querySelectorAll('.thumb-item');

    if (!prevBtn || !mainImg) return;

    const pages = robot.instruction?.pages || [];
    const totalPages = pages.length;

    function updatePage(pageNumber) {
      if (pageNumber < 1) pageNumber = 1;
      if (pageNumber > totalPages) pageNumber = totalPages;
      state.currentInstructionPage = pageNumber;

      mainImg.src = getSafeImg(pages[pageNumber - 1]);
      mainImg.alt = `Сборка ${robot.name} — Страница ${pageNumber}`;
      indicator.textContent = `Страница ${pageNumber} из ${totalPages}`;
      prevBtn.disabled = (pageNumber === 1);
      nextBtn.disabled = (pageNumber === totalPages);

      thumbs.forEach(t => {
        const p = parseInt(t.getAttribute('data-page'), 10);
        if (p === pageNumber) {
          t.classList.add('active');
          t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          t.classList.remove('active');
        }
      });
    }

    function applyZoom(scale) {
      state.zoomLevel = Math.max(0.5, Math.min(3.0, scale));
      mainImg.style.transform = `scale(${state.zoomLevel})`;
      zoomResetBtn.textContent = `${Math.round(state.zoomLevel * 100)}%`;
    }

    prevBtn.addEventListener('click', () => updatePage(state.currentInstructionPage - 1));
    nextBtn.addEventListener('click', () => updatePage(state.currentInstructionPage + 1));

    mainImg.addEventListener('click', () => {
      if (state.currentInstructionPage < totalPages) {
        updatePage(state.currentInstructionPage + 1);
      }
    });

    thumbs.forEach(t => {
      t.addEventListener('click', () => {
        updatePage(parseInt(t.getAttribute('data-page'), 10));
      });
    });

    zoomInBtn.addEventListener('click', () => applyZoom(state.zoomLevel + 0.25));
    zoomOutBtn.addEventListener('click', () => applyZoom(state.zoomLevel - 0.25));
    zoomResetBtn.addEventListener('click', () => applyZoom(1.0));

    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        canvasWrap.requestFullscreen?.().catch(err => console.error(err));
      } else {
        document.exitFullscreen?.();
      }
    });

    // Keyboard navigation
    window.removeEventListener('keydown', window._wedoKeyNavHandler);
    const handleKeyNav = (e) => {
      if (e.key === 'ArrowLeft') updatePage(state.currentInstructionPage - 1);
      else if (e.key === 'ArrowRight') updatePage(state.currentInstructionPage + 1);
      else if (e.key === '+') applyZoom(state.zoomLevel + 0.25);
      else if (e.key === '-') applyZoom(state.zoomLevel - 0.25);
    };
    window._wedoKeyNavHandler = handleKeyNav;
    window.addEventListener('keydown', handleKeyNav);

    updatePage(1);
  }

  // ==========================================
  // PROGRAM MODAL
  // ==========================================
  window.openProgramModal = function (robotId) {
    const robot = getRobot(robotId);
    if (!robot || !robot.program) return;

    const prog = robot.program;
    const level = getLevel(robot.levelId);
    modalProgramTitle.textContent = `${prog.programTitle || robot.name} (Тема #${prog.topicNumber || robot.topicNumber})`;
    modalProgramSubtitle.textContent = `Робот: ${robot.name} • ${level ? level.name : robot.age}`;

    modalProgramBody.innerHTML = `
      <div style="display:flex;justify-content:flex-end;margin-bottom:1.25rem;">
        ${prog.originalFile ? `
          <button class="btn-primary btn-program" style="padding:0.55rem 1.25rem;flex:0;"
                  onclick="window.downloadResource('${prog.originalFile}', '${escapeHtml(prog.originalFile.split('/').pop())}')">
            ${icons.download} Скачать DOCX
          </button>
        ` : ''}
      </div>

      <div class="program-blocks-display">
        ${prog.codeImages && prog.codeImages.length > 0
          ? prog.codeImages.map((cImg, i) => `
            <div class="program-block-img-card">
              <img src="${getSafeImg(cImg)}" alt="Схема программы ${i + 1}" style="max-height:300px;">
            </div>
          `).join('')
          : '<p style="color:var(--text-muted);text-align:center;padding:2rem;">Изображения блок-схем находятся в общем сборнике программ.</p>'}
      </div>

      <div class="lesson-content-grid" style="margin-top:1.5rem;">
        ${prog.story ? `
          <div class="lesson-section-card">
            <div class="lesson-section-header header-story">
              <span class="lesson-icon-wrap">${icons.story}</span>
              <span>История Мехатрона</span>
            </div>
            <div class="lesson-section-body">${prog.story}</div>
          </div>
        ` : ''}
        ${prog.modelSetup ? `
          <div class="lesson-section-card">
            <div class="lesson-section-header header-gear">
              <span class="lesson-icon-wrap">${icons.gear}</span>
              <span>Модель и подключение</span>
            </div>
            <div class="lesson-section-body">${prog.modelSetup}</div>
          </div>
        ` : ''}
        ${prog.howItWorks ? `
          <div class="lesson-section-card">
            <div class="lesson-section-header header-rocket">
              <span class="lesson-icon-wrap">${icons.rocket}</span>
              <span>Как работает алгоритм</span>
            </div>
            <div class="lesson-section-body">${prog.howItWorks}</div>
          </div>
        ` : ''}
        ${prog.secondAttempt ? `
          <div class="lesson-section-card">
            <div class="lesson-section-header header-flask">
              <span class="lesson-icon-wrap">${icons.flask}</span>
              <span>Эксперимент и вторая попытка</span>
            </div>
            <div class="lesson-section-body">${prog.secondAttempt}</div>
          </div>
        ` : ''}
        ${prog.stopping ? `
          <div class="lesson-section-card">
            <div class="lesson-section-header header-shield">
              <span class="lesson-icon-wrap">${icons.shield}</span>
              <span>Остановка и безопасность</span>
            </div>
            <div class="lesson-section-body">${prog.stopping}</div>
          </div>
        ` : ''}
        ${prog.nextTopic ? `
          <div class="lesson-section-card">
            <div class="lesson-section-header header-target">
              <span class="lesson-icon-wrap">${icons.target}</span>
              <span>Следующая тема</span>
            </div>
            <div class="lesson-section-body">${prog.nextTopic}</div>
          </div>
        ` : ''}
      </div>
    `;

    programModal.classList.add('active');
  };

  // Close Modal
  function closeModal() {
    programModal.classList.remove('active');
  }

  modalCloseBtn.addEventListener('click', closeModal);
  programModal.addEventListener('click', (e) => { if (e.target === programModal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && programModal.classList.contains('active')) closeModal(); });

  // Image Lightbox
  window.openImageLightBox = function (imgUrl) {
    modalProgramTitle.textContent = 'Увеличенная схема программы';
    modalProgramSubtitle.textContent = 'LEGO Education WeDo 2.0';
    modalProgramBody.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;padding:1rem;">
        <img src="${getSafeImg(imgUrl)}" style="max-width:100%;max-height:75vh;object-fit:contain;border-radius:12px;box-shadow:var(--shadow-lg);">
      </div>
    `;
    programModal.classList.add('active');
  };

  // Download Trigger
  window.downloadResource = function (filePath, fileName) {
    if (!filePath) return;
    const link = document.createElement('a');
    link.href = encodeURI(filePath);
    link.download = fileName || filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Global Logo click
  headerLogoBtn.addEventListener('click', () => {
    state.searchQuery = '';
    state.filterLevel = 'all';
    window.location.hash = '#home';
  });

  // Hash Change
  window.addEventListener('hashchange', handleRouting);

  // Initialize
  loadDatabase();

})();
