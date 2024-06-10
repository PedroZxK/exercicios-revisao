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

/* ---------------------------------------PADRAO---------------------------------------------------- */

document.addEventListener('click', function (event) {
    var menuContent = document.getElementById('menuContent');
    var menuIcon = document.querySelector('.menu-icon');

    var isClickInsideMenu = menuContent.contains(event.target) || menuIcon.contains(event.target);

    if (!isClickInsideMenu) {
        menuContent.classList.remove('show');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'ex17.html';
    }
});

document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
});