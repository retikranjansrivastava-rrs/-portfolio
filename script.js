// ==================== SMOOTH SCROLLING ====================
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

// ==================== SECTION ANIMATIONS ON SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// ==================== TERMINAL ANIMATION ====================
window.addEventListener('load', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Animate terminal dots
    const dots = document.querySelectorAll('.terminal-dot');
    dots.forEach((dot, index) => {
        setTimeout(() => {
            dot.style.animation = 'pulse 2s infinite';
        }, index * 200);
    });
});

// ==================== SKILL CARD STAGGER ANIMATION ====================
const skillCards = document.querySelectorAll('.skill-category');
skillCards.forEach((card, index) => {
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});

// ==================== PROJECT CARD HOVER EFFECTS ====================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== EXPERIENCE CARD ANIMATIONS ====================
const experienceCards = document.querySelectorAll('.experience-card');
experienceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
    }, index * 150);
});

// ==================== SCROLL PROGRESS ====================
let scrollProgress = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress = (scrollTop / scrollHeight) * 100;
    
    // Update signal strip gradient based on scroll
    const signalStrip = document.querySelector('.signal-strip');
    if (signalStrip) {
        signalStrip.style.background = `linear-gradient(90deg, 
            var(--signal-red) 0%, 
            var(--signal-yellow) ${scrollProgress}%, 
            var(--signal-green) 100%)`;
    }
});

// ==================== TYPING EFFECT FOR H1 ====================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect on load (optional - uncomment to enable)
// const h1 = document.querySelector('h1');
// if (h1) {
//     const originalText = h1.textContent;
//     typeWriter(h1, originalText, 50);
// }

// ==================== TERMINAL CURSOR BLINK ====================
const h1 = document.querySelector('h1');
if (h1) {
    setInterval(() => {
        const cursor = h1.querySelector('::after');
        // Cursor blinking is handled by CSS animation
    }, 1000);
}

// ==================== CONTACT LINK RIPPLE EFFECT ====================
const contactLinks = document.querySelectorAll('.contact-links a');
contactLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(0, 255, 136, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== DYNAMIC YEAR IN FOOTER ====================
const footer = document.querySelector('footer p:last-child');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.textContent = footer.textContent.replace('2026', currentYear);
}

// ==================== CONSOLE EASTER EGG ====================
console.log('%c█████╗ ███████╗████████╗██████╗ ██╗██╗  ██╗', 'color: #00ff88; font-weight: bold;');
console.log('%c██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║██║ ██╔╝', 'color: #00ff88; font-weight: bold;');
console.log('%c██████╔╝█████╗     ██║   ██████╔╝██║█████╔╝ ', 'color: #00ff88; font-weight: bold;');
console.log('%c██╔══██╗██╔══╝     ██║   ██╔══██╗██║██╔═██╗ ', 'color: #00ff88; font-weight: bold;');
console.log('%c██║  ██║███████╗   ██║   ██║  ██║██║██║  ██╗', 'color: #00ff88; font-weight: bold;');
console.log('%c╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝', 'color: #00ff88; font-weight: bold;');
console.log('%c🚀 Welcome to my portfolio!', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
console.log('%c💻 Built with HTML, CSS, and JavaScript', 'color: #8899aa; font-size: 12px;');
console.log('%c🔧 Interested in the code? Check out my GitHub!', 'color: #ffcc00; font-size: 12px;');

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    // Press 'H' to go home
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press 'E' to go to experience section
    if (e.key === 'e' || e.key === 'E') {
        const expSection = document.querySelector('section:nth-of-type(2)');
        if (expSection) {
            expSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press 'P' to go to projects section
    if (e.key === 'p' || e.key === 'P') {
        const projSection = document.querySelector('section:nth-of-type(3)');
        if (projSection) {
            projSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
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

// Apply debounce to scroll handler
const debouncedScroll = debounce(() => {
    // Scroll optimizations here
}, 50);

window.addEventListener('scroll', debouncedScroll);

// ==================== LOADING STATE ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('✅ Portfolio loaded successfully!');
});