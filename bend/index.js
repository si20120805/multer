const express=require('express')
const cors=require('cors')
const path=require('path')
const  xlsx=require('xlsx')
const Api =require('./apifeature')
const bodyparser=require('body-parser')


const sta=path.join(__dirname,'./uploads')
const app=express();
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))

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
      console.log(req.file)
        const ig=req.file.filename
        // const name=req.body
        const image=  await new Image({image:ig})
         image.save()
      
         res.json({msg:'sucess',image})  

        
    } catch (error) {
        console.log(error)
    }
}
const excel=async(req,res,next)=>{
const orignal=req.file.originalname.split('.')[1]
console.log(orignal[1])
if(orignal==='xlsx'){

  const workfile=xlsx.readFile(req.file.path);
const sheet=workfile.Sheets[workfile.SheetNames[0]]
const data=xlsx.utils.sheet_to_json(sheet)
console.log(data)
const image= await Image.insertMany(data)
res.status(200).json({msg:'sucess',image})

}
else{

  res.status(200).json({msg:'Wrong file type'})
}
}



const getall=async(req,res,next)=>{

try {
  
  const serach=new Api(Image.find(),req.query).search()


  const image= await serach.query;

res.json({image})

} catch (error) {
  res.json({err:'Error'})
  
}

}




app.post('/excel',upload.single('myfiles'),excel)

app.post('/api',upload.single('myfiles'),up)
app.get('/all',getall)

app.listen(5000,()=>{console.log('Listning')})