const express = require("express");
const { trusted } = require("mongoose");

const User = require("../models/userModel");

const userRouter = express.Router();

// TODO: Not to expose these routes. Adding just to keep old code.
app.get("/user", async (req, res) => {
    const emailId = req.body.email;

    try {
        const user = await User.find({ email: emailId });
        if (!user.length) {
            res.send(404).send("User not found");
        }
        res.send(user);
    } catch (error) {
        res.status(404).send("Not found");
    }
});

// FEED API - GET /feed - get all users from the database
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        if (!users.length) {
            res.send(404).send("No user exists");
        }
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send("Something went wrong while fetching users");
    }
});

app.patch("/user/:userId", async (req, res) => {
    const userId = req.params?.userId;
    const data = req.body;
    try {
        const ALLOWED_UPDATES = [
            "photoUrl",
            "about",
            "gender",
            "age",
            "skills",
        ];
        const isUpdateAllowed = Object.keys(data).every((key) => {
            ALLOWED_UPDATES.includes(key);
        });

        if (!isUpdateAllowed) {
            throw new Error("Update not allowed");
        }

        if (data?.skills.length > 10) {
            throw new Error("Skills cannot be more than 10");
        }
        const user = await User.findByIdAndUpdate({ _id: userId }, data, {
            returnDocument: "after", // return doc after update. before returns before update
            runValidators: true,
        });
        res.status(200).send(
            `User ${user?.firstName} with id ${userId} updated successfully`
        );
    } catch (error) {
        res.status(400).send("Error deleting user");
    }
});

app.put("/user", async (req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndUpdate(
            { _id: userId },
            {
                firstName: "Puneet",
                lastName: "Thakker",
                age: 34,
                email: "punla@yahoo.com",
                password: "pund@890",
                gender: "Male",
            },
            {
                lean: trusted,
                returnDocument: "after", // return doc after update. before returns before update
                runValidators: true,
            }
        );
        res.status(200).send(
            `User ${user?.firstName} with id ${userId} updated successfully`
        );
    } catch (error) {
        res.status(400).send("Error deleting user");
    }
});

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try {
        // const user = await User.findByIdAndDelete(userId);
        // Same as above
        const user = await User.findByIdAndDelete({ _id: userId });
        res.status(200).send(
            `User ${user?.firstName} with id ${userId} deleted successfully`
        );
    } catch (error) {
        res.status(400).send("Error deleting user");
    }
});

module.exports = userRouter;
