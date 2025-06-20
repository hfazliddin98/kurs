// Formalar almashinuvi
        function showSignup() {
            document.getElementById('login-box').style.display = 'none';
            document.getElementById('signup-box').style.display = 'block';
            return false;
        }
        
        function showLogin() {
            document.getElementById('signup-box').style.display = 'none';
            document.getElementById('login-box').style.display = 'block';
            return false;
        }
        
        // Parolni ko'rsatish/yashirish
        function togglePassword(id) {
            const input = document.getElementById(id);
            const icon = input.nextElementSibling.querySelector('i');
            
            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
            
            // Inputga fokus qaytarish
            input.focus();
        }
        
        // Xabar ko'rsatish
        function showAlert(message, type) {
            const alertBox = document.getElementById('alert-box');
            const alertMessage = document.getElementById('alert-message');
            const icon = type === 'danger' ? 'exclamation-circle' : 'check-circle';
            
            alertBox.className = `alert alert-${type}`;
            alertBox.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
            alertBox.style.display = 'flex';
        }
        
        // Xatolikni ko'rsatish
        function showError(fieldId, message) {
            const errorElement = document.getElementById(`${fieldId}-error`);
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        // Xatolikni yashirish
        function hideError(fieldId) {
            document.getElementById(`${fieldId}-error`).style.display = 'none';
        }
        
        // Barcha xatoliklarni yashirish
        function hideAllErrors() {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(el => el.style.display = 'none');
            document.getElementById('alert-box').style.display = 'none';
        }
        
        // Parol kuchlilik tekshiruvi
        function checkPasswordStrength(password) {
            const strengthBar = document.getElementById('password-strength-bar');
            const strengthText = document.getElementById('password-strength-text');
            
            // Reset
            strengthBar.className = 'strength-bar';
            strengthBar.style.width = '0%';
            
            if (password.length === 0) {
                strengthText.textContent = 'Parol kuchi: noma\'lum';
                return;
            }
            
            if (password.length < 6) {
                strengthBar.classList.add('strength-weak');
                strengthBar.style.width = '33%';
                strengthText.textContent = 'Parol kuchi: zaif';
                strengthText.style.color = 'var(--danger)';
                return;
            }
            
            // Check medium strength
            const hasLetter = /[a-zA-Z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
            
            if ((hasLetter && hasNumber) || (hasLetter && hasSpecial) || (hasNumber && hasSpecial)) {
                strengthBar.classList.add('strength-medium');
                strengthBar.style.width = '66%';
                strengthText.textContent = 'Parol kuchi: o\'rtacha';
                strengthText.style.color = 'var(--warning)';
            } else {
                strengthBar.classList.add('strength-weak');
                strengthBar.style.width = '33%';
                strengthText.textContent = 'Parol kuchi: zaif';
                strengthText.style.color = 'var(--danger)';
                return;
            }
            
            // Check strong strength
            if (hasLetter && hasNumber && hasSpecial && password.length >= 8) {
                strengthBar.classList.add('strength-strong');
                strengthBar.style.width = '100%';
                strengthText.textContent = 'Parol kuchi: kuchli';
                strengthText.style.color = 'var(--success)';
            }
        }
        
        // Telegram bog'lash
        let isTelegramConnected = false;
        document.getElementById('connect-telegram-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const btn = this;
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Telegram hisobi bog\'langan';
            btn.classList.add('btn-telegram-connected');
            isTelegramConnected = true;
            hideError('telegram');
        });
        
        // Telegram orqali kirish
        document.getElementById('telegram-login-btn').addEventListener('click', function(e) {
            e.preventDefault();
            alert("Telegram orqali kirish funksiyasi ishga tushadi");
        });
        
        // Forma yuborish
        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            hideAllErrors();
            
            // Qiymatlarni olish
            const firstname = document.getElementById('signup-firstname').value.trim();
            const lastname = document.getElementById('signup-lastname').value.trim();
            const username = document.getElementById('signup-username').value.trim();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            const termsChecked = document.getElementById('agree-terms').checked;
            
            // Validatsiya
            let isValid = true;
            
            if (firstname.length < 2) {
                showError('firstname', 'Ism kamida 2 belgidan iborat bo\'lishi kerak');
                isValid = false;
            }
            
            if (lastname.length < 2) {
                showError('lastname', 'Familiya kamida 2 belgidan iborat bo\'lishi kerak');
                isValid = false;
            }
            
            if (username.length < 3) {
                showError('username', 'Foydalanuvchi nomi kamida 3 belgidan iborat bo\'lishi kerak');
                isValid = false;
            }
            
            if (password.length < 6) {
                showError('password', 'Parol kamida 6 belgidan iborat bo\'lishi kerak');
                isValid = false;
            } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
                showError('password', 'Parol kamida 1 ta katta harf va 1 ta raqamdan iborat bo\'lishi kerak');
                isValid = false;
            }
            
            if (password !== confirmPassword) {
                showError('confirm-password', 'Parollar mos kelmadi');
                isValid = false;
            }
            
            if (!isTelegramConnected) {
                showError('telegram', 'Telegram hisobini bog\'lash majburiy');
                isValid = false;
            }
            
            if (!termsChecked) {
                showError('terms', 'Foydalanish shartlariga rozilik bildirish majburiy');
                isValid = false;
            }
            
            if (!isValid) {
                showAlert('Iltimos, barcha maydonlarni to\'g\'ri to\'ldiring', 'danger');
                return;
            }
            
            // Agar hamma narsa to'g'ri bo'lsa
            showAlert('Ro\'yxatdan o\'tish muvaffaqiyatli yakunlandi!', 'success');
        });
        
        // Formalar yuborish
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            
            alert(`Tizimga kirish:\nFoydalanuvchi: ${username}\nParol: ${password}`);
        });