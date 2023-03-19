const mongoose=require('mongoose')

const incidentSchema=new mongoose.Schema({
    incident:{
        type:String,
        required:true
    },
    tickets:{
        type:Number
    }
},{
    timestamps:true
})

module.exports=mongoose.model('incident',incidentSchema)