const {Router}=require("express");
const { handleCreateEntry } = require("../controller/registrationentry");

const router=new Router();

router.post("/",handleCreateEntry);

module.exports=router;