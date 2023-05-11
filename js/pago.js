const form = document.querySelector('#payment-form');
const cancelButton = document.querySelector('#cancel-button');

// Validar el formulario cuando se envíe
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        // Envía el formulario
        alert('Pago procesado exitosamente');
        form.reset();
    }
});

// Cancelar el formulario
cancelButton.addEventListener('click', function (event) {
    event.preventDefault();
    form.reset();
});

// Validar el formulario antes de enviarlo
function validateForm() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const cardNumber = document.querySelector('#card-number');
    const expiry = document.querySelector('#expiry');
    const cvv = document.querySelector('#cvv');
    let isValid = true;

    if (!name.value.trim()) {
        name.classList.add('invalid');
        isValid = false;
    } else {
        name.classList.remove('invalid');
    }

    if (!email.value.trim() || !isValidEmail(email.value.trim())) {
        email.classList.add('invalid');
        isValid = false;
    } else {
        email.classList.remove('invalid');
    }

    if (!cardNumber.value.trim() || cardNumber.value.trim().length !== 16) {
        cardNumber.classList.add('invalid');
        isValid = false;
    } else {
        cardNumber.classList.remove('invalid');
    }

    if (!expiry.value.trim() || !isValidExpiry(expiry.value.trim())) {
        expiry.classList.add('invalid');
        isValid = false;
    } else {
        expiry.classList.remove('invalid');
    }

    if (!cvv.value.trim() || cvv.value.trim().length !== 3) {
        cvv.classList.add('invalid');
        isValid = false;
    } else {
        cvv.classList.remove('invalid');
    }

    return isValid;
}

// Validar dirección de correo electrónico
function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

// Validar fecha de vencimiento
function isValidExpiry(expiry) {
    const expiryRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    return expiryRegex.test(expiry);
}

// obtener el formulario de pago y agregar un event listener para el evento 'submit'
const paymentForm = document.querySelector('#payment-form');
paymentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // evitar que el formulario se envíe automáticamente

    window.location.assign('../html/home.html');
});
