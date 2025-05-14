// Section Navigation
const sections = document.querySelectorAll('section');
let currentSection = 0;

// Initialize first section as active
sections[0].classList.add('active');

// Navigation buttons
const navButtons = document.createElement('div');
navButtons.className = 'nav-buttons';

const prevButton = document.createElement('button');
prevButton.className = 'nav-btn';
prevButton.innerHTML = '<i class="fa fa-arrow-up"></i>';
prevButton.addEventListener('click', () => navigateSection(-1));

const nextButton = document.createElement('button');
nextButton.className = 'nav-btn';
nextButton.innerHTML = '<i class="fa fa-arrow-down"></i>';
nextButton.addEventListener('click', () => navigateSection(1));

navButtons.appendChild(prevButton);
navButtons.appendChild(nextButton);
document.body.appendChild(navButtons);

// Navigation function
function navigateSection(direction) {
    sections[currentSection].classList.remove('active');
    currentSection = (currentSection + direction + sections.length) % sections.length;
    sections[currentSection].classList.add('active');
    
    // Update button visibility
    prevButton.style.display = currentSection === 0 ? 'none' : 'flex';
    nextButton.style.display = currentSection === sections.length - 1 ? 'none' : 'flex';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        navigateSection(-1);
    } else if (e.key === 'ArrowDown') {
        navigateSection(1);
    }
});

// Mobile Menu Toggle
const menuList = document.getElementById("menu");
const menuBtn = document.getElementById("menuicon");
const header = document.querySelector('header');

function toggleMenu() {
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
        menuList.style.maxHeight = "295px";
        menuBtn.className = "fa fa-times";
        header.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
        menuList.style.maxHeight = "0px";
        menuBtn.className = "fa fa-bars";
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!menuList.contains(event.target) && !menuBtn.contains(event.target)) {
        menuList.style.maxHeight = "0px";
        menuBtn.className = "fa fa-bars";
    }
});

// Update menu links to use section navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetIndex = Array.from(sections).findIndex(section => section.id === targetId);
        if (targetIndex !== -1) {
            sections[currentSection].classList.remove('active');
            currentSection = targetIndex;
            sections[currentSection].classList.add('active');
            updateNavButtons();
        }
    });
});

// Update navigation buttons visibility
function updateNavButtons() {
    prevButton.style.display = currentSection === 0 ? 'none' : 'flex';
    nextButton.style.display = currentSection === sections.length - 1 ? 'none' : 'flex';
}

// Initial button visibility
updateNavButtons();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        header.style.position = "fixed";
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.position = "fixed";
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "none";
    }
});

// Add animation to skills and projects on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skills-box, .project-box');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
};

// Initial setup
window.addEventListener('load', function() {
    // Set initial styles for animation
    document.querySelectorAll('.skills-box, .project-box').forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "all 0.5s ease";
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Form submission handling
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = Array.from(document.querySelectorAll('.section'));
    const navLinks = Array.from(document.querySelectorAll('nav ul li a'));
    const prevArrow = document.getElementById('prev-arrow');
    const nextArrow = document.getElementById('next-arrow');
    const dotsContainer = document.querySelector('.dots');
    let current = 0;

    // Create dots
    dotsContainer.innerHTML = '';
    sections.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => showSection(i));
        dotsContainer.appendChild(dot);
    });
    const dots = Array.from(document.querySelectorAll('.dot'));

    function showSection(idx) {
        sections.forEach((sec, i) => {
            if (i === idx) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
        navLinks.forEach((link, i) => {
            if (i === idx) link.classList.add('active');
            else link.classList.remove('active');
        });
        dots.forEach((dot, i) => {
            if (i === idx) dot.classList.add('active');
            else dot.classList.remove('active');
        });
        prevArrow.disabled = idx === 0;
        nextArrow.disabled = idx === sections.length - 1;
        current = idx;
    }

    // Arrow navigation
    prevArrow.onclick = function () {
        if (current > 0) showSection(current - 1);
    };
    nextArrow.onclick = function () {
        if (current < sections.length - 1) showSection(current + 1);
    };

    // Navbar link logic
    navLinks.forEach((link, i) => {
        link.onclick = function (e) {
            e.preventDefault();
            showSection(i);
        };
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            if (current < sections.length - 1) showSection(current + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            if (current > 0) showSection(current - 1);
        }
    });

    // Show first section on load
    showSection(0);

    // Contact form (unchanged)
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
}); 