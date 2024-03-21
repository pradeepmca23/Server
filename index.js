const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')

const app = express();
app.use(cors())
app.use(express.json())

app.get('/',function(req , res){
    res.send("Hello World!")
})
app.get('/data',function(req, res){
    Data.find().then((item) => res.send((item)))
  })
  app.post('/create',(req,res)=>{
    Data.create(req.body).then((item)=>res.send(item))
})

  app.put('/update/:id',async(req,res)=>{
    console.log(req.params.id);
     console.log(req.body);
   const amount = req.body.amount;
   
  const userUpdate= await Data.findByIdAndUpdate(req.params.id,{amount:amount},{new:true,});
    res.json({
     data:userUpdate
})
})
app.delete('/delete/:id',async(req,res)=>{
    console.log(req.params.id);
    const userDelete= await Data.findByIdAndDelete(req.params.id);
    res.json({
     data:userDelete
})
})

app.listen(8080, () =>{
    console.log(`Example app listening on port 8080`)
})

mongoose.connect("mongodb+srv://Pradeep:Pradeepks@cluster0.9jwthy1.mongodb.net/mca").then(console.log("MongoDB Connected"))

//create an schema
var newSchema= new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    password:String,
    amount:Number
})

//model
let Data=mongoose.model('mca',newSchema)

//cretae an data for testing
let data1 =new Data(
    {
        name:"Pradeep S",
        email:"pradeeppradp1623@gmail.com",
        password:"123",
        amount:1000
    }
)
data1.save()