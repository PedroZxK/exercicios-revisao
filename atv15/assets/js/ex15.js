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

const inputText = document.getElementById('inputText');
const wordCount = document.getElementById('wordCount');

inputText.addEventListener('input', () => {
    const text = inputText.value.trim(); // Remove espaços em branco no início e no final
    const words = text.split(/\s+/); // Divide o texto em palavras usando espaços em branco como delimitador
    const wordCountValue = words.filter(word => word !== '').length; // Conta o número de palavras não vazias

    wordCount.textContent = wordCountValue; // Atualiza o contador de palavras
});
