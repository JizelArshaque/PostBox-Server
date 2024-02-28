const mails = require('../Model/mailModel')

exports.sendmailController1=async(req,res)=>{
    const userId = req.payload
    console.log(userId);
    try {
        const { from , to, subject, message , date,image } = req.body
        const newMail = new mails({
            from , to, subject, message , date ,image
        })
        newMail.save()
        res.status(241).json('mail sent!')
        
        
    } catch (error) {
        res.status(479).json(error)
        
    }
}

exports.sendmailController2 = async(req,res)=>{
    try {
        console.log(req.body);
        console.log(req.file.filename);
        const { from , to, subject, message , date } = req.body
        const image = req.file.filename
        console.log(image);
        const newMail = new mails({
            from , to, subject, message , date ,image
        })
        console.log(newMail);
        newMail.save()
        res.status(241).json('mail sent!')
        
        
    } catch (error) {
        res.status(499).json(error)
        
    }

}

exports.getsentmail = async(req,res)=>{
    const id = req.params
    const from = id.id
    console.log(from);
    try {
        const sentMail= await mails.find({from})
        console.log(sentMail);
        res.status(210).json(sentMail)
    } catch (error) {
        res.status(451).json(error)
        
    }
}

exports.getallmail= async(req,res)=>{
    const id = req.params
    const fr = id.id
    console.log(fr);
    try {
        const reci= await mails.find({to:fr})
        const from = await mails.find({from:fr})
        console.log('from',reci);
        console.log('to',from);
        const all = [...from,...reci]
        res.status(210).json(all)
    } catch (error) {
        res.status(451).json(error)
    }

}

exports.getSingleMail=async(req,res)=>{
    const {id} = req.params
    console.log(id);
    try {
        const mail = await mails.find({_id:id})
        console.log('sxxs',mail);
        res.status(211).json(mail)
        
    } catch (error) {
        res.status(451).json(error)
        
    }
}
exports.deleteMailController = async(req,res)=>{
    const {id} = req.params
    try {
        await mails.findByIdAndDelete({_id:id})
        res.status(231).json('Deleted!')
    } catch (error) {
        res.status(417).json(error)
    }
}

exports.getInboxController = async(req,res)=>{
    const id = req.params
    const to = id.id
    try {
        const inboxMail= await mails.find({to})
        console.log(inboxMail);
        res.status(210).json(inboxMail)
    } catch (error) {
        res.status(451).json(error)
        
    }

}

