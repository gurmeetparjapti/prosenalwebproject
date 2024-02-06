const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keysecret = "jbvkajbfsfuwf";
const userSchema = new mongoose.Schema({
    Username: {
        type: String
    },
    user_email: {
        type: String
    },
    phone_no: {
        type: String
    },
    user_pass: {
        type: String
    },
    user_repass: {
        type: String
    },
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]

});




userSchema.pre("save", async function (next) {
    if (this.isModified("user_pass","user_repass")) {
        this.user_pass = await bcrypt.hash(this.user_pass, 12);
        this.user_repass = await bcrypt.hash(this.user_repass, 12);
    }
    next();
});
userSchema.methods.customgeenratefunction = async function () {
    try {
        let mytoken = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });
        this.tokens = this.tokens.concat({ token: mytoken });
        await this.save();
        return mytoken;
    }
    catch (error) {
        res.statis(422).json(error);
    }

}



const users = new mongoose.model("revisionS", userSchema);
module.exports = users;
