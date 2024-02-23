const mongoose =  require('mongoose')

const mailSchema = mongoose.Schema({
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
    }
})

const mails = mongoose.model('mails',mailSchema)
module.exports = mails