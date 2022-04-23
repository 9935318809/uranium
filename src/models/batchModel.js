const mongoose = require('mongoose')


const batchModel = new mongoose.Schema({

    name:String,
    size:Number,
    program:{
        type:String,
        enum: ['frontend','backend']
    }


})

module.exports =  mongoose.model('Batch',batchModel)