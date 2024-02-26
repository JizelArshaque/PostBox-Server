const mongoose = require('mongoose')
const impSchema = mongoose.Schema({
    from:{
        type:String,
        require:true
    },
    to:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    image:{
        type:String,
    },
    userId:{
        type:String,
        require:true
    }
})

const imps = mongoose.model('imps',impSchema)

module.exports = imps