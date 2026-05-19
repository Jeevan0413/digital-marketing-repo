/**
 * 3D Carousel for Client Feedback
 * Translated from React to Vanilla JS
 */

class ThreeDCarousel {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.wheel = this.container.querySelector('.carousel-wheel');
        this.cards = Array.from(this.wheel.querySelectorAll('.carousel-card'));

        // Configuration
        this.radius = options.radius || 300;
        this.tiltSensitivity = options.tiltSensitivity || 10;
        this.dragSensitivity = options.dragSensitivity || 0.5;
        this.inertiaFriction = options.inertiaFriction || 0.95;
        this.autoSpinSpeed = options.autoSpinSpeed || 0.08;
        this.idleTimeout = options.idleTimeout || 2000;

        // State
        this.rotation = 0;
        this.tilt = 0;
        this.targetTilt = 0;
        this.velocity = 0;
        this.isDragging = false;
        this.dragStart = 0;
        this.initialRotation = 0;
        this.lastInteraction = Date.now();
        this.animationFrame = null;

        this.init();
    }

    init() {
        this.setupCards();
        this.addEventListeners();
        this.animate();
    }

    setupCards() {
        const count = this.cards.length;
        this.cards.forEach((card, idx) => {
            const angle = (idx * 360) / count;
            card.style.transform = `rotateY(${angle}deg) translateZ(${this.radius}px)`;
        });
    }

    addEventListeners() {
        // Tilt Effect
        window.addEventListener('mousemove', (e) => {
            if (this.isDragging) return;
            this.lastInteraction = Date.now();

            const rect = this.container.getBoundingClientRect();
            const mouseY = e.clientY - rect.top;
            const normalizedY = (mouseY / rect.height - 0.5) * 2;
            this.targetTilt = -normalizedY * this.tiltSensitivity;
        });

        // Drag Events
        const handleStart = (clientX) => {
            this.lastInteraction = Date.now();
            this.isDragging = true;
            this.velocity = 0;
            this.dragStart = clientX;
            this.initialRotation = this.rotation;
            this.container.style.cursor = 'grabbing';
        };

        const handleMove = (clientX) => {
            if (!this.isDragging) return;
            this.lastInteraction = Date.now();
            const deltaX = clientX - this.dragStart;
            const newRotation = this.initialRotation + deltaX * this.dragSensitivity;
            this.velocity = newRotation - this.rotation;
            this.rotation = newRotation;
        };

        const handleEnd = () => {
            this.isDragging = false;
            this.lastInteraction = Date.now();
            this.container.style.cursor = 'grab';
        };

        this.container.addEventListener('mousedown', (e) => handleStart(e.clientX));
        window.addEventListener('mousemove', (e) => handleMove(e.clientX));
        window.addEventListener('mouseup', handleEnd);

        this.container.addEventListener('touchstart', (e) => handleStart(e.touches[0].clientX));
        window.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX));
        window.addEventListener('touchend', handleEnd);
    }

    animate() {
        if (!this.isDragging) {
            if (Math.abs(this.velocity) > 0.01) {
                this.rotation += this.velocity;
                this.velocity *= this.inertiaFriction;
            } else if (Date.now() - this.lastInteraction > this.idleTimeout) {
                this.rotation += this.autoSpinSpeed;
            }
        }

        this.tilt += (this.targetTilt - this.tilt) * 0.1;

        if (this.wheel) {
            this.wheel.style.transform = `rotateX(${this.tilt}deg) rotateY(${this.rotation}deg)`;
        }

        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThreeDCarousel('carousel-3d-container', {
        radius: 800,
        tiltSensitivity: 15
    });
});
