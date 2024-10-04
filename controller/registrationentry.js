const {RegEntry}=require("../models/registrationentry");
const expressAsyncHandler=require("express-async-handler");
const nodemailer=require("nodemailer");

const mailOptions={
    html:"<div><p>Hi Thanks for applying</p><br /><p>Thanks for connecting with us</p></div>"
}

const transporter=nodemailer.createTransport({
    service:process.env.SMPT_SERVICE,
    auth:{
        user:process.env.SMPT_MAIL,
        pass:process.env.SMPT_PASSWORD
    }
});

const handleCreateEntry=expressAsyncHandler(async(req,res,next)=>{
    console.log(req.body);
    const {companyName,officeAddress,pocName,pocContact,pocMail,pocLinkedIn}=req?.body;
    if(!companyName || !officeAddress || !pocName || !pocMail || !pocLinkedIn || !pocContact){
        return res.status(400).json({msg:"Incomplete Details"});
    }

    const entry=await RegEntry.create(req.body);

    try {
        await transporter.sendMail({
            from:process.env.SMPT_MAIL,
            to:entry.pocMail,
            subject:"Invitation for Internship Fair",
            html:mailOptions.html
        });
        console.log("Mail sent successfully");
    } catch (error) {
        console.log("error");
    }

    return res.status(200).json(entry);
})

module.exports={handleCreateEntry};