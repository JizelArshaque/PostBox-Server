const mongoose = require('mongoose')

const trashSchema = mongoose.Schema({
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
        },
        stat:{
            type:String,
            require:true
        }
    })

    const trashs = mongoose.model('trashs',trashSchema)
    module.exports= trashs
