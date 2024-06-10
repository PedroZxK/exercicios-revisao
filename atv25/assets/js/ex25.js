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

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const item = this.parentElement;
            const answer = item.querySelector('.faq-answer');

            if (item.classList.contains('open')) {
                item.classList.remove('open');
                answer.style.maxHeight = null;
            } else {
                const openItem = document.querySelector('.faq-item.open');
                if (openItem) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.faq-answer').style.maxHeight = null;
                }
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});