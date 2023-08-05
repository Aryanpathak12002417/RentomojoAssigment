const express=require('express')
const router=express.Router()
const user=require('../Controllers/User')
const comment=require('../Controllers/Comment')

router.use('/user',user)
router.use('/comment',comment)


module.exports=router