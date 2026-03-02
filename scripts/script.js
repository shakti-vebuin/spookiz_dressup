// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const carouselTrack = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Event listeners for carousel
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

// Auto-play carousel
let autoplayInterval = setInterval(nextSlide, 3000);

// Pause autoplay on hover
const carouselWrapper = document.querySelector('.carousel-wrapper');
carouselWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

carouselWrapper.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 3000);
});

// Video Modal functionality
const videoModal = document.getElementById('videoModal');
const watchTrailerBtn = document.getElementById('watchTrailerBtn');
const closeModalBtn = document.getElementById('closeModal');
const modalOverlay = document.querySelector('.modal-overlay');
const videoContainer = document.getElementById('videoContainer');

function openVideoModal() {
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Load YouTube video
    videoContainer.innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/ju9Eyg2-VUw?si=b_6NLgVnbBH2HGeP"
            title="Spookiz Dress-Up Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    `;
}

function closeVideoModal() {
    videoModal.classList.remove('active');
    document.body.style.overflow = 'unset';
    
    // Remove video to stop playback
    videoContainer.innerHTML = '';
}

watchTrailerBtn.addEventListener('click', openVideoModal);
closeModalBtn.addEventListener('click', closeVideoModal);
modalOverlay.addEventListener('click', closeVideoModal);

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});

// Smooth scroll for footer links
const footerLinks = document.querySelectorAll('.footer-links a[href^="#"], .footer-links button');
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateElements = document.querySelectorAll('.feature-card, .character-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});
