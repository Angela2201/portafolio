const saludo = document.getElementById('saludo');

console.log('script.js cargado correctamente');

saludo.textContent = '¡Hola! Bienvenid@ a mi portafolio';

// 5.2 Menú activo según la sección visible

const enlaces = document.querySelectorAll('header ul a');
const secciones = document.querySelectorAll('main section');

function actualizarMenu() {
    let seccionActual = '';

    secciones.forEach(function (seccion) {
        const distanciaDesdeArriba = seccion.getBoundingClientRect().top;

        if (distanciaDesdeArriba <= 150) {
            seccionActual = seccion.id;
        }
    });

    enlaces.forEach(function (enlace) {
        enlace.classList.remove('activo');

        if (enlace.getAttribute('href') === '#' + seccionActual) {
            enlace.classList.add('activo');
        }
    });
}

window.addEventListener('scroll', actualizarMenu);

actualizarMenu();

// 5.3 Validación del formulario de contacto

const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre.length < 2) {
        alert('Por favor escribe un nombre de al menos 2 letras.');
        return;
    }

    if (!correo.includes('@') || !correo.includes('.')) {
        alert('El correo debe tener el formato nombre@dominio.com');
        return;
    }

    if (mensaje.length === 0) {
        alert('Escribe un mensaje antes de enviar.');
        return;
    }

    alert('¡Gracias, ' + nombre + '! Tu mensaje está listo para enviarse.');
    formulario.reset();
});

const botonBlandas = document.getElementById('btn-blandas');
const tarjetaBlandas = document.getElementById('blandas');

botonBlandas.addEventListener('click', function () {
    if (tarjetaBlandas.style.display === 'none') {
        tarjetaBlandas.style.display = '';
        botonBlandas.textContent = 'Ocultar habilidades blandas';
    } else {
        tarjetaBlandas.style.display = 'none';
        botonBlandas.textContent = 'Mostrar habilidades blandas';
    }
});