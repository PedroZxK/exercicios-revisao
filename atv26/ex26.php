<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 26</title>
    <link rel="stylesheet" href="assets/css/ex26.css">
    <link rel="stylesheet" href="assets/css/ex26-responsivo.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="shortcut icon" href="assets/img/lotus.png" type="image/x-icon">
</head>

<body>
    <nav class="purple-nav">
        <div class="menu-icon" onclick="toggleMenu()">☰</div>
        <a href="../atv25/ex25.html" class="arrow-left">
            <img class="arrow-icon-left" src="assets/img/seta2.png" height="50px" alt="">
        </a>
        <div class="nav-title">Atividade 26</div>
        <a href="#" class="arrow-right">
            <img class="arrow-icon-right" src="assets/img/seta.png" height="50px" alt="">
        </a>
        <div class="avatar">
            <img src="assets/img/avatar.jpg" alt="Avatar">
        </div>
        <div class="menu-content" id="menuContent">
            <ul>
                <li><a href="../atv1/ex1.html">Exercício 1</a></li>
                <li><a href="../atv2/ex2.html">Exercício 2</a></li>
                <li><a href="../atv3/ex3.html">Exercício 3</a></li>
                <li><a href="../atv4/ex4.html">Exercício 4</a></li>
                <li><a href="../atv5/ex5.html">Exercício 5</a></li>
                <li><a href="../atv6/ex6.html">Exercício 6</a></li>
                <li><a href="../atv7/ex7.html">Exercício 7</a></li>
                <li><a href="../atv8/ex8.html">Exercício 8</a></li>
                <li><a href="../atv9/ex9.html">Exercício 9</a></li>
                <li><a href="../atv10/ex10.html">Exercício 10</a></li>
                <li><a href="../atv11/ex11.html">Exercício 11</a></li>
                <li><a href="../atv12/ex12.html">Exercício 12</a></li>
                <li><a href="../atv13/ex13.html">Exercício 13</a></li>
                <li><a href="../atv14/ex14.html">Exercício 14</a></li>
                <li><a href="../atv15/ex15.html">Exercício 15</a></li>
                <li><a href="../atv16/ex16.html">Exercício 16</a></li>
                <li><a href="../atv17/ex17.html">Exercício 17</a></li>
                <li><a href="../atv18/ex18.html">Exercício 18</a></li>
                <li><a href="../atv19/ex19.html">Exercício 19</a></li>
                <li><a href="../atv20/ex20.html">Exercício 20</a></li>
                <li><a href="../atv21/ex21.html">Exercício 21</a></li>
                <li><a href="../atv22/ex22.html">Exercício 22</a></li>
                <li><a href="../atv23/ex23.html">Exercício 23</a></li>
                <li><a href="../atv24/ex24.html">Exercício 24</a></li>
                <li><a href="../atv25/ex25.html">Exercício 25</a></li>
                <li><a href="../atv26/ex26.php">Exercício 26</a></li>
            </ul>
        </div>
    </nav>

    <div class="page-description">
        <p>26. Chat interativo (sala de bate papo)</p>
        <h5>Crie uma sala de bate papo onde vários usuários podem conversar simultaneamente em tempo real. Use WebSockets para sincronizar as mensagens.</h5>
    </div>

    <div id="content">
        <h1>Conversa em tempo real</h1>
        <input type="text" id="username" placeholder="Digite seu nome">
        <br><br>
        <textarea id="message" placeholder="Digite sua mensagem"></textarea>
        <br><br>
        <button id="send">Enviar</button>
        <div id="content-ul">
            <ul id="messages"></ul>
        </div>
    </div>

    <div class="mobile-buttons">
        <a href="../atv25/ex25.html"><button id="button1">Voltar</button></a>
        <a href="#"><button id="button2">Próximo</button></a>
    </div>
    <footer class="purple-footer">
        <div class="footer-left">
            <h2>Desenvolvido por:</h2>
            <p>Pedro Gabriel Moreira dos Santos</p>
        </div>
        <div class="footer-right">
            <a href="https://www.linkedin.com/in/pedro-santos-74480726b/" target="_blank" onclick="linkedinRedirecionamento()">
                <img class="linkedin" src="assets/img/linkedin.png" alt="LinkedIn">
            </a>
            <a href="https://github.com/PedroZxK" target="_blank" onclick="linkedinRedirecionamento()">
                <img class="github" src="assets/img/github.png" alt="GitHub">
            </a>
        </div>
    </footer>

    <script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script>
    <script>
        const socket = io('http://localhost:3000');
        const messages = document.getElementById('messages');
        const sendButton = document.getElementById('send');
        const usernameInput = document.getElementById('username');
        const messageInput = document.getElementById('message');

        sendButton.addEventListener('click', () => {
            const username = usernameInput.value;
            const message = messageInput.value;
            if (username && message) {
                const formattedMessage = `<strong>${username}:</strong> ${message}`;
                socket.emit('chat message', formattedMessage);
                messageInput.value = '';
            }
        });

        socket.on('chat message', (message) => {
            const li = document.createElement('li');
            li.innerHTML = message;
            messages.appendChild(li);
        });
    </script>
    <script src="assets/js/ex26.js"></script>

</body>

</html>