document.addEventListener('DOMContentLoaded', function() {
    // Mobile menyu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (mobileMenuBtn && navbar && authButtons) {
        mobileMenuBtn.addEventListener('click', function() {
            navbar.classList.toggle('active');
            authButtons.classList.toggle('active');
            
            // Iconni o'zgartirish
            const icon = this.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Header scroll effekti
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Dastlabki holatni tekshirish
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        }
    }
});