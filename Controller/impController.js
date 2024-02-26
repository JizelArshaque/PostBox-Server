const imps = require('../Model/impModel')

exports.addToImportantController= async(req,res)=>{
    const userId= req.payload
    const {from ,to , subject, message, date ,image} =req.body
    // console.log('hwevsdibsd',userId,req.body);
        try {
            const existing = await imps.findOne({userId,message})
            // console.log('dd',existing);
            if(existing){
                // console.log(existing);
                res.status(411).json('Already Marked Important')
            }else{                
                if(req.body.image){
                    const Nimp = new imps({
                        from ,to , subject, message, date ,image , userId
                    })
                    await Nimp.save()
                    res.status(231).json('Marked Important')
                }else{
                    const Nimp = new imps({
                        from ,to , subject, message, date ,userId
                    })
                    await Nimp.save()
                    res.status(231).json('Marked Important')
                }
                
            }
            
        } catch (error) {
            res.status(499).json(error)
        }
}

exports.getImportantMail = async(req,res)=>{
    const userId = req.payload
    try {
        const impMails = await imps.find({userId})
        res.status(231).json(impMails)
    } catch (error) {
        res.status(491).json(error)
    }

}

exports.getsingleImpMail= async(req,res)=>{
    const {id} = req.params
    console.log(id);
    try {
        const impMail = await imps.find({_id:id})
        res.status(218).json(impMail)
    } catch (error) {
        res.status(431).json(error)
    }
}

exports.removeImp=async(req,res)=>{
    const {id} = req.params
    try {
        await imps.findByIdAndDelete({_id:id})
        res.status(217).json('Marked As not Important!')
    } catch (error) {
        res.status(433).json(error)
    }
}