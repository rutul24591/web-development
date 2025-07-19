const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");
const { validateSignUpData } = require("../utils/validation");
const userAuth = require("../middlewares/auth");

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            // throw new Error("Invalid credentials");
            res.status(401).json({
                message: "Invalid Credentials",
            });
        }
        const isPasswordValid = await user.validatePassword(password);

        if (isPasswordValid) {
            const token = await user.getJwt();

            // Can chain it as well
            res.cookie("token", token, {
                expires: new Date(Date.now() + 1 * 3600000),
            }).json({
                message: "Login Successful!!!",
                data: user,
            });
        } else {
            res.status(401).json({
                message: "Invalid Credentials",
            });
        }
    } catch (error) {
        res.status(400).send("ERROR : " + error.message);
    }
});

authRouter.post("/register", async (req, res) => {
    try {
        //Validate body received
        await validateSignUpData(req);

        const { firstName, lastName, email, password, age, skills, gender } =
            req.body;

        // Encrypt the password
        const passwordHash = await bcrypt.hash(password, 10);
        console.log("password hash register", passwordHash);

        // Create a new instance of User model.
        const newUser = new User({
            firstName,
            lastName,
            email,
            gender: gender ?? "male",
            password: passwordHash,
            age: age ? age : 18,
            skills: skills ? skills : [],
        });

        const savedUser = await newUser.save();
        const token = await savedUser.getJwt();

        // Can chain it as well
        res.cookie("token", token, {
            expires: new Date(Date.now() + 1 * 3600000),
        }).json({
            message: "Registration Successful !!",
            data: savedUser,
        });
    } catch (error) {
        res.status(404).send("ERROR ENCOUNTERED " + error);
    }
});

authRouter.post("/logout", userAuth, async (req, res) => {
    try {
        res.clearCookie("token");

        // !!Also can be done this way but it seems clearing cookie is better. Depends on view

        // res.cookie("token", null, {
        //     expires: new Date(Date.now()),
        // }).send("User Logged out successfully");
        res.send("Logged out succesfully");
    } catch (error) {
        res.status(400).send("ERROR" + error.message);
    }
});

module.exports = authRouter;
