const mongoose=require('mongoose');


const Image=mongoose.Schema({


    image:
    {
        type:String
    },
    name:String




})

module.exports=mongoose.model('Images',Image)