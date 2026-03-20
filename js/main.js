/* ============================================
   Libertas Tours — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobiele navigatie ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileClose) {
      mobileClose.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    // Sluit menu bij klikken op een link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Fade-in animaties ──
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));

  // ── Navigatie: huidige pagina markeren ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Scroll: navigatie achtergrond bij scrollen ──
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('bg-white', 'shadow-md');
        nav.classList.remove('bg-transparent');
        nav.querySelectorAll('.nav-link').forEach(l => {
          l.classList.remove('text-white');
          l.classList.add('text-gray-800');
        });
        const logo = nav.querySelector('.logo-text');
        if (logo) {
          logo.classList.remove('text-white');
          logo.classList.add('text-gray-800');
        }
      } else {
        nav.classList.remove('bg-white', 'shadow-md');
        nav.classList.add('bg-transparent');
        // Alleen op de homepage transparante nav
        if (currentPage === 'index.html' || currentPage === '') {
          nav.querySelectorAll('.nav-link').forEach(l => {
            l.classList.add('text-white');
            l.classList.remove('text-gray-800');
          });
          const logo = nav.querySelector('.logo-text');
          if (logo) {
            logo.classList.add('text-white');
            logo.classList.remove('text-gray-800');
          }
        }
      }
    });

    // Trigger scroll event on load
    window.dispatchEvent(new Event('scroll'));
  }

  // ── Smooth scroll voor anker-links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
