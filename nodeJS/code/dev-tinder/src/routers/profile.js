const express = require("express");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userAuth = require("../middlewares/auth");
const { validateProfileEditData } = require("../utils/validation");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
    try {
        res.json({
            message: "Profile Page",
            data: req.user,
        });
    } catch (error) {
        res.status(400).send("ERROR : " + error.message);
    }
});

profileRouter.put("/profile/edit", userAuth, async (req, res) => {
    try {
        if (!validateProfileEditData(req)) {
            throw new Error("Invalid Edit fields requested");
        }

        // !!!req.user is attached by userAuth which is an instance of User only
        const loggedInUser = req.user;

        //Make edit to user
        loggedInUser.firstName = req.body.firstName;
        loggedInUser.lastName = req.body.lastName;

        Object.keys(req.body).forEach(
            (key) => (loggedInUser[key] = req.body[key])
        );

        // !!!remember loggedInUser is an instance of User model
        await loggedInUser.save();
        res.json({
            statusCode: 200,
            message: `${loggedInUser.firstName}, profile is updated successfully`,
            data: loggedInUser,
        });
    } catch (error) {
        res.status(400).json({
            errorMessage: error.message,
            error: error,
        });
    }
});

// Validate once
profileRouter.put("/profile/forgot-password", userAuth, async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const user = req.user;

        const isOldPasswordValid = await user.validatePassword(oldPassword);
        if (!isOldPasswordValid) {
            throw new Error("Password doesn't match");
        }

        const checkForStrongPassword = validator.isStrongPassword(newPassword);

        if (!checkForStrongPassword) {
            throw new Error("Not a strong password");
        }

        // Encrypt the password
        const newPasswordHash = await bcrypt.hash(newPassword, 10);
        console.log("password hash forgot password", newPasswordHash);

        user.password = newPasswordHash;

        await user.save();

        res.json({
            statusCode: 200,
            message: `${user.firstName}, profile password is updated successfully`,
        });
    } catch (error) {
        res.status(400).json({
            errorMessage: error.message,
            error: error,
        });
    }
});

module.exports = profileRouter;
