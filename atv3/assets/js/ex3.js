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

document.addEventListener("DOMContentLoaded", function () {
    var itens = document.querySelectorAll("#lista li");

    itens.forEach(function (item) {
        item.addEventListener("click", function () {
            if (!this.classList.contains("destaque")) {
                itens.forEach(function (item) {
                    item.classList.remove("destaque");
                    item.style.width = '';
                });
                this.classList.add("destaque");
                this.style.width = '232px';
            }
        });
    });

    document.addEventListener("click", function (event) {
        var isClickedInsideList = false;
        itens.forEach(function (item) {
            if (item.contains(event.target)) {
                isClickedInsideList = true;
            }
        });
        if (!isClickedInsideList) {
            document.getElementById("lista").classList.add("removendo-destaque");

            setTimeout(function () {
                itens.forEach(function (item) {
                    item.classList.remove("destaque");
                    item.style.width = '';
                });
                document.getElementById("lista").classList.remove("removendo-destaque");
            }, 300);
        }
    });
});
