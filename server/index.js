const SebSocket = require('ws');
const server = new SebSocket.Server({
    port: '8080'
})

server.on('connection', (socket) => {

    socket.on('message', (message) => {

        socket.send(`Roger that ${message}`);
    })
})