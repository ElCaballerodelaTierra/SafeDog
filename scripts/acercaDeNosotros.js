let index = 0;

function mover(n) {
    const items = document.querySelectorAll('.Elemento-lista');
    const totalItems = items.length;
    const itemsPerView = 4;

    // Ocultar todos los elementos
    items.forEach((item) => {
        item.style.display = 'none';
    });

    // Calcular el índice inicial del primer elemento visible
    const startIndex = index * itemsPerView;
    for (let i = startIndex; i < startIndex + itemsPerView && i < totalItems; i++) {
        items[i].style.display = 'block';
    }

    // Actualizar el índice
    index += n;

    // Asegurarse de que el índice no se salga de los límites
    if (index >= Math.ceil(totalItems / itemsPerView)) {
        index = 0;
    } else if (index < 0) {
        index = Math.ceil(totalItems / itemsPerView) - 1;
    }
}

// Inicializar para mostrar los primeros elementos
mover(0);