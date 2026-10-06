/* ========================================================
   HIMANSHI BHAGNANI - PERSONAL PORTFOLIO
   Interactive Client-side Functionality
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------
  // 1. THEME TOGGLE (LIGHT / DARK)
  // --------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve saved theme or check user system preference
  const savedTheme = localStorage.getItem('hb_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersDark) {
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('hb_portfolio_theme', targetTheme);
    });
  }

  // --------------------------------------------------------
  // 2. MOBILE MENU TOGGLE
  // --------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      }
    });
  }

  // --------------------------------------------------------
  // 3. NAVBAR SCROLL EFFECT & BACK TO TOP BUTTON
  // --------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar shadow on scroll
    if (navbar) {
      if (scrollPos > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back-to-top visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // --------------------------------------------------------
  // 4. ACTIVE SECTION SCROLL SPY
  // --------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const handleScrollSpy = () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy);
  handleScrollSpy(); // Initial call on page load

  // --------------------------------------------------------
  // 5. CONTACT PLACEHOLDER HINT NOTIFICATION
  // --------------------------------------------------------
  const placeholderLinks = document.querySelectorAll('.placeholder-social');
  placeholderLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('✏️ Note: This is an editable placeholder. You can insert your actual profile URL in index.html!');
    });
  });

  // Simple, elegant toast utility
  function showToast(message) {
    let existingToast = document.querySelector('.portfolio-toast');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'portfolio-toast';
    toast.textContent = message;
    
    // Inline styling for self-contained toast
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      backgroundColor: '#0F172A',
      color: '#FFFFFF',
      padding: '12px 24px',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '600',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      zIndex: '10000',
      opacity: '0',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      maxWidth: '90vw',
      textAlign: 'center',
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // --------------------------------------------------------
  // 6. CONTACT FORM VALIDATION & HANDLING
  // --------------------------------------------------------
  const contactForm = document.getElementById('portfolio-contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const subjectInput = document.getElementById('user-subject');
    const messageInput = document.getElementById('user-message');

    const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateField = (input, condition) => {
      const parentGroup = input.closest('.form-group');
      if (!condition) {
        parentGroup.classList.add('has-error');
        return false;
      } else {
        parentGroup.classList.remove('has-error');
        return true;
      }
    };

    // Live validation on blur
    nameInput.addEventListener('blur', () => {
      validateField(nameInput, nameInput.value.trim().length > 0);
    });

    emailInput.addEventListener('blur', () => {
      validateField(emailInput, validateEmail(emailInput.value.trim()));
    });

    subjectInput.addEventListener('blur', () => {
      validateField(subjectInput, subjectInput.value.trim().length > 0);
    });

    messageInput.addEventListener('blur', () => {
      validateField(messageInput, messageInput.value.trim().length >= 5);
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length > 0);
      const isEmailValid = validateField(emailInput, validateEmail(emailInput.value.trim()));
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length > 0);
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 5);

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fill out all fields with valid information.';
        }
        return;
      }

      // Simulate sending with loading state
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      if (formStatus) {
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';
      }

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;

        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been prepared. (Form is in demo mode)';
        }

        contactForm.reset();

        setTimeout(() => {
          if (formStatus) {
            formStatus.style.display = 'none';
          }
        }, 5000);
      }, 900);
    });
  }

  // --------------------------------------------------------
  // 7. DYNAMIC COPYRIGHT YEAR
  // --------------------------------------------------------
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
