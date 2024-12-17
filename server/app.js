const express = require('express');
const app = express();
const authRouter = require('./controllers/authController');
const userRouter = require('./controllers/userController');
const chatRouter = require('./controllers/chatController');
const messageRouter = require('./controllers/messageController');

app.use(express.json({
    limit: "50mb"
}));
const server = require('http').createServer(app);

const io = require('socket.io')(server,{cors:{
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
}});

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/chat',chatRouter);
app.use('/api/message', messageRouter);

const onLineUsers = []

// Test socket connection from client
io.on('connection',socket=>{
    socket.on('join-room',userid=>{
        socket.join(userid);
    })
    socket.on('send-message',(message)=>{
        io.to(message?.members?.[0]).to(message?.members?.[1]).emit('receive-message',message);

        io.to(message?.members?.[0]).to(message?.members?.[1]).emit('set-message-count',message);
    })
    socket.on('clear-unread-messages',data=>{
        io.to(data?.members?.[0]).to(data?.members?.[1]).emit('message-count-cleared',data)
    })
    socket.on('user-typing', (data)=>{
        io.to(data?.members?.[0]).to(data?.members?.[1]).emit('started-typing',data)
    })
    socket.on('user-login',userId =>{
        if(!onLineUsers.includes(userId)){
            onLineUsers.push(userId);
        }
        socket.emit('online-users',onLineUsers);
    })
    socket.on('user-offline',userId=>{
        onLineUsers.splice(onLineUsers.indexOf(userId),1);
        io.emit('online-users-updated',onLineUsers);
    })
});


module.exports = server;