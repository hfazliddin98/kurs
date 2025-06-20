document.addEventListener('DOMContentLoaded', function() {
    // Parolni ko'rsatish/yashirish
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        });
    });

    // Forma validatsiyasi
    const loginForm = document.querySelector('.auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const username = this.querySelector('#username').value.trim();
            const password = this.querySelector('#password').value.trim();
            
            if (!username || !password) {
                e.preventDefault();
                alert('Iltimos, barcha maydonlarni to\'ldiring');
            }
        });
    }
});