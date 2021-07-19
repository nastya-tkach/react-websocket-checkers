const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(server, { cors: {origin: '*'}});
const crypto = require('crypto');
const Checkers = require('./Checkers');

app.use(bodyParser.json());

const games = {};

io.on('connection', socket => {
    console.log(socket.id);

    socket.on('getField', (roomId) => {
        
        if(games[roomId]){

            socket.join(roomId);
            if(games[roomId].user2 === null) games[roomId].user2 = socket.id;

            return socket.emit('setField', {user: 2, field: games[roomId].field})

        } else {
        
            const checkers = new Checkers();
            const id = crypto.randomBytes(20).toString('hex');

            checkers.field.gameId = id;
            checkers.user1 = socket.id;
            games[id] = checkers;

            socket.join(id);

            console.log('checkers field', checkers.field);

            return socket.emit('setField', {user: 1, field: checkers.field});
   
        }
    });

    socket.on('handleDrop', drop => {

        console.log('SERVER GET MOVE')
        console.log('DROP', drop)
        const move = drop.move;
        const gameId = drop.gameId;
        const userId = socket.id;

        games[gameId].handleMove(move, userId, function(){
            io.sockets.to(gameId).emit('handleDropFromServer', {user: 0, field: games[gameId].field});
        });
    })
})

server.listen(3003, console.log('Сервер запущен на порту 3003'));