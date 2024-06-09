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

function addComment() {
    var nameField = document.getElementById('nameField').value.trim();
    var commentField = document.getElementById('commentField').value.trim();

    if (nameField === "" || commentField === "") {
        alert("Por favor, preencha tanto o nome quanto o comentário para enviar.");
        return;
    }

    var commentList = document.getElementById('commentList');
    var newComment = document.createElement('li');
    newComment.innerHTML = "<strong>" + nameField + "</strong>: " + commentField;
    commentList.appendChild(newComment);


    document.getElementById('nameField').value = "";
    document.getElementById('commentField').value = "";
    document.getElementById('nameField').focus();
}


document.getElementById('nameField').addEventListener('input', validateFields);
document.getElementById('commentField').addEventListener('input', validateFields);

function validateFields() {
    var nameField = document.getElementById('nameField').value.trim();
    var commentField = document.getElementById('commentField').value.trim();
    var addButton = document.querySelector('.comments-section button');

    if (nameField !== "" && commentField !== "") {
        addButton.removeAttribute('disabled');
    } else {
        addButton.setAttribute('disabled', 'disabled');
    }
}
