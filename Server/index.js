const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')
const dotenv=require('dotenv').config()
const moongose=require('mongoose')
const routes=require('./Routes/route')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(routes)


moongose.connect(process.env.DATABASE_URL).then(()=>{
    app.listen(process.env.PORT,(req,res)=>{
        console.log('Server is running at Port 4000')

    })
})

