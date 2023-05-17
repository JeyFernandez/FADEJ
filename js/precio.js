function validateForm() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const origin = document.getElementById("origin").value.trim();
    const destination = document.getElementById("destination").value.trim();

    if (name === "" || phone === "" || email === "" || origin === "" || destination === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    window.location.assign("../html/pago.html");
    return true;
}