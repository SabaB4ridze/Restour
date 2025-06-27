document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Header ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            // We add a check to not remove the dark background on the menu page
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else if (!header.classList.contains('header-dark-bg')) {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Hamburger Menu for Mobile (Corrected Logic) ---
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
            // This class prevents the main page from scrolling when the menu is open
            document.body.classList.toggle('no-scroll'); 
        });
    }
    
    // Close mobile menu when a link is clicked
    if (navLinks.length > 0 && navbar) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // --- Animate on Scroll ---
    const animatedElements = document.querySelectorAll('.animate');
    if (animatedElements.length > 0) {
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

});