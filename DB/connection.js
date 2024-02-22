const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log(`MongoDB is Running!`);
}).catch((err)=>{
    console.log(`some issue with connection!`);
})