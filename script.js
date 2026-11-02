/**
 * ============================================================================
 * VICKEY CHAUDHARY — PORTFOLIO CLIENT ENGINE & CMS CONTROLLER
 * Creative Direction: Editorial + Cinematic Brand Monograph
 * ============================================================================
 * 
 * Features:
 * - Decoupled data layer hydration from `data/portfolio-data.js`
 * - Mobile navigation menu with full keyboard accessibility (WCAG AA)
 * - Dynamic scroll spy for section highlighting
 * - Copy email to clipboard with animated feedback
 * - Interactive in-browser Content Manager (CMS) with instant code export
 * - Zero external runtime dependencies
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation elements
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksContainer = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Contact & Copy elements
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const toastMessage = document.getElementById('toastMessage');
  const copyIcon = copyEmailBtn ? copyEmailBtn.querySelector('.copy-icon') : null;
  const checkIcon = copyEmailBtn ? copyEmailBtn.querySelector('.check-icon') : null;
  const emailText = document.getElementById('emailText');

  // CMS Modal elements
  const openCmsBtn = document.getElementById('openCmsBtn');
  const closeCmsBtn = document.getElementById('closeCmsBtn');
  const cmsCloseDoneBtn = document.getElementById('cmsCloseDoneBtn');
  const cmsModalOverlay = document.getElementById('cmsModalOverlay');
  const cmsCopyCodeBtn = document.getElementById('cmsCopyCodeBtn');
  const cmsCodePreview = document.getElementById('cmsCodePreview');
  const cmsTabs = document.querySelectorAll('.cms-tab-btn');
  const cmsTabPanels = document.querySelectorAll('.cms-tab-panel');

  /* ==========================================================================
     1. DATA HYDRATION ENGINE (DECOUPLED CONTENT LAYER)
     ========================================================================== */
  const hydratePortfolio = (data) => {
    if (!data) return;

    // A. Hero Section
    const heroStatus = document.getElementById('heroStatusText');
    const heroIntro = document.getElementById('heroIntroText');
    const curatorStrip = document.getElementById('heroCuratorStrip');

    const mastheadStatus = document.getElementById('mastheadStatusText');
    if (mastheadStatus && data.personal && data.personal.statusBadge) {
      mastheadStatus.textContent = data.personal.statusBadge;
    }
    if (heroStatus && data.personal && data.personal.statusBadge) {
      heroStatus.textContent = data.personal.statusBadge;
    }
    if (heroIntro && data.personal && data.personal.heroIntro) {
      heroIntro.innerHTML = data.personal.heroIntro;
    }
    if (curatorStrip && data.personal && Array.isArray(data.personal.curatorIndex)) {
      curatorStrip.innerHTML = data.personal.curatorIndex.map(c => `
        <div class="curator-cell">
          <div class="curator-meta-row">
            <span class="curator-num">${c.num} //</span>
            <span>${c.label}</span>
          </div>
          <span class="curator-val">${c.value}</span>
        </div>
      `).join('');
    }

    // B. About Section Lead & Paragraphs
    const aboutLead = document.getElementById('aboutLeadText');
    const aboutParagraphsContainer = document.getElementById('aboutParagraphs');

    if (aboutLead && data.about && data.about.lead) {
      aboutLead.textContent = data.about.lead;
    }
    if (aboutParagraphsContainer && data.about && Array.isArray(data.about.paragraphs)) {
      aboutParagraphsContainer.innerHTML = data.about.paragraphs
        .map(p => `<p class="monograph-body-p">${p}</p>`)
        .join('');
    }

    // C. Curatorial Principles
    const principlesContainer = document.getElementById('aboutPrinciplesList');
    if (principlesContainer && data.about && Array.isArray(data.about.principles)) {
      principlesContainer.innerHTML = data.about.principles
        .map((pr, idx) => `
          <div class="principle-entry">
            <div class="principle-entry-header">
              <span class="principle-entry-num">${pr.num ? pr.num + ' //' : ('0' + (idx + 1) + ' //')}</span>
              <h3 class="principle-entry-title">${pr.title}</h3>
            </div>
            <p class="principle-entry-desc">${pr.description}</p>
          </div>
        `).join('');
    }

    // D. Featured Projects (Exhibition Cards)
    const projectsContainer = document.getElementById('featuredProjectsGrid');
    if (projectsContainer && Array.isArray(data.projects)) {
      projectsContainer.innerHTML = data.projects.map((proj, idx) => {
        let statusClass = '';
        const statusLower = (proj.status || '').toLowerCase();
        if (statusLower.includes('live') || statusLower.includes('prod')) {
          statusClass = 'exhibit-status-live';
        }

        const techPills = Array.isArray(proj.technologies)
          ? proj.technologies.map(t => `<span class="exhibit-tag-pill">${t}</span>`).join('')
          : '';

        const liveAction = proj.liveUrl
          ? `<a href="${proj.liveUrl}" class="btn-exhibit-action btn-exhibit-primary">
              <span>Live Exhibition</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>`
          : '';

        const isPractice = statusLower.includes('practice');
        const githubAction = proj.githubUrl
          ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-exhibit-action btn-exhibit-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>${isPractice ? 'Practice Repository' : 'View Repository'}</span>
            </a>`
          : '';

        const exhibitIndex = proj.index || `EXHIBIT 0${idx + 1}`;

        return `
          <article class="exhibition-card">
            <div class="exhibit-top-row">
              <span class="exhibit-index-badge">${exhibitIndex}</span>
              <span class="exhibit-status-stamp ${statusClass}">${proj.status}</span>
            </div>

            <h3 class="exhibit-title">${proj.title}</h3>

            <div class="exhibit-section-block">
              <span class="exhibit-label">Problem Statement</span>
              <p class="exhibit-text">${proj.problem}</p>
            </div>

            <div class="exhibit-section-block">
              <span class="exhibit-label">Contribution & Engineering</span>
              <p class="exhibit-text">${proj.contribution}</p>
            </div>

            <div class="exhibit-tech-tags">
              ${techPills}
            </div>

            ${proj.takeaway ? `
              <div class="exhibit-takeaway-block">
                <strong>Key Takeaway:</strong> ${proj.takeaway}
              </div>
            ` : ''}

            <div class="exhibit-actions-row">
              ${liveAction}
              ${githubAction}
            </div>
          </article>
        `;
      }).join('');
    }

    // E. Currently Building / Sprints
    const sprintsContainer = document.getElementById('currentlyBuildingGrid');
    if (sprintsContainer && Array.isArray(data.currentlyBuilding)) {
      sprintsContainer.innerHTML = data.currentlyBuilding.map(sp => `
        <div class="studio-sprint-sheet">
          <span class="sprint-tag-stamp">${sp.tag}</span>
          <h3 class="sprint-sheet-title">${sp.title}</h3>
          <p class="sprint-sheet-focus">${sp.focus}</p>
        </div>
      `).join('');
    }

    // F. Skills Section (Demonstrated & Active Studies)
    const demonstratedStack = document.getElementById('demonstratedSkillsStack');
    const learningStack = document.getElementById('learningSkillsStack');

    if (demonstratedStack && data.skills && Array.isArray(data.skills.demonstrated)) {
      demonstratedStack.innerHTML = data.skills.demonstrated.map(sk => `
        <div class="skill-editorial-row">
          <div class="skill-row-top">
            <h3 class="skill-name-bold">${sk.name}</h3>
            <span class="skill-status-tag">${sk.level || 'Demonstrated'}</span>
          </div>
          <p class="skill-desc-text">${sk.detail || sk.highlight || ''}</p>
        </div>
      `).join('');
    }

    if (learningStack && data.skills && Array.isArray(data.skills.currentlyLearning)) {
      learningStack.innerHTML = data.skills.currentlyLearning.map(sk => `
        <div class="skill-editorial-row">
          <div class="skill-row-top">
            <h3 class="skill-name-bold">${sk.name}</h3>
            <span class="skill-status-tag">${sk.status || 'Active Study'}</span>
          </div>
          <p class="skill-desc-text">${sk.detail || sk.focus || ''}</p>
        </div>
      `).join('');
    }

    // G. Journey Section (Learning Chronology)
    const journeyContainer = document.getElementById('journeyTimelineItems');
    if (journeyContainer && Array.isArray(data.journey)) {
      journeyContainer.innerHTML = data.journey.map(jn => `
        <div class="provenance-milestone-entry">
          <div class="provenance-node-marker"></div>
          <div class="provenance-entry-card">
            <div class="provenance-card-meta">
              <span class="provenance-year-tag">${jn.year}</span>
              <span class="provenance-phase-tag">${jn.period}</span>
            </div>
            <h3 class="provenance-card-title">${jn.title}</h3>
            <p class="provenance-card-desc">${jn.description}</p>
          </div>
        </div>
      `).join('');
    }

    // G2. Current Focus Indicator
    const focusList = document.getElementById('currentFocusList');
    if (focusList && data.currentFocus && Array.isArray(data.currentFocus.items)) {
      focusList.innerHTML = data.currentFocus.items.map(item => `
        <li class="focus-list-item">
          <span class="focus-bullet" aria-hidden="true">✦</span>
          <span>${item}</span>
        </li>
      `).join('');
    }

    // H. Achievements Section (Distinctions)
    const achievementsContainer = document.getElementById('achievementsGrid');
    if (achievementsContainer && Array.isArray(data.achievements)) {
      achievementsContainer.innerHTML = data.achievements.map((ach, idx) => `
        <div class="achievement-monograph-card">
          <div class="achievement-card-top">
            <span class="achievement-index-num">DISTINCTION // ${ach.num || ('0' + (idx + 1))}</span>
            <span class="achievement-category-tag">${ach.category}</span>
          </div>
          <h3 class="achievement-card-title">${ach.title}</h3>
          <p class="achievement-card-detail">${ach.description}</p>
        </div>
      `).join('');
    }
  };

  // Run Hydration on load
  if (typeof window.PORTFOLIO_DATA !== 'undefined') {
    hydratePortfolio(window.PORTFOLIO_DATA);
  }

  /* ==========================================================================
     2. NAVBAR ELEVATION ON SCROLL
     ========================================================================== */
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     3. MOBILE MENU INTERACTION
     ========================================================================== */
  if (mobileToggle && navLinksContainer) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navLinksContainer.classList.contains('is-open');
      navLinksContainer.classList.toggle('is-open', isOpen);
      mobileToggle.classList.toggle('is-active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    mobileToggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('is-open')) {
          toggleMenu(false);
        }
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (navLinksContainer.classList.contains('is-open') &&
          !navLinksContainer.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinksContainer.classList.contains('is-open')) {
        toggleMenu(false);
        mobileToggle.focus();
      }
    });
  }

  /* ==========================================================================
     4. SCROLL SPY (ACTIVE NAV LINK)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  /* ==========================================================================
     5. COPY EMAIL TO CLIPBOARD
     ========================================================================== */
  if (copyEmailBtn && emailText) {
    let copyTimeout = null;
    const emailToCopy = emailText.textContent.trim();

    copyEmailBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers or local contexts
          const textArea = document.createElement('textarea');
          textArea.value = emailToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        // Show feedback state
        if (copyBtnText) copyBtnText.textContent = 'Copied! ✓';
        if (copyIcon) copyIcon.classList.add('hidden');
        if (checkIcon) checkIcon.classList.remove('hidden');
        if (toastMessage) {
          toastMessage.classList.add('show');
          toastMessage.textContent = `Copied "${emailToCopy}" to clipboard!`;
        }

        // Reset state after 3 seconds
        clearTimeout(copyTimeout);
        copyTimeout = setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy Address';
          if (copyIcon) copyIcon.classList.remove('hidden');
          if (checkIcon) checkIcon.classList.add('hidden');
          if (toastMessage) toastMessage.classList.remove('show');
        }, 3000);

      } catch (err) {
        console.error('Failed to copy email: ', err);
        if (toastMessage) {
          toastMessage.classList.add('show');
          toastMessage.textContent = 'Unable to copy. Please manually copy: ' + emailToCopy;
        }
      }
    });
  }

  /* ==========================================================================
     6. CONTENT MANAGEMENT SYSTEM (CMS) CONTROLLER
     ========================================================================== */
  if (cmsModalOverlay) {
    const cmsHeroIntro = document.getElementById('cmsHeroIntro');
    const cmsStatusText = document.getElementById('cmsStatusText');
    const cmsProjectsList = document.getElementById('cmsProjectsList');
    const cmsSkillsList = document.getElementById('cmsSkillsList');
    const cmsJourneyList = document.getElementById('cmsJourneyList');
    const cmsAchievementsList = document.getElementById('cmsAchievementsList');

    const updateCmsFieldsFromData = () => {
      const data = window.PORTFOLIO_DATA;
      if (!data) return;

      if (cmsHeroIntro && data.personal) {
        cmsHeroIntro.value = data.personal.heroIntro || '';
      }
      if (cmsStatusText && data.personal) {
        cmsStatusText.value = data.personal.statusBadge || '';
      }

      // Projects overview
      if (cmsProjectsList && Array.isArray(data.projects)) {
        cmsProjectsList.innerHTML = data.projects.map((p, i) => `
          <div style="padding:10px 14px; background:#f5f2eb; border-radius:3px; border:1px solid #dcd7ce;">
            <div style="font-weight:700; color:#141413; font-size:0.92rem;">#${i + 1}: ${p.title}</div>
            <div style="font-size:0.78rem; color:#55544f; margin-top:2px;">Status: <span style="color:#0F38E8; font-weight:600;">${p.status}</span> • Tech: ${p.technologies.join(', ')}</div>
          </div>
        `).join('');
      }

      // Skills overview
      if (cmsSkillsList && data.skills) {
        const dem = data.skills.demonstrated ? data.skills.demonstrated.map(s => s.name).join(', ') : '';
        const lrn = data.skills.currentlyLearning ? data.skills.currentlyLearning.map(s => s.name).join(', ') : '';
        cmsSkillsList.innerHTML = `
          <div style="padding:10px 14px; background:#f5f2eb; border-radius:3px; border:1px solid #dcd7ce;">
            <div style="font-weight:700; color:#0F38E8; font-size:0.85rem; margin-bottom:4px; text-transform:uppercase; letter-spacing:0.04em;">Demonstrated Skills:</div>
            <div style="font-size:0.86rem; color:#141413;">${dem}</div>
          </div>
          <div style="padding:10px 14px; background:#f5f2eb; border-radius:3px; border:1px solid #dcd7ce; margin-top:8px;">
            <div style="font-weight:700; color:#141413; font-size:0.85rem; margin-bottom:4px; text-transform:uppercase; letter-spacing:0.04em;">Currently Learning:</div>
            <div style="font-size:0.86rem; color:#141413;">${lrn}</div>
          </div>
        `;
      }

      // Journey overview
      if (cmsJourneyList && Array.isArray(data.journey)) {
        cmsJourneyList.innerHTML = data.journey.map(j => `
          <div style="padding:10px 14px; background:#f5f2eb; border-radius:3px; border:1px solid #dcd7ce;">
            <div style="font-size:0.88rem; font-weight:700; color:#141413;">${j.year} [${j.period}] — ${j.title}</div>
            <div style="font-size:0.8rem; color:#55544f; margin-top:2px;">${j.description}</div>
          </div>
        `).join('');
      }

      // Achievements overview
      if (cmsAchievementsList && Array.isArray(data.achievements)) {
        cmsAchievementsList.innerHTML = data.achievements.map((a, i) => `
          <div style="padding:10px 14px; background:#f5f2eb; border-radius:3px; border:1px solid #dcd7ce;">
            <div style="font-size:0.88rem; font-weight:700; color:#141413;">#${i + 1}: ${a.title}</div>
            <div style="font-size:0.75rem; color:#0F38E8; font-weight:600; text-transform:uppercase; margin-top:2px;">${a.category}</div>
            <div style="font-size:0.8rem; color:#55544f; margin-top:4px;">${a.description}</div>
          </div>
        `).join('');
      }

      // Code export preview
      if (cmsCodePreview) {
        cmsCodePreview.textContent = `const PORTFOLIO_DATA = ${JSON.stringify(data, null, 2)};\n\nif (typeof window !== "undefined") {\n  window.PORTFOLIO_DATA = PORTFOLIO_DATA;\n}\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = PORTFOLIO_DATA;\n}`;
      }
    };

    const openCms = () => {
      updateCmsFieldsFromData();
      cmsModalOverlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    };

    const closeCms = () => {
      cmsModalOverlay.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    if (openCmsBtn) openCmsBtn.addEventListener('click', openCms);
    if (closeCmsBtn) closeCmsBtn.addEventListener('click', closeCms);
    if (cmsCloseDoneBtn) cmsCloseDoneBtn.addEventListener('click', closeCms);

    // Close on overlay click outside container
    cmsModalOverlay.addEventListener('click', (e) => {
      if (e.target === cmsModalOverlay) {
        closeCms();
      }
    });

    // Keyboard shortcut (Ctrl + Shift + E or Escape)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cmsModalOverlay.classList.contains('is-active')) {
        closeCms();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
        e.preventDefault();
        if (cmsModalOverlay.classList.contains('is-active')) {
          closeCms();
        } else {
          openCms();
        }
      }
    });

    // Tab switching in CMS
    cmsTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab');
        cmsTabs.forEach(t => t.classList.remove('is-active'));
        cmsTabPanels.forEach(p => p.classList.remove('is-active'));
        
        tab.classList.add('is-active');
        const activePanel = document.getElementById(targetId);
        if (activePanel) activePanel.classList.add('is-active');
      });
    });

    // Copy exported data code
    if (cmsCopyCodeBtn && cmsCodePreview) {
      cmsCopyCodeBtn.addEventListener('click', async () => {
        try {
          const code = cmsCodePreview.textContent;
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(code);
          } else {
            const ta = document.createElement('textarea');
            ta.value = code;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
          }
          cmsCopyCodeBtn.innerHTML = '<span>Copied Code! ✓</span>';
          setTimeout(() => {
            cmsCopyCodeBtn.innerHTML = '<span>Copy Code</span>';
          }, 3000);
        } catch (err) {
          console.error('Failed to copy CMS code', err);
        }
      });
    }

    // Live sync for hero intro input
    if (cmsHeroIntro) {
      cmsHeroIntro.addEventListener('input', () => {
        if (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.personal) {
          window.PORTFOLIO_DATA.personal.heroIntro = cmsHeroIntro.value;
          hydratePortfolio(window.PORTFOLIO_DATA);
          if (cmsCodePreview) {
            cmsCodePreview.textContent = `const PORTFOLIO_DATA = ${JSON.stringify(window.PORTFOLIO_DATA, null, 2)};\n\nif (typeof window !== "undefined") {\n  window.PORTFOLIO_DATA = PORTFOLIO_DATA;\n}\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = PORTFOLIO_DATA;\n}`;
          }
        }
      });
    }
  }

  /* ==========================================================================
     7. CONSOLE WELCOME GREETING
     ========================================================================== */
  console.log(
    `%c VICKEY CHAUDHARY %c Aspiring Software Engineer & Developer \n Newton School of Technology • Ajeenkya DY Patil University, Pune (Class of 2030) `,
    'background: #0F38E8; color: #FBF9F5; font-weight: bold; padding: 4px 8px; border-radius: 2px;',
    'background: #141413; color: #FBF9F5; padding: 4px 8px; border-radius: 2px;'
  );
});
