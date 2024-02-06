const mongoose = require("mongoose");

const DB = "mongodb+srv://kumargurmeet096:kumargurmeet096@cluster0.2xicnjn.mongodb.net/mobcoder";
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection start")).catch((error)=> console.log(error.message));
   