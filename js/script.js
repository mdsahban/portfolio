// Section Navigation
const sections = document.querySelectorAll('section');
let currentSection = 0;

// Initialize first section as active
sections[0].classList.add('active');

// Navigation function
function navigateSection(direction) {
    sections[currentSection].classList.remove('active');
    currentSection = (currentSection + direction + sections.length) % sections.length;
    sections[currentSection].classList.add('active');
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        navigateSection(-1);
    } else if (e.key === 'ArrowDown') {
        navigateSection(1);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu after click
        const menuList = document.getElementById('menu');
        const menuBtn = document.getElementById('menuicon');
        if (menuList && menuBtn) {
            menuList.style.maxHeight = '0px';
            menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
        }
    });
});

// Mobile Menu Toggle
(function () {
    const menuList = document.getElementById('menu');
    const menuBtn = document.getElementById('menuicon');
    if (!menuList || !menuBtn) return;

    // Initialize closed state
    menuList.style.maxHeight = '0px';

    menuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isClosed = menuList.style.maxHeight === '0px' || menuList.style.maxHeight === '';
        if (isClosed) {
            menuList.style.maxHeight = '295px';
            menuBtn.innerHTML = '<i class="fa fa-times"></i>';
        } else {
            menuList.style.maxHeight = '0px';
            menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!menuList.contains(event.target) && !menuBtn.contains(event.target)) {
            menuList.style.maxHeight = '0px';
            menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
        }
    });
})();

// Header scroll effect
(function () {
    const header = document.querySelector('header');
    if (!header) return;
    const applyScrolled = () => {
        if (window.scrollY > 150) {
            header.style.boxShadow = '0 2px 16px 0 rgba(30,32,60,0.25)';
        } else {
            header.style.boxShadow = '0 2px 16px 0 rgba(30,32,60,0.13)';
        }
    };
    window.addEventListener('scroll', applyScrolled);
    applyScrolled();
})();

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

// Contact form submission handling with Web3Forms
(function () {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.send-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        const formMessage = document.getElementById('form-message');
        const formData = new FormData(this);

        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';

        try {
            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Success message
                formMessage.style.display = 'block';
                formMessage.className = 'form-message success';
                formMessage.textContent = '✓ Thank you! Your message has been sent successfully.';
                
                // Reset form
                this.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                // Error message
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            // Error message
            formMessage.style.display = 'block';
            formMessage.className = 'form-message error';
            formMessage.textContent = '✗ Error: ' + (error.message || 'Something went wrong. Please try again.');
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'flex';
            btnLoader.style.display = 'none';
        }
    });
})();