// DV Visa - Logic & Animations
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 1. Header & Mobile Menu Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('ph-list');
        icon.classList.toggle('ph-x');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.add('ph-list');
            icon.classList.remove('ph-x');
        });
    });

    // 2. ScrollReveal Animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false 
    });

    // Sections Reveal
    sr.reveal('.hero-tagline', { delay: 300 });
    sr.reveal('.hero-content h1', { delay: 400 });
    sr.reveal('.hero-content p', { delay: 500 });
    sr.reveal('.hero-actions', { delay: 600, origin: 'left' });
    sr.reveal('.section-header', { interval: 200 });
    sr.reveal('.service-card', { interval: 150 });
    sr.reveal('.step-item', { interval: 200 });
    sr.reveal('.process-cta', { delay: 500, scale: 0.9 });
    sr.reveal('.footer-grid', { delay: 200 });

    console.log('DV Visa - Premium System Active');
});
