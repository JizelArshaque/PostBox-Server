const mails = require('../Model/mailModel')

exports.sendmailController1=async(req,res)=>{
    const userId = req.payload
    console.log(userId);
    try {
        const { from , to, subject, message , date } = req.body
        const newMail = new mails({
            from , to, subject, message , date 
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

