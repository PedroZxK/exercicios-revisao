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

const button = document.getElementById('animateButton');

button.addEventListener('click', function () {
    // Verifica se o botão está na cor original
    const isOriginalColor = button.style.backgroundColor !== 'rgb(131, 59, 255)';

    // Removendo a classe 'button-grow' para reiniciar a animação
    button.classList.remove('button-grow');

    // Alternando a cor do botão entre a cor original e a cor especificada
    if (isOriginalColor) {
        button.style.backgroundColor = '#833bff';
        button.style.color = 'rgb(255, 240, 240)';
    } else {
        button.style.backgroundColor = 'rgb(131, 59, 255)';
        button.style.color = '#fff';
    }

    // Forçando o navegador a re-renderizar o botão antes de adicionar a classe novamente
    void button.offsetWidth;

    // Adicionando a classe 'button-grow' para iniciar a animação
    button.classList.add('button-grow');

    // Removendo a cor adicionada pelo JavaScript após um breve atraso
    setTimeout(function () {
        button.style.backgroundColor = '';
        button.style.color = '';
    }, 300);
});
