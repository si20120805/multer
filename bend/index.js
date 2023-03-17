const express=require('express')
const cors=require('cors')
const path=require('path')

const sta=path.join(__dirname,'./uploads')
const app=express();
app.use(cors())

const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
     
      cb(null, Date.now()+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })







const database=require('./datbase')
database();
// D:\React_project\multer\bend\uploads
app.use('/',express.static('public'))





const Image=require('./model')




const up=async(req,res)=>{

    try {
        const ig=req.file.filename
        // const name=req.body
        const image=  await new Image({image:ig})
         image.save()
      
         res.json({msg:'sucess',image})  

        
    } catch (error) {
        console.log(error)
    }

  

    
    
   
  
}
module.exports=upload


app.post('/api',upload.single('myfiles'),up)

app.listen(5000,()=>{console.log('Listning')})