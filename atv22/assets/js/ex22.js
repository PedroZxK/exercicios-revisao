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

function validarFormulario() {
    const cardNumber = document.getElementById('cardNumber').value;
    const cardName = document.getElementById('cardName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber.trim() === '' || cardName.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (!validateCardNumber(cardNumber)) {
        alert('Por favor, insira um número de cartão válido.');
        return false;
    }

    if (!validateExpiryDate(expiryDate)) {
        alert('Por favor, insira uma data de expiração válida (MM/AA).');
        return false;
    }

    if (!validateCVV(cvv)) {
        alert('Por favor, insira um CVV válido.');
        return false;
    }

    alert('Pagamento efetuado com sucesso!');
    return true;
}

function validateCardNumber(cardNumber) {
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');
    return /^\d{16}$/.test(cardNumberWithoutSpaces);
}

function validateExpiryDate(expiryDate) {
    return /^\d{2}\/\d{2}$/.test(expiryDate);
}

function validateCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
}

document.getElementById('cardNumber').addEventListener('input', function (e) {
    const target = e.target;
    const input = target.value.replace(/\D/g, '').substring(0, 16);
    const formattedInput = input.replace(/(\d{4})/g, '$1 ').trim();
    target.value = formattedInput;
});
