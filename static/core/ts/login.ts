const passwordInput = document.querySelector<HTMLInputElement>('#password');
const toggleButton = document.querySelector<HTMLButtonElement>('#togglePassword');
const form = document.querySelector<HTMLFormElement>('#loginForm');

if (passwordInput && toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleButton.textContent = isPassword ? "Yashir" : "Ko'rsat";
  });
}

if (form) {
  form.addEventListener('submit', (event: SubmitEvent) => {
    const username = document.querySelector<HTMLInputElement>('#username')?.value.trim();
    const password = passwordInput?.value.trim();

    if (!username || !password) {
      event.preventDefault();
      alert("Login va parolni to'ldiring");
    }
  });
}
