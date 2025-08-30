// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    spans[0].classList.toggle('rotate-45');
    spans[0].classList.toggle('translate-y-1.5');
    spans[1].classList.toggle('opacity-0');
    spans[2].classList.toggle('-rotate-45');
    spans[2].classList.toggle('-translate-y-1.5');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        
        // Reset hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].classList.remove('rotate-45', 'translate-y-1.5');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45', '-translate-y-1.5');
    });
});

// Smooth scrolling for navigation links
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

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary-600');
        link.classList.add('text-gray-700');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-primary-600');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#navbar');
    if (window.scrollY > 100) {
        navbar.classList.remove('bg-white/95');
        navbar.classList.add('bg-white/98');
        navbar.classList.remove('shadow-lg');
        navbar.classList.add('shadow-xl');
    } else {
        navbar.classList.remove('bg-white/98');
        navbar.classList.add('bg-white/95');
        navbar.classList.remove('shadow-xl');
        navbar.classList.add('shadow-lg');
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.experience-item, .skill-category, .project-card').forEach(element => {
    observer.observe(element);
});

// Add hover effects for skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.classList.add('scale-105', '-translate-y-0.5', 'shadow-lg');
    });
    
    tag.addEventListener('mouseleave', function() {
        this.classList.remove('scale-105', '-translate-y-0.5', 'shadow-lg');
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Remove initial opacity-0 classes after load
    setTimeout(() => {
        document.querySelectorAll('.experience-item, .skill-category, .project-card').forEach(element => {
            element.classList.remove('opacity-0');
        });
    }, 100);
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #2563eb, #3b82f6);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeOut 0.5s ease 1s forwards;
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
    
    /* Smooth transitions for all interactive elements */
    .skill-tag, .btn-primary, .btn-secondary, .contact-item {
        transition: all 0.3s ease;
    }
    
    /* Hover effects for buttons */
    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
    }
    
    .btn-secondary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
    }
    
    /* Enhanced skill tag hover effects */
    .skill-tag:hover {
        transform: scale(1.05) translateY(-2px);
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
    }
    
    /* Contact item hover effects */
    .contact-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(loadingStyle);

// Add scroll-triggered animations for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Add CSS for section animations
const sectionAnimationStyle = document.createElement('style');
sectionAnimationStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    
    /* Stagger animation for skill categories */
    .skill-category:nth-child(1) { animation-delay: 0.1s; }
    .skill-category:nth-child(2) { animation-delay: 0.2s; }
    .skill-category:nth-child(3) { animation-delay: 0.3s; }
    .skill-category:nth-child(4) { animation-delay: 0.4s; }
    .skill-category:nth-child(5) { animation-delay: 0.5s; }
    
    /* Stagger animation for experience items */
    .experience-item:nth-child(1) { animation-delay: 0.1s; }
    .experience-item:nth-child(2) { animation-delay: 0.2s; }
    .experience-item:nth-child(3) { animation-delay: 0.3s; }
`;
document.head.appendChild(sectionAnimationStyle);

// Enhanced mobile menu functionality
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        
        // Reset hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].classList.remove('rotate-45', 'translate-y-1.5');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45', '-translate-y-1.5');
    }
});

// Add smooth reveal for project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Add parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#home');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add CSS for parallax
const parallaxStyle = document.createElement('style');
parallaxStyle.textContent = `
    #home {
        transition: transform 0.1s ease-out;
    }
    
    /* Enhanced button animations */
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .btn-primary::before, .btn-secondary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .btn-primary:hover::before, .btn-secondary:hover::before {
        left: 100%;
    }
`;
document.head.appendChild(parallaxStyle);
