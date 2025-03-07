const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 4,
        maxLength: 25
    },
    lastName: {
        type: String,
        required: true,
        minlength: 4,
        maxLength: 25
    },
    emailId: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,
        validate(value) {
            if (!["male", "female", "others"].includes(value)) {
                throw new Error("Gender data is not valid");
            }
        }
    },
    photoUrl: {
        type: String,
        default: "https://imgs.search.brave.com/-kR17trVnEDSHiJSnQA0Zw55m6yxjOilbtp4tc5YbNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzI5Lzk5Lzc1/LzM2MF9GXzExMjk5/OTc1NDBfd2RzbUVG/bXBFQVpqcURKYnEz/TEZTNVM1eHVtaGJO/YlouanBn"
    },
    about: {
        type: String,
        default: "I am a user of Datahub"
    },
    skills: {
        type: [String],
    }
},
    {
        timestamps: true,
    });

const User = mongoose.model("User", userSchema);
module.exports = User;