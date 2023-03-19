const express=require('express')
require('dotenv').config()
const dbConnect=require('./config/db')
const port=process.env.PORT || 4000
const app=express()
const userRoute=require('./routes/userRoute')
const adminRoute=require('./routes/adminRoute')

app.use(express.json())

app.use('/api/users',userRoute)
app.use('/api/admin',adminRoute)


dbConnect;
app.listen(port,()=>{
    console.log(`server connected port ${port}`);
})

