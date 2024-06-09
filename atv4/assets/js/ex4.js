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

function addRow() {
    const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    const currentRow = table.insertRow();
    const cell1 = currentRow.insertCell(0);
    const cell2 = currentRow.insertCell(1);
    const cell3 = currentRow.insertCell(2);
    cell1.innerHTML = "<span class='placeholder edited-text' onclick='removePlaceholder(this)'>Nome do Jogo</span>";
    cell2.innerHTML = "<span class='placeholder edited-text' onclick='removePlaceholder(this)'>Desenvolvedora do Jogo</span>";
    cell3.innerHTML = "<span class='placeholder edited-text' onclick='removePlaceholder(this)'>Preço do Jogo</span>";

    cell1.dataset.originalText = "Nome do Jogo";
    cell2.dataset.originalText = "Desenvolvedora do Jogo";
    cell3.dataset.originalText = "Preço do Jogo";
}

document.addEventListener('DOMContentLoaded', function () {
    const placeholders = document.querySelectorAll('.placeholder');
    placeholders.forEach(function (placeholder) {
        placeholder.classList.add('edited-text');
    });
});

function removePlaceholder(span) {
    span.textContent = '';
}