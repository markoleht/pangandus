const mongoose = require("mongoose");

const SessionSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "email required"],
    },
    password: {
        type: String,
        required: [true, "Password Required"]
    }
});
module.exports = mongoose.model("Session", SessionSchema);