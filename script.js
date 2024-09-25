// Toggle Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
const links = document.querySelectorAll('.nav-link');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
        top: targetSection.offsetTop - 60, // Adjust for fixed navbar
        behavior: 'smooth'
    });

    // Close the menu on mobile after clicking
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// Contact Form Submission (Placeholder)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});
