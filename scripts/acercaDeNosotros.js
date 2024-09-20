let index = 0;

function mover(n) {
    const items = document.querySelectorAll('.Elemento-lista');
    const totalItems = items.length;
    const itemsPerView = 10;
    const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

    // Calcular el nuevo índice
    index = (index + n > maxIndex) ? 0 : (index + n < 0) ? maxIndex : index + n;

    // Ajustar la posición del carrusel
    const offset = -index * (100 / itemsPerView);
    document.querySelector('.Lista-desordenada').style.transform = `translateX(${offset}%)`;
}

// Inicializar para mostrar los primeros elementos
mover(0);
