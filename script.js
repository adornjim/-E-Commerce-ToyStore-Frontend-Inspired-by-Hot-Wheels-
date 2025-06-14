// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const elementsToAnimate = document.querySelectorAll('.category, .product-card, .theme-tags span');
    elementsToAnimate.forEach((element, index) => {
        if (index % 3 === 0) {
            element.classList.add('fade-in');
        } else if (index % 3 === 1) {
            element.classList.add('fade-in-left');
        } else {
            element.classList.add('fade-in-right');
        }
        observer.observe(element);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});
