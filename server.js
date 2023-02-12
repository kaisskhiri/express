const express = require('express')
const app = express()
const port = 3000

const newDate =  new Date()
let day =newDate.getDay()
let hours = newDate.getHours()
const path = __dirname+ '/Pages'


const auth = (req,res,next) =>{
    if (day >= 0 && day<=5 && hours >=9 && hours <18 )  
    
          
    next();
    else
{
    res.send("server is off");

}
};

app.use(auth)
app.get('/Homepage',(req,res)=>res.sendFile(path + '/Homepage.html'))
app.get('/Contactus',(req,res)=>res.sendFile(path + '/Contactus.html'))
app.get('/OurServices',(req,res)=>res.sendFile(path + '/OurServices.html'))

app.listen(port, () => console.log(`Server is runing on localhost : `))