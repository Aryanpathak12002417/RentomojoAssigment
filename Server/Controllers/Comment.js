const router=require('express').Router()
const db=require('../Models/Comment')
const jwt=require('jsonwebtoken')

router.post('/likeComment',(req,res)=>{
    const {commentId}=req.body;
    db.find({_id:commentId}).then(data=>{
        if(req.user_id==data.user_id){
            return res.json({"message":"You cannot like your Comment"})
        }
        db.findOneAndUpdate({_id:commentId},{like:data.like+1}).then(()=>{
            res.json({"message":"Liked The Comment"})
        }).catch(err=>{
            res.json({"message":"cannot like the messgae"})
        })

    }).catch(err=>{
        res.json({"message":"cannot like the message"})
    })
})



router.post('/pagination',(req,res)=>{
    
})


module.exports=router