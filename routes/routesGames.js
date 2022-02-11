
const {Router} = require('express')
const GamesSchema = require('../moduls/Games')







const routerGames = Router()

routerGames.post(
    '/game',
async (req,res)=>{
   
    try {
      
       const {userId} = req.body
       const findUserGame = GamesSchema.findOne(userId)
        
       if(!findUserGame){
          return res.status(400).json({message:'this user already exists'})
       }
       
       const user = new GamesSchema({userId})
        
       await user.save()
       res.status(201).json({message:"created new user"})
       
    } catch (error) {
        console.log('error register message: ',error)    
        res.status(500).json({message:'"Something went wrong try again."'})
    }
})

module.exports = routerGames