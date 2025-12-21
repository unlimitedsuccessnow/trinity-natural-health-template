/**
 * Trinity Natural Health - Template JavaScript
 * Handles interactive features, mobile menu, FAQ accordions, and smooth scrolling
 */

(function() {
    'use strict';

    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');

            // Accessibility: Update aria-expanded
            const isExpanded = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ========================================
    // FAQ ACCORDION
    // ========================================

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');

                // Accessibility: Update aria-expanded
                const isExpanded = item.classList.contains('active');
                question.setAttribute('aria-expanded', isExpanded);
            });

            // Set initial aria-expanded
            question.setAttribute('aria-expanded', 'false');
        }
    });

    // ========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ========================================

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Don't prevent default for empty hash
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================

    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow when scrolled
            if (currentScroll > 50) {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
            }

            lastScroll = currentScroll;
        });
    }

    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================

    // Fade in sections as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // ========================================
    // PHONE NUMBER CLICK TRACKING
    // ========================================

    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track phone click event (if you have analytics)
            console.log('Phone number clicked:', this.getAttribute('href'));
            // Example: gtag('event', 'phone_click', { 'event_category': 'contact' });
        });
    });

    // ========================================
    // EMAIL LINK CLICK TRACKING
    // ========================================

    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track email click event (if you have analytics)
            console.log('Email link clicked:', this.getAttribute('href'));
            // Example: gtag('event', 'email_click', { 'event_category': 'contact' });
        });
    });

    // ========================================
    // CTA BUTTON CLICK TRACKING
    // ========================================

    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track CTA click event (if you have analytics)
            console.log('CTA button clicked:', this.textContent.trim());
            // Example: gtag('event', 'cta_click', { 'event_category': 'conversion', 'event_label': this.textContent.trim() });
        });
    });

    // ========================================
    // LAZY LOADING IMAGES (if needed)
    // ========================================

    // Modern browsers support native lazy loading via loading="lazy" attribute
    // No additional JavaScript needed - the browser handles it automatically
    if (!('loading' in HTMLImageElement.prototype)) {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ========================================
    // ACCESSIBILITY: KEYBOARD NAVIGATION
    // ========================================

    // Allow keyboard navigation for FAQ items
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        }
    });

    // ========================================
    // PRINT FRIENDLY
    // ========================================

    window.addEventListener('beforeprint', function() {
        // Expand all FAQ items before printing
        faqItems.forEach(item => {
            item.classList.add('active');
        });
    });

    window.addEventListener('afterprint', function() {
        // Collapse FAQ items after printing
        faqItems.forEach(item => {
            item.classList.remove('active');
        });
    });

    // ========================================
    // PERFORMANCE: DEBOUNCE SCROLL EVENTS
    // ========================================

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Use debounced scroll handler for performance
    const debouncedScrollHandler = debounce(function() {
        // Any scroll-based functionality here
    }, 100);

    window.addEventListener('scroll', debouncedScrollHandler);

    // ========================================
    // CONSOLE MESSAGE
    // ========================================

    console.log('%c🌿 Trinity Natural Health - Website Template', 'color: #2D5F5D; font-size: 16px; font-weight: bold;');
    console.log('%cTemplate ready and optimized for performance and accessibility.', 'color: #8B7355; font-size: 12px;');

})();
