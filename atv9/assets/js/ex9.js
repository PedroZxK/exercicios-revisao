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

const button = document.getElementById('animateButton');

button.addEventListener('click', function () {
    const isOriginalColor = button.style.backgroundColor !== 'rgb(131, 59, 255)';

    button.classList.remove('button-grow');

    if (isOriginalColor) {
        button.style.backgroundColor = '#833bff';
        button.style.color = 'rgb(255, 240, 240)';
    } else {
        button.style.backgroundColor = 'rgb(131, 59, 255)';
        button.style.color = '#fff';
    }

    void button.offsetWidth;

    button.classList.add('button-grow');

    setTimeout(function () {
        button.style.backgroundColor = '';
        button.style.color = '';
    }, 300);
});
