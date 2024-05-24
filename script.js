document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactoForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de campos obligatorios
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const consulta = document.getElementById("consulta").value.trim();
        const motivo = document.getElementById("motivo").value;

        function validarNombre() {
            const nombre = document.getElementById("nombre").value.trim();
            if (nombre.length > 2) {
                return true;
            } else {
                return false;
            }
        }
        if (!validarNombre()) {
            //alert("El nombre debe tener mas de 2 letras");
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre ingresado debe tener más de 2 letras'
            });
            return;
        }
        
        function validarEmail() {
            const email = document.getElementById("email").value.trim();
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (regexEmail.test(email)) {
                return true;
            } else {
                return false;
            }
        }
       
        if (!validarEmail()) {
            //alert("El nombre debe tener mas de 2 letras");
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El Email ingresado no es válido'
            });
            return;
        }
        
        function validarTelefono() {
            const telefono = document.getElementById("telefono").value.trim();
            const regexTelefono = /^\d{10}$/; // Ejemplo de regex para un teléfono de 10 dígitos
            if (regexTelefono.test(telefono)) {
                return true;
            } else {
                return false;
            }
        }
        if (!validarTelefono()) {
            //alert("El telefono no corresponde a Argentina");
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El telefono ingresado no corresponde a Argentina (no inclir cero en código de área)'
            });
            return;
        }

        
        if (nombre === " " || email === " " || consulta === " ") {
            alert("Por favor complete todos los campos obligatorios.");
           
            return;
        }

        // Envío del formulario (simulado)
        //alert("¡Formulario enviado correctamente!");
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: '¡Formulario enviado correctamente!',
        });
        form.reset(); // Limpiar el formulario después del envío
        // Prueba GEO
    });
});


