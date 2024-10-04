const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");

dotenv.config();
const PORT=process.env.PORT || 8000;
const entryRouter=require("./route/registrationentry");

const app=express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(()=>console.log(error));

app.use(express.json());
app.use(cors());


app.use("/api/entry",entryRouter);

app.listen(process.env.PORT,()=>console.log(`Server is running on PORT ${PORT}`));

