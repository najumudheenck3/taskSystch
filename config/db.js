const mongoose=require('mongoose')

const mongoConnection=process.env.MONGO_URL
mongoose.connect(mongoConnection)

const connection=mongoose.connection

connection.on('connected',()=>{
    console.log('mongodb connected');
})

connection.on('error',(error)=>{
    console.log('mongodb connection error',error);
})

module.exports=mongoose