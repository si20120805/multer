const mongoose=require('mongoose');


const Image=mongoose.Schema({


    image:
    {
        type:String
    },
    Names:String,
    Age:Number




})

module.exports=mongoose.model('Images',Image)