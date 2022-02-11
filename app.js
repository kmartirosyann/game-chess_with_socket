const express = require('express')
const config = require('config')
const mongoos = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = config.get('port') ||  5000
const app = express()

const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
  }
  app.use(cors(corsOptions))

  app.use(bodyParser.json())

  app.use(express.json())
 
  app.use(express.urlencoded({ extended: true }))

app.use('api/games',require('./routes/routesGames'))
app.use('/api/auth',require('./routes/routes'))

async function start(){
    try{
       await mongoos.connect(config.get('mongoUrl'),{
        useNewUrlParser: true,
        useUnifiedTopology: true,
       })
       app.listen(PORT,()=>console.log(`App has been started on port: ${PORT}`))
    }catch(e){
        console.log(e)
        process.exit(1)
    }
}

start()
