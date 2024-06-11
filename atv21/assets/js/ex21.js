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

function fazerReserva() {
    var dateInput = document.getElementById("date");
    var timeInput = document.getElementById("time");

    var selectedDate = dateInput.value;
    var selectedTime = timeInput.value;

    if (selectedDate && selectedTime) {
        alert("Reserva feita para " + selectedDate + " às " + selectedTime + ".");
        dateInput.value = "";
        timeInput.value = "";
    } else {
        alert("Por favor, selecione uma data e hora válidas.");
    }
}
