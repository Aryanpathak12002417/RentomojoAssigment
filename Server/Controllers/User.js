const router=require('express').Router()
const bcrypt=require('bcrypt')
const User = require('../Models/User')
const jwt=require('jsonwebtoken')



router.post('/register',async(req,res)=>{
    const {first_name,last_name,email,password}=req.body
    let cpassword=await bcrypt.hash(password,10)
    const user= new User({
        first_name,
        last_name,
        email,
        password:cpassword
    })

    user.save().then(()=>{

        const token=jwt.sign({email},process.env.JWT_STRING)
        res.cookie('Token',token)

        res.json({"message":"User Register"})

        }).catch(err=>{
            console.log(err)
            res.json({"message":err.message})
        })
    
})


router.post('/login',(req,res)=>{
    const{email,password}=req.body;
    User.find({email}).then((data)=>{
        if(data.length<0){
            return res.json({"message":"User Not Found"})
        }
        let cpassword=data[0].password;
        bcrypt.compare(password,cpassword,(err,data)=>{
            if(err){
                return res.json({"message":"Wrong Password Entered"})
            }
            const token=jwt.sign({email},process.env.JWT_STRING)
            res.cookie('Token',token)
            return res.json({"message":"Successfuly Logined"})
        })
    }).catch(err=>{
        console.log(err)
        res.json({"message":err})
    })
})


router.get('/logout',(req,res)=>{
    
})


module.exports=router