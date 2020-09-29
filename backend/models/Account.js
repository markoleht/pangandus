const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    account_number: {
        type: String,
        default: "EE7"+Math.floor(Math.random()*9000000000000) + 1000000000000000,
    },
    balance: {
        type: Number,
        default: 1000,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

module.exports = mongoose.model("Account", accountSchema)