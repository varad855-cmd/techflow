// 1. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'light' 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
});

// 2. Smooth Scrolling for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Contact Form Validation
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple Email Regex Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name.length < 3) {
        feedback.innerText = "Name must be at least 3 characters.";
        feedback.style.color = "red";
    } else if (!email.match(emailPattern)) {
        feedback.innerText = "Please enter a valid email address.";
        feedback.style.color = "red";
    } else {
        feedback.innerText = "Thank you! We will contact you soon.";
        feedback.style.color = "green";
        contactForm.reset();
    }
});

// 4. Scroll Reveal Animations (Basic)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        if (top >= offset) {
            sec.classList.add('show-animation');
        }
    });
});