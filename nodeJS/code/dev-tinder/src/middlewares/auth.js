const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/userModel");

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                message: "Please Login!",
                error: true,
            });
        }

        const decodeMessage = jwt.verify(token, process.env.JWT_ENCRYPT_PASS);

        const { _id } = decodeMessage;

        // user is an instance of User i.e each document is instance of `User` Model`
        const user = await User.findById(_id);
        if (!user) {
            throw new Error("User not found");
        }

        //Attach the user object to the req.
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send("ERROR:" + error.message);
    }
};

module.exports = userAuth;
