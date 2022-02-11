const {Router} = require('express')
const UserSxhema = require('../moduls/User')
const bctrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check,validationResult} = require('express-validator')



const router = Router()

router.post(
    '/registr',
    [
     check('email','invalid email').isEmail(),
     check('password','Password must have 6 characters').isLength({min:6})
    ],
async (req,res)=>{
   
    try {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                error:error.array(),
                message:'incorrect data'
            })
        }
       const {firstName,lastName,email,password} = req.body
       const findUserEmail = UserSxhema.findOne(email)
        
       if(!findUserEmail){
          return res.status(400).json({message:'this user already exists'})
       }
       const hasHedPassword = await bctrypt.hash(password,12)

       const user = new UserSxhema({firstName,lastName,email,password:hasHedPassword})
        
       await user.save()
       
       const token = jwt.sign(
        {userId:hasHedPassword},
        config.get('secret'),
        {expiresIn:'1h'}
        )
    res.json({
        token,
        userId:user.id,
        firstName,
        lastName
    })
       
    } catch (error) {
        console.log('error register message: ',error)    
        res.status(500).json({message:'"Something went wrong try again."'})
    }
})

router.post(
    '/login',
    [
        check('email','enter the correct E-mail').normalizeEmail().isEmail(),
        check('password',' enter the Password ').exists()
    ],
    async (req,res)=>{
    try {
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({
                error:error.array(),
                message:'incorrect data'
            })
        }
        const {email,password} = req.body
        const user = await UserSxhema.findOne({email})

        if(!user){
            return res.status(400).json({message:'incorrect data'})
        }

        const isMatch = await bctrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:'incorrect data'})
        }
const token = jwt.sign(
    {userId:user.id},
    config.get('secret'),
    {expiresIn:'1h'}
    )
res.json({
    token,
    userId:user.id,
    firstName: user.firstName,
    lastName:user.lastName
})

    } catch (error) {
        console.log(error)
    }
})


router.get(
    '/:id',
    async (req,res)=>{
    try {   
        const id = req.params.id
        const user = await UserSxhema.findById({id})
  
if(user){
    const token = jwt.sign(
        {userId:user.id},
        config.get('secret'),
        {expiresIn:'1h'}
        )
    res.json({
        token,
        userId:user.id,
        firstName: user.firstName,
        lastName:user.lastName
    })
}


    } catch (error) {
        console.log(error)
    }
})

module.exports = router