/**
 * Vickey Chaudhary Portfolio Scripts
 * - Mobile navigation menu toggle & keyboard accessibility
 * - Scroll spy for active navbar link highlighting
 * - Copy email to clipboard with instant user feedback
 * - Smooth scroll behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation elements
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksContainer = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Buttons
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const toastMessage = document.getElementById('toastMessage');
  const copyIcon = copyEmailBtn ? copyEmailBtn.querySelector('.copy-icon') : null;
  const checkIcon = copyEmailBtn ? copyEmailBtn.querySelector('.check-icon') : null;
  const emailText = document.getElementById('emailText');

  /* ==========================================================================
     1. NAVBAR ELEVATION ON SCROLL
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
     2. MOBILE MENU INTERACTION
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
     3. SCROLL SPY (ACTIVE NAV LINK)
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
     4. COPY EMAIL TO CLIPBOARD
     ========================================================================== */
  if (copyEmailBtn && emailText) {
    let copyTimeout = null;
    const emailToCopy = emailText.textContent.trim();

    copyEmailBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers or environments
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
          if (copyBtnText) copyBtnText.textContent = 'Copy Email';
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
     5. CONSOLE WELCOME GREETING
     ========================================================================== */
  console.log(
    `%c VICKEY CHAUDHARY %c Aspiring Software Engineer \n Newton School of Technology • Ajeenkya DY Patil University, Pune (Class of 2030) `,
    'background: #38bdf8; color: #080808; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
    'background: #18181b; color: #f5f5f5; padding: 4px 8px; border-radius: 4px;'
  );
});
