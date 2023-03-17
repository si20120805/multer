const mongoose=require('mongoose')


const database=()=>{
let db='mongodb+srv://siddharth:razer123@cluster0.6ghk3ii.mongodb.net/bloger?retryWrites=true&w=majority    '

    mongoose.connect('mongodb://0.0.0.0:27017/multer',{useNewUrlParser:true, useUnifiedTopology:true}).then(data=>console.log(data.connection.host)).catch(err=>console.log(err))
}

module.exports=database