const trashs = require('../Model/trashModel')


exports.addToTrash= async(req,res)=>{
    const userId= req.payload
    const {from ,to , subject, message, date ,image,stat} =req.body
    
    console.log('hwevsdibsd',userId,req.body);
        try {
            const existing = await trashs.findOne({userId,message})
            console.log('dd',existing);
            if(existing){
                console.log(existing);
                res.status(411).json('Already in Trash')
            }else{                
                if(req.body.image){
                    const Nimp = new trashs({
                        from ,to , subject, message, date ,image , userId,stat
                    })
                    await Nimp.save()
                    res.status(231).json('Moved to trash')
                }else{
                    const Nimp = new trashs({
                        from ,to , subject, message, date ,userId,stat
                    })
                    await Nimp.save()
                    res.status(231).json('Moved To trash')
                }
                
            }
            
        } catch (error) {
            res.status(499).json(error)
        }
}

exports.getTrash=async(req,res)=>{
    const userId = req.payload
    try {
        const trashMails = await trashs.find({userId})
        res.status(231).json(trashMails)
    } catch (error) {
        res.status(491).json(error)
    }
}

exports.removeTrash=async(req,res)=>{
    const {id} = req.params
    try {
        await trashs.findByIdAndDelete({_id:id})
        res.status(217).json('Moved Back to mails')
    } catch (error) {
        res.status(433).json(error)
    }
}