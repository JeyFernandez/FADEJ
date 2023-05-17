// Validación del formulario de inicio de sesión
const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar correo electrónico
    if (!isValidEmail(loginEmail.value)) {
        setError(loginEmail, 'Ingrese un correo electrónico válido');
        return;
    }

    // Validar contraseña
    if (loginPassword.value.length < 6) {
        setError(loginPassword, 'La contraseña debe tener al menos 6 caracteres');
        return;
    }

    // Si todos los campos son válidos, enviar formulario
    loginForm.submit();
});

// Validación del formulario de registro
const registerForm = document.getElementById('register-form');
const registerName = document.getElementById('name');
const registerEmail = document.getElementById('email');
const registerUsername = document.getElementById('username');
const registerPassword = document.getElementById('password');

registerForm.addEventListener('submit'), (e) => {
    e.preventDefault();

    // Validar nombre completo
    if (registerName.value.trim() === '') {
        setError(registerName, 'Ingrese su nombre');
    }
}

window.location.href = "../html/home.html";