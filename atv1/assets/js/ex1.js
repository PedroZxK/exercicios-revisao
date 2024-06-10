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

function linkedinRedirecionamento() {
    alert("Você está sendo redirecionado para o Linkedin de Pedro Gabriel Moreira dos Santos.");
}

function gitHubRedirecionamento() {
    alert("Você está sendo redirecionado para o GitHub de Pedro Gabriel Moreira dos Santos.");
}

function btn_bemvindo() {
    alert("Bem-vindo!");
}