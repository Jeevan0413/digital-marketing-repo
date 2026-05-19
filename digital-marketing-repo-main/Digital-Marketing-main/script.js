// ===================================
// Digital Marketing Website - Animations
// ===================================

// --- 1. PAGE LOADING TRANSITION ---
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease-in-out';

    // Fade in the page
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// --- 2. SCROLL REVEAL ANIMATIONS ---
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after revealing (one-time animation)
            // revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with .reveal class
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));
});

// --- 3. STAGGERED GRID ANIMATIONS ---
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('visible');
                }, index * 100); // 100ms delay between each item
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => staggerObserver.observe(container));
});

// --- 4. HEADER SCROLL EFFECT ---
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// --- 5. SMOOTH SCROLL FOR ANCHOR LINKS ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// --- 6. BUTTON HOVER EFFECTS (Enhanced) ---
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// --- 7. SERVICE CARDS HOVER TILT EFFECT (Optional Enhancement) ---
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-18px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
});

// --- 8. PARALLAX EFFECT FOR IMAGES (Optional) ---
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax-element');

    parallaxElements.forEach(element => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        element.style.transform = `translateY(${rate}px)`;
    });
});

// --- 9. COUNTER ANIMATION FOR STATS ---
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// Observe stat numbers and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            if (target) {
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('[data-target]');
    statNumbers.forEach(stat => statsObserver.observe(stat));
});

// --- 10. MOBILE MENU TOGGLE ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// ===================================
// ADVANCED ANIMATIONS
// ===================================

// --- 11. SCROLL PROGRESS INDICATOR ---
document.addEventListener('DOMContentLoaded', () => {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// --- 12. BUTTON RIPPLE EFFECT ---
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Remove existing ripples
            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) {
                existingRipple.remove();
            }

            // Create ripple element
            const ripple = document.createElement('span');
            ripple.className = 'ripple';

            // Get button dimensions
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            // Set ripple position and size
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            // Add ripple to button
            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// --- 13. MAGNETIC CURSOR EFFECT ---
document.addEventListener('DOMContentLoaded', () => {
    const magneticElements = document.querySelectorAll('.magnetic');

    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Apply magnetic pull (subtle movement towards cursor)
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });

        element.addEventListener('mouseleave', function () {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
    });
});

// --- 14. PROGRESS BAR ANIMATION ---
const progressBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressFill = entry.target.querySelector('.progress-fill');
            const targetWidth = entry.target.getAttribute('data-progress');

            if (progressFill && targetWidth) {
                setTimeout(() => {
                    progressFill.style.width = targetWidth + '%';
                }, 200);
                progressBarObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => progressBarObserver.observe(bar));
});

// --- 15. TEXT TYPING EFFECT ---
function typeText(element, text, speed = 100) {
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

// Auto-apply typing effect to elements with .typing-text class
document.addEventListener('DOMContentLoaded', () => {
    const typingElements = document.querySelectorAll('.typing-text');

    const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.getAttribute('data-text') || entry.target.textContent;
                typeText(entry.target, text);
                typingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    typingElements.forEach(el => typingObserver.observe(el));
});

// --- 16. ANIMATED BACKGROUND GRADIENT ---
document.addEventListener('DOMContentLoaded', () => {
    const gradientBgs = document.querySelectorAll('.animated-gradient-bg, .mesh-gradient');

    // Add subtle mouse movement effect
    gradientBgs.forEach(bg => {
        bg.addEventListener('mousemove', (e) => {
            const rect = bg.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            bg.style.backgroundPosition = `${x}% ${y}%`;
        });
    });
});

// --- 17. ENHANCED SCROLL ANIMATIONS ---
// Add bounce effect to elements when they appear
const bounceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('bounce');
            setTimeout(() => {
                entry.target.classList.remove('bounce');
            }, 2000);
            bounceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.7 });

document.addEventListener('DOMContentLoaded', () => {
    const bounceElements = document.querySelectorAll('.feature-icon-box, .service-icon');
    bounceElements.forEach(el => bounceObserver.observe(el));
});

// --- 18. GLOW EFFECT ON SCROLL ---
const glowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('glow-on-hover');
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
    const glowElements = document.querySelectorAll('.service-card, .feature-item');
    glowElements.forEach(el => glowObserver.observe(el));
});

// --- 19. FLOATING ANIMATION FOR IMAGES ---
document.addEventListener('DOMContentLoaded', () => {
    const heroImages = document.querySelectorAll('.hero-image img, .about-image img');
    heroImages.forEach(img => {
        img.classList.add('floating');
    });
});

// --- 20. SMOOTH REVEAL FOR TEXT ELEMENTS ---
const textRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('text-reveal');
            textRevealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('h1, h2, .section-title');
    headings.forEach(heading => textRevealObserver.observe(heading));
});

// --- 21. PARALLAX SCROLL EFFECT (Enhanced) ---
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-element');

    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.3;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// --- 22. CARD HOVER EFFECTS ---
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.blog-card, .review-card, .team-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
});

// --- 23. GRADIENT TEXT ANIMATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Auto-apply gradient text to highlighted text
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.classList.add('gradient-text');
    });
});

// --- 24. LOADING ANIMATION FOR IMAGES ---
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';

        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });

        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// --- 25. INTERSECTION OBSERVER FOR ANIMATIONS ---
// Universal animation trigger
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationType = entry.target.getAttribute('data-animation');
            if (animationType) {
                entry.target.classList.add(animationType);
                animationObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.2 });

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(el => animationObserver.observe(el));
});

// --- 26. PERFORMANCE OPTIMIZATION ---
// Debounce function for scroll events
function debounce(func, wait = 10) {
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

// Apply debounce to scroll-heavy animations
const debouncedScroll = debounce(() => {
    // Any additional scroll-based animations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

console.log('🎨 Advanced animations loaded successfully!');

// --- 27. WHATSAPP FLOATING BUTTON INJECTION ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if button already exists to prevent duplicates
    if (!document.querySelector('.whatsapp-float')) {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = 'https://wa.me/1234567890'; // Replace with actual number
        whatsappBtn.className = 'whatsapp-float';
        whatsappBtn.target = '_blank';
        whatsappBtn.setAttribute('aria-label', 'Chat with us on WhatsApp');
        whatsappBtn.innerHTML = '<i class="fa-brands fa-whatsapp whatsapp-icon"></i>';

        document.body.appendChild(whatsappBtn);
    }
});

// --- 28. SERVICES DROPDOWN LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown .dropbtn');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
            // Only apply click-to-toggle on mobile/tablet view
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dropdownBtn.parentElement.classList.toggle('active');
            }
        });
    }
});

// --- 29. INFINITE SERVICES CAROUSEL ---
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.services-grid');
    const container = document.querySelector('.services-slider-container');
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');

    if (!track || !container || !prevBtn || !nextBtn) return;

    // Use a small timeout to ensure layout has settled and observer has run
    setTimeout(() => {
        const cards = Array.from(track.children);
        if (cards.length === 0) return;

        // Ensure original cards are visible (important for clones)
        cards.forEach(card => card.classList.add('visible'));

        const cardWidth = cards[0].offsetWidth;
        const style = window.getComputedStyle(track);
        const gap = parseInt(style.gap) || 0;
        let itemWidth = cardWidth + gap;

        const totalRealItems = cards.length;
        const clonesToCreate = totalRealItems;

        // Create clones
        const firstClones = cards.map(card => {
            const clone = card.cloneNode(true);
            clone.classList.add('clone', 'visible');
            clone.removeAttribute('id');
            return clone;
        });

        const lastClones = cards.map(card => {
            const clone = card.cloneNode(true);
            clone.classList.add('clone', 'visible');
            clone.removeAttribute('id');
            return clone;
        });

        // Append/Prepend clones
        firstClones.forEach(clone => track.appendChild(clone));
        lastClones.reverse().forEach(clone => track.prepend(clone));

        // State
        let currentIndex = clonesToCreate;
        let isTransitioning = false;

        const updatePosition = (index, animate = true) => {
            if (animate) {
                track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            } else {
                track.style.transition = 'none';
            }
            const translateX = -(index * itemWidth);
            track.style.transform = `translateX(${translateX}px)`;
        };

        // Initial Position
        updatePosition(currentIndex, false);

        const moveSlide = (direction) => {
            if (isTransitioning) return;
            isTransitioning = true;

            if (direction === 'next') {
                currentIndex++;
            } else {
                currentIndex--;
            }
            updatePosition(currentIndex);
        };

        // Infinite Loop Reset
        track.addEventListener('transitionend', () => {
            isTransitioning = false;

            const totalWidth = totalRealItems + clonesToCreate;
            if (currentIndex >= totalWidth) {
                currentIndex = clonesToCreate;
                updatePosition(currentIndex, false);
            }

            if (currentIndex < clonesToCreate) {
                currentIndex = totalRealItems + clonesToCreate - 1;
                updatePosition(currentIndex, false);
            }
        });

        // Listeners
        nextBtn.addEventListener('click', () => {
            moveSlide('next');
            resetAutoPlay();
        });

        prevBtn.addEventListener('click', () => {
            moveSlide('prev');
            resetAutoPlay();
        });

        // Auto Play
        let autoPlayInterval;
        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => moveSlide('next'), 4000);
        };
        const stopAutoPlay = () => clearInterval(autoPlayInterval);
        const resetAutoPlay = () => { stopAutoPlay(); startAutoPlay(); };

        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);

        startAutoPlay();

        // Handle Resize
        window.addEventListener('resize', () => {
            const newCardWidth = cards[0].offsetWidth;
            itemWidth = newCardWidth + gap;
            track.style.transition = 'none';
            updatePosition(currentIndex, false);
        });

    }, 200);
});

// --- 30. MOUSE-MOVE PARALLAX EFFECT (HERO) - PERFECTED ---
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('#home');
    const layers = document.querySelectorAll('.parallax-layer, .parallax-shape');

    if (!hero || layers.length === 0) return;

    // Detect if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; // Disable on mobile for UX

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const lerpFactor = 0.08;

    hero.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = hero.getBoundingClientRect();
        targetX = (e.clientX - left - width / 2) / (width / 2);
        targetY = (e.clientY - top - height / 2) / (height / 2);
    });

    hero.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
    });

    const animate = () => {
        currentX += (targetX - currentX) * lerpFactor;
        currentY += (targetY - currentY) * lerpFactor;

        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed')) || 0.05;
            const xOffset = currentX * speed * 800;
            const yOffset = currentY * speed * 800;

            if (layer.classList.contains('hero-image')) {
                const rotationX = -currentY * 15;
                const rotationY = currentX * 15;
                layer.style.transform = `translate(${xOffset}px, ${yOffset}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            } else {
                layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            }
        });

        requestAnimationFrame(animate);
    };

    animate();
});

// --- 31. FAQ ACCORDION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionSize = item.querySelector('.faq-question');

        questionSize.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items (Professional behavior)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// --- 32. SEARCH FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-txt');
    const searchBtn = document.querySelector('.search-btn');

    if (!searchInput || !searchBtn) return;

    // Keyword to URL Mapping
    const searchMap = {
        'home': 'home.html',
        'about': 'about.html',
        'service': 'services.html',
        'services': 'services.html',
        'seo': 'seo-optimization.html',
        'optimization': 'seo-optimization.html',
        'social': 'social-media-marketing.html',
        'media': 'social-media-marketing.html',
        'marketing': 'services.html',
        'ppc': 'ppc-advertising.html',
        'pay per click': 'ppc-advertising.html',
        'ads': 'ppc-advertising.html',
        'content': 'content-marketing.html',
        'blog': 'blog.html',
        'news': 'blog.html',
        'contact': 'contact.html',
        'help': 'contact.html',
        'support': 'contact.html',
        'email': 'email-marketing.html',
        'web': 'web-design.html',
        'design': 'web-design.html',
        'pricing': 'services.html#pricing',
        'team': 'about.html#team',
        'privacy': 'privacy-policy.html',
        'terms': 'terms-and-conditions.html',
        'cookie': 'cookie-policy.html'
    };

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();

        if (query === '') return;

        let foundPage = null;

        // 1. Check for keyword matches in the map
        for (const [key, url] of Object.entries(searchMap)) {
            if (query.includes(key)) {
                foundPage = url;
                break;
            }
        }

        if (foundPage) {
            window.location.href = foundPage;
        } else {
            // 2. Fallback: Search for text on the current page
            const bodyText = document.body.innerText.toLowerCase();
            if (bodyText.includes(query)) {
                // Find the first element containing the query
                const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                let node;
                while (node = walker.nextNode()) {
                    if (node.textContent.toLowerCase().includes(query)) {
                        node.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // Highlight briefly
                        const originalBg = node.parentElement.style.backgroundColor;
                        node.parentElement.style.backgroundColor = 'rgba(249, 115, 22, 0.2)';
                        setTimeout(() => {
                            node.parentElement.style.backgroundColor = originalBg;
                        }, 2000);
                        return; // Found on current page
                    }
                }
            }

            // 3. Last Resort
            alert('No specific results found for "' + query + '". Try terms like "SEO", "About", or "Contact".');
        }
    };

    // Event Listener for Enter Key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // Event Listener for Button Click
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        performSearch();
    });
});

// --- 33. BACK TO TOP BUTTON LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if button already exists to prevent duplicates
    if (!document.querySelector('.back-to-top')) {
        const backToTopBtn = document.createElement('div');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i><span>Back to top</span>';
        document.body.appendChild(backToTopBtn);

        // Show/Hide on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        // Click to scroll top
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
// --- 33. LETTER PULL UP ANIMATION ---
document.addEventListener('DOMContentLoaded', () => {
    const pullUpElements = document.querySelectorAll('.letter-pull-up');

    pullUpElements.forEach(el => {
        const text = el.textContent.trim();
        el.textContent = ''; // Clear original text

        // Split text into letters and wrap them in spans
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            if (char === ' ') {
                span.className = 'space';
                span.innerHTML = '&nbsp;';
            } else {
                span.className = 'letter';
                span.textContent = char;
                span.style.transitionDelay = `${index * 0.05}s`;
            }
            el.appendChild(span);
        });

        // Use Intersection Observer to trigger animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('animate');
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);
    });
});

// --- 34. MOBILE MENU TOGGLE ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.pill-nav .nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            // Toggle icon from bars to X
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close menu when a standard link is clicked
        const links = navLinks.querySelectorAll('a:not(.dropbtn)');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});

// --- 35. FUNNEL INTERACTION LOGIC (Our Journey Section) ---
document.addEventListener('DOMContentLoaded', () => {
    const funnelItems = document.querySelectorAll('.funnel-item');
    const funnelStages = document.querySelectorAll('.funnel-stage');

    if (funnelItems.length > 0 && funnelStages.length > 0) {
        funnelStages.forEach((stage, index) => {
            stage.addEventListener('mouseenter', () => {
                // Update menu items
                funnelItems.forEach(i => i.classList.remove('active'));
                const targetItem = document.querySelector(`.funnel-item[data-index="${index}"]`);
                if (targetItem) targetItem.classList.add('active');

                // Update funnel stages
                funnelStages.forEach(s => s.classList.remove('active'));
                stage.classList.add('active');
            });
        });
    }
});
