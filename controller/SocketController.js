let socket = (io) => {
        io.on('authenticated', (socket) => {
            let currentUser = socket.decoded_token.user;
            socket.on('message', (message) => {
                io.emit('message', message);
            });
        });
        
}

module.exports = socket;