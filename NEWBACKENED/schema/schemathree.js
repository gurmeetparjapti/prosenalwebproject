const mongoose = require("mongoose");

const hiringSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    course: {
        type: String
    },
});

const hiringapidata=new mongoose.model("folders",hiringSchema);
module.exports=hiringapidata;
