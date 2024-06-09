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
function handleFileSelect(event) {
    const files = event.target.files;
    const preview = document.getElementById('preview');
    const maxImages = 4;
    
    // Verifica se o número de imagens excede o máximo permitido
    if (preview.childElementCount + files.length > maxImages) {
        alert('Você pode selecionar no máximo 4 imagens.');
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (function(theFile) {
            return function(e) {
                const div = document.createElement('div');
                div.className = 'preview-item';

                if (theFile.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    div.appendChild(img);
                } else {
                    const span = document.createElement('span');
                    span.textContent = theFile.name;
                    div.appendChild(span);
                }

                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-btn';
                removeBtn.textContent = 'Remover';
                removeBtn.onclick = function() {
                    div.remove();
                };
                div.appendChild(removeBtn);

                preview.appendChild(div);
            };
        })(file);

        reader.readAsDataURL(file);
    }
}

document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);

document.getElementById('submitBtn').addEventListener('click', function() {
    document.getElementById('preview').innerHTML = '';
    document.getElementById('fileInput').value = '';
});
