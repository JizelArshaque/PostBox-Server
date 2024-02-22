const users = require('../Model/userModel')
const jwt = require('jsonwebtoken')

exports.adduserController = async(req,res)=>{
    const {username,email,password} = req.body
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(409).json('user with this email already exists!')
        }else{
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(201).json('Registration Successful!')
        }
        
    } catch (error) {
        res.status(409).json(error)
        
    }
}
exports.userloginController = async(req,res)=>{
    const { email , password } = req.body
    
    try{
        const existingUser = await users.findOne({email,password})
        
        
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.SECRETKEY)
            
            res.status(202).json({token,existingUser})
        }else{
            res.status(421).json('Invalid Creentials')
        }
    }catch(error){
        res.status(451).json(error)
    }
}
exports.getdetailsController = async(req,res)=>{
    const email = req.params.id
    try{
        const user=await users.findOne({email:email})
    if (user) {
        res.status(290).json(user)
        
    }else{
        res.status(500).json('cannot find user with that email sorry!')
    }

    }catch(error){
        res.status(490).json(error)
    }
    
}
exports.updateuserController = async(req,res)=>{
    // dets=req.body
    // console.log(dets);
    
    // console.log(id);
    
    // const image = req.file.filename
    // console.log(image);
    
    // console.log(dets);
    
    // const hal = {email, username, password, image}
    // console.log(hal);

    // console.log(hal);
    // res.status(290).json(hal)
    // console.log(req.body);
    const options = { new : true}
    const dets = req.body
    id = dets._id
    try {
        const result = await users.findByIdAndUpdate( id , dets , options)
        // result.save()
        // const result = await users.find({email})
        // hal.save()
        // console.log(result);
        res.status(290).json(result)
    } catch (error) {
        res.status(490).json(error)
        
    }
}
