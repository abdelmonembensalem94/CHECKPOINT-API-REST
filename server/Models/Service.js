const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    name:{ type:String,required:true},
    description: String,
    prices:{ type:Number,required:true},
    duration: { type:Number,required:true},
    createdAt : { type: Date, default: Date.now },
})

const ServiceModel = mongoose.model("services", ServiceSchema)

module.exports = ServiceModel;