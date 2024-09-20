// Navbar (actualizado, para version final)

document.getElementById('menu-icon').addEventListener('click', function() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show-menu');
})

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const body = document.body;

    function toggleMenu(event) {
        event.preventDefault(); // Previene el comportamiento por defecto
        dropdownMenu.classList.toggle('show-menu');
        body.classList.toggle('menu-open');
    }

    menuIcon.addEventListener('click', toggleMenu);
    menuIcon.addEventListener('touchstart', toggleMenu);

    // Cierra el menú al tocar fuera de él
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show-menu');
            body.classList.remove('menu-open');
        }
    });
});