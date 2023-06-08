// const SebSocket = require('ws');
// const server = new SebSocket.Server({
//     port: '8080'
// })

// server.on('connection', (socket) => {

//     socket.on('message', (message) => {

//         socket.send(`Roger that ${message}`);
//     })
// })

const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
})

io.on('connection', (socket) => {
    console.log('a user is connected');

    socket.on('message', (message) => {
        console.log('from front end', message);
        io.emit(`message`, message)
    })
})

http.listen(8080, () => console.log('listening http://localhost:8080'))