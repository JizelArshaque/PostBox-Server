const bodyparser = require('body-parser')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const routes = require('./Routes/router')
const postbox = express()
postbox.use(cors())
postbox.use(express.json({ limit: "50mb", extended: true }))
postbox.use(
    express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
  );
postbox.use(routes)

postbox.use('/uploads',express.static('./uploads'))

PORT = 4321 || process.env.PORT

postbox.listen(PORT,()=>{
    console.log(`Server Running @${PORT} !`);
})

postbox.get('/',(req,res)=>{
    res.send('light weight baby!')
})