const io = require('socket.io')({
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Novo cliente conectado');

    socket.on('chat message', (message) => {
        console.log('Mensagem recebida: ' + message);
        io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

io.listen(3000);
