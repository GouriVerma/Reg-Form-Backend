const {Schema,model}=require("mongoose");

const entrySchema=new Schema({
    companyName:{
        type:String,
        required:true
    },
    officeAddress:{
        type:String,
        required:true
    },
    pocName:{
        type:String,
        required:true
    },
    pocContact:{
        type:String,
        required:true
    },
    pocMail:{
        type:String,
        required:true
    },
    pocLinkedIn:{
        type:String,
        required:true
    }
},{timestamps:true})

const RegEntry=model("entry",entrySchema);

module.exports={RegEntry};