
//acá pedí ayuda a la IA porque no se realmente como es, en clase se vió poco de esto.



// Esperar a que todo el HTML se haya cargado en el navegador
document.addEventListener('DOMContentLoaded', function () {
    
   

    // 1. FUNCIONALIDAD DEL MENÚ DESPLEGABLE EN MÓVILES
   
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    // Evento de clic para alternar la visibilidad de la navegación
    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

   
    
    // 2. INTERCEPTAR ENVÍO DEL FORMULARIO DE CONTACTO
 
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        // Prevenir el recargo de página por defecto
        event.preventDefault();

        // Obtener el valor del campo nombre
        const nombreCliente = document.getElementById('nombre').value;

        // Mostrar un mensaje sencillo de confirmación (Alerta vanilla)
        alert('¡Gracias por tu consulta, ' + nombreCliente + '! Te responderemos lo antes posible.');

        // Limpiar el formulario
        contactForm.reset();
    });
});