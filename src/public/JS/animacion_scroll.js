// Obtén todos los elementos con la clase 'sr'
var elementos = document.querySelectorAll('.sr');

// // Función para verificar si un elemento está en el área visible de la ventana
// function estaEnVentana(elemento,offset) {
//     var bounding = elemento.getBoundingClientRect();
//     return (
//         // bounding.top >= 0 &&
//         // bounding.left >= 0 &&
//         // bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         // bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//        // bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//        //  bounding.bottom >= 200
//        bounding.top - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.bottom >= 0
//     );
// }




// // Función para mostrar elementos cuando están en la ventana
// function mostrarElementos(offset) {
//     elementos.forEach(function (elemento,offset) {
//        console.log(elemento)
//         if (estaEnVentana(elemento)) {
//             elemento.classList.add('aparecido');
//             console.log(elementos);
//         }
//     });
// }

// // Ajusta el valor de offset según cuánto más abajo quieres que aparezcan los elementos
// var offset = 100; // Ajusta según sea necesario


// // Agrega un evento de scroll para llamar a la función cuando se hace scroll
// window.addEventListener('scroll', mostrarElementos);

// // Llama a la función al cargar la página para verificar elementos visibles inicialmente
// mostrarElementos(offset);


// Función para verificar si un elemento está parcial o completamente en el área visible de la ventana
function estaEnVentana(elemento, offset) {
    var bounding = elemento.getBoundingClientRect();
    return (
        bounding.top - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= 0
    );
}

// Función para mostrar elementos cuando están en la ventana con un desplazamiento hacia abajo
function mostrarElementos(offset) {
    elementos.forEach(function (elemento) {
        if (estaEnVentana(elemento, offset)) {
            elemento.classList.add('aparecido');
        }
    });
}

// Ajusta el valor de offset según cuánto más abajo quieres que aparezcan los elementos
var offset = -300; // Ajusta según sea necesario

// Agrega un evento de scroll para llamar a la función cuando se hace scroll
window.addEventListener('scroll', function () {
    mostrarElementos(offset);
});