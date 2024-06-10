/* Pedro Gabriel Moreira dos Santos nº26 */

function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    if (menuContent.classList.contains('show')) {
        menuContent.classList.remove('show');
        setTimeout(() => {
            menuContent.style.display = 'none';
        }, 300);
    } else {
        menuContent.style.display = 'block';
        setTimeout(() => {
            menuContent.classList.add('show');
        }, 10);
    }
}

document.addEventListener('click', function (event) {
    var menuContent = document.getElementById('menuContent');
    var menuIcon = document.querySelector('.menu-icon');

    var isClickInsideMenu = menuContent.contains(event.target) || menuIcon.contains(event.target);

    if (!isClickInsideMenu) {
        menuContent.classList.remove('show');
    }
});

/* ---------------------------------------PADRAO---------------------------------------------------- */

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("myDropdown");
    var dropbtn = document.querySelector(".dropbtn");
    if (!dropdown.contains(event.target) && event.target !== dropbtn) {
        dropdown.classList.remove("show");
    }
});