const express =require('express')
const { connection } = require('./Config/db')
const UserRoute = require('./Routes/productRoute')
const app =express()
const port=3000

app.use(express.json())

app.use('/api',UserRoute)
app.use('/',(req,res)=>{

res.send("Welcome")
  
  })

app.listen(port,async()=>{
    try {
        await connection()
        console.log("server started after database connection");
    } catch (error) {
        console.log(error);
        
    }
})