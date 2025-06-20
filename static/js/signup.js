document.addEventListener('DOMContentLoaded', function() {
    // Parolni ko'rsatish/yashirish funksiyalari
    const togglePassword1 = document.getElementById('togglePassword1');
    const password1 = document.getElementById('password1');
    const togglePassword2 = document.getElementById('togglePassword2');
    const password2 = document.getElementById('password2');
    
    // Birinchi parol maydoni uchun
    if (togglePassword1 && password1) {
        togglePassword1.addEventListener('click', function() {
            const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
            password1.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }
    
    // Ikkinchi parol maydoni uchun
    if (togglePassword2 && password2) {
        togglePassword2.addEventListener('click', function() {
            const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
            password2.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }
    
    // Formani yuborish
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Parollarni solishtirish
            if (password1.value !== password2.value) {
                alert('Parollar mos kelmadi! Iltimos, bir xil parol kiriting.');
                return;
            }
            
            // Parol uzunligini tekshirish
            if (password1.value.length < 8) {
                alert('Parol kamida 8 ta belgidan iborat bo\'lishi kerak!');
                return;
            }
            
            // Agar hammasi to'g'ri bo'lsa
            alert('Forma muvaffaqiyatli yuborildi!');
            // Bu yerda haqiqiy so'rov yuborishingiz mumkin
        });
    }
});