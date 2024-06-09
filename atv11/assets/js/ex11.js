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
    var modal = document.getElementById('myModal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeBtn = document.querySelector('.close');

    function openModal() {
        modal.style.display = 'flex';
        setTimeout(function () {
            modal.style.opacity = '1';
        }, 50);
    }

    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(function () {
            modal.style.display = 'none';
        }, 300);
    }

    openModalBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});