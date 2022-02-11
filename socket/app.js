const io = require('socket.io')(8900,{
    cors:{
        origin:'http://localhost:3000'
    }
})

let users = [];

const addUser = (userId,socketId,firstName,lastName)=>{
   userId && !users.some(user => user.userId === userId) && 
    users.push({userId,socketId,firstName,lastName})
    
}

const remuveUser =(socketId)=>{
   users.filter(user => user.socketId !== socketId)
}

io.on('connection', (socket) => {
    console.log('someone connected!')    
  socket.on("addUser",(userId,firstName,lastName)=>{
      addUser(userId,socket.id,firstName,lastName)
      io.emit("getUsers",users)
  })
  socket.on('disconnect',()=>{
    console.log('desconnect')
    remuveUser(socket.id)
    io.emit("getUsers",users)
  })
});

