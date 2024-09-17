// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Prevent default anchor click behavior
        e.preventDefault();
        // Scroll to the target element
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change Navbar Style on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    // Add or remove the 'scrolled' class based on scroll position
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate Sections on Scroll using Intersection Observer API
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    threshold: 0.1,
};

const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Toggle Navigation Menu on Mobile (Optional)
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburgerMenu.classList.toggle('toggle');
});
