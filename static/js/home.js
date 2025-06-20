document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    const authButtons = document.querySelector('.auth-buttons');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        authButtons.classList.toggle('active');
        this.innerHTML = navbar.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Instructor slider functionality
    const sliderTrack = document.querySelector('.slider-track');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const instructorCards = document.querySelectorAll('.instructor-card');
    
    let currentSlide = 0;
    const cardWidth = instructorCards[0].offsetWidth + 30; // width + gap
    let visibleCards = 4; // Default for large screens
    let slideInterval;
    
    // Calculate visible cards based on screen width
    function updateVisibleCards() {
        if (window.innerWidth >= 1200) {
            visibleCards = 4;
        } else if (window.innerWidth >= 992) {
            visibleCards = 3;
        } else if (window.innerWidth >= 768) {
            visibleCards = 2;
        } else {
            visibleCards = 1;
        }
    }
    
    // Move slider to current slide
    function moveSlider() {
        sliderTrack.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }
    
    // Auto slide every 3 seconds
    function startSlider() {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % (instructorCards.length - visibleCards + 1);
            moveSlider();
        }, 3000);
    }
    
    // Next slide
    nextArrow.addEventListener('click', function() {
        clearInterval(slideInterval);
        currentSlide = Math.min(currentSlide + 1, instructorCards.length - visibleCards);
        moveSlider();
        startSlider();
    });
    
    // Previous slide
    prevArrow.addEventListener('click', function() {
        clearInterval(slideInterval);
        currentSlide = Math.max(currentSlide - 1, 0);
        moveSlider();
        startSlider();
    });
    
    // Pause on hover
    sliderTrack.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    sliderTrack.addEventListener('mouseleave', startSlider);
    
    // Initialize
    updateVisibleCards();
    startSlider();
    
    // Update on resize
    window.addEventListener('resize', function() {
        updateVisibleCards();
        currentSlide = 0;
        moveSlider();
    });
});