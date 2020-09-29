const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"]
    },
    email: {
        type: String,
        required: [true, "email required"],
        unique: [true],
        dropDups: [true]
    },
    password: {
        type: String,
        required: [true, "Password Required"]
    }
});
module.exports = mongoose.model("Users", UserSchema);