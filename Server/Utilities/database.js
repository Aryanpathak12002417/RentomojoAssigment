const mongoose=require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.g7wnwlz.mongodb.net/?retryWrites=true&w=majority`)


module.exports=mongoose