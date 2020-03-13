let socket = (io) => {
    io.on('connection', socket => {
        console.log('connecté');
        socket.on('message', (message) => {
            console.log(message);
            io.emit('message', message);
        });
    });
}

module.exports = socket;