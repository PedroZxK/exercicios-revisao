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

document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === '' || email === '') {
        swal("Erro", "Por favor, preencha todos os campos.", "error");
        return;
    }

    if (!validateEmail(email)) {
        swal("Erro", "Por favor, insira um endereço de email válido.", "error");
        return;
    }

    // Se tudo estiver válido, exibe o SweetAlert de "envio com sucesso"
    swal("Envio com sucesso!", "Seu formulário foi enviado.", "success")
        .then(() => {
            location.reload();
        });
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}