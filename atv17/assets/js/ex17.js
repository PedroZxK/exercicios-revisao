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

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    const validUsername = 'usuario';
    const validPassword = 'senha123';

    if (username === validUsername && password === validPassword) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('loggedIn') === 'true') {
        alert('Você já está logado!');
        window.location.href = 'home.html';
    }
});