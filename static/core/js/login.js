"use strict";
const passwordInput = document.querySelector('#password');
const toggleButton = document.querySelector('#togglePassword');
const form = document.querySelector('#loginForm');
if (passwordInput && toggleButton) {
    toggleButton.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        toggleButton.textContent = isPassword ? "Yashir" : "Ko'rsat";
    });
}
if (form) {
    form.addEventListener('submit', (event) => {
        const username = document.querySelector('#username')?.value.trim();
        const password = passwordInput?.value.trim();
        if (!username || !password) {
            event.preventDefault();
            alert("Login va parolni to'ldiring");
        }
    });
}
