const Mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();

const userSchema = new Mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            maxLength: 40,
            minLength: 3,
        },
        lastName: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            trim: true,
            validate: function (value) {
                if (!["male", "female", "others"].includes(value)) {
                    throw new Error(
                        "Not a valid gender (male , female and others)"
                    );
                }
            },
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            validate: function (value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Invalid Email :" + value);
                }
            },
        },
        age: {
            type: Number,
            min: 18,
        },
        password: {
            type: String,
            required: true,
            validate: function (value) {
                if (!validator.isStrongPassword(value)) {
                    throw new Error("Enter strong password");
                }
            },
        },
        photoUrl: {
            type: String,
            default:
                "https://cielhr.com/wp-content/uploads/2020/10/dummy-image.jpg",
            validate(value) {
                if (!validator.isURL(value)) {
                    throw new Error("Invalid URL :" + value);
                }
            },
        },
        about: {
            type: String,
            default: "This is the default description for user",
        },
        skills: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);

userSchema.methods.getJwt = async function () {
    const user = this; // Points to current user

    const token = await jwt.sign(
        { _id: user._id },
        process.env.JWT_ENCRYPT_PASS,
        {
            expiresIn: "1h",
        }
    );

    return token;
};

userSchema.methods.validatePassword = async function (passwordToValidate) {
    const user = this;
    const passwordHash = user.password;

    const isValidPassword = await bcrypt.compare(
        passwordToValidate,
        passwordHash
    );

    return isValidPassword;
};

const userModel = Mongoose.model("User", userSchema);

module.exports = userModel;
