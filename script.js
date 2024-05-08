document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactoForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos obligatorios
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const consulta = document.getElementById("consulta").value.trim();
        const motivo = document.getElementById("motivo").value;

        if (nombre === "" || email === "" || consulta === "") {
            alert("Por favor complete todos los campos obligatorios.");
            return;
        }

        // Envío del formulario (simulado)
        alert("¡Formulario enviado correctamente!");
        form.reset(); // Limpiar el formulario después del envío
    });
});