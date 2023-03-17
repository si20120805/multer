const Image=require('./model')




upload=async(req,res)=>{

    try {
        console.log(req.file)
    } catch (error) {
        console.log(error)
    }

    res.json({msg:'Sucess'})

}
module.exports=upload

