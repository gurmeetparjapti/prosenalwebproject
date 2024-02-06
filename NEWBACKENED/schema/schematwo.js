const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    lastname: {
        type: String
    },
    cooment: {
        type: String
    }

});
const contactapi=new mongoose.model("mean45",contactSchema);
module.exports=contactapi;
