// Fetching Dependencies/Third parties
const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

// Declaring Server Variables
const app = express()

// Adding Port Flag
const port = process.env.PORT||3000

// Settingup static content directory
app.use(express.static(path.join(__dirname, '../public')))

// Declaring HTTP server
var server = http.createServer(app)

// Adding SocketIO support
var io = socketIO(server)

// Events
io.on('connection',(socket) => {
  console.log('New user connected!')

  socket.on('createMessage',function(message){
    console.log('Create Message',message);

    io.emit('newMessage',{
      from:message.from,
      message:message.message,
      createdAt:new Date().getTime()
    })

  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
})


// Poweringup Server
server.listen(port, () => {
  console.log('App up and running!');
})
