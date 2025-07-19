const express = require("express");
const { trusted } = require("mongoose");

const userAuth = require("../middlewares/auth");

const ConnectionRequest = require("../models/connectionRequestModel");
const User = require("../models/userModel");

const userRouter = express.Router();

const USER_SAFE_DATA = "firstName lastName age gender about skills photoUrl";

userRouter.get("/user/requests/received", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;

        const connectionRequests = await ConnectionRequest.find({
            toUserId: loggedInUser._id,
            status: "interested",
        }).populate("fromUserId", USER_SAFE_DATA);

        res.json({
            message: "Connections requests fetched successfully",
            connectionRequests,
        });
    } catch (error) {
        res.send(400).json({
            message: "ERROR: " + error.message,
            error: true,
        });
    }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;

        const connectionRequests = await ConnectionRequest.find({
            $or: [
                { toUserId: loggedInUser._id, status: "accepted" },
                { fromUserId: loggedInUser._id, status: "accepted" },
            ],
        })
            .populate("fromUserId", USER_SAFE_DATA)
            .populate("toUserId", USER_SAFE_DATA);

        console.log(`connections:`, connectionRequests);

        const data = connectionRequests.map((request) => {
            if (
                request.fromUserId._id.toString() === loggedInUser._id.toString
            ) {
                return request.toUserId;
            }
            return request.fromUserId;
        });

        console.log(`data: `, data);

        res.json({
            message: "Connections requests fetched successfully",
            data,
        });
    } catch (error) {
        res.send(400).json({
            message: "ERROR: " + error.message,
            error: true,
        });
    }
});

userRouter.get("/feed", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        limit = limit > 100 ? 100 : limit;

        /** Should not be shown on feed:
         *  1. Oneself(Logged in user)
         *  2. Accepted connections
         *  3. Rejected connections
         *  4. Ignored connections
         */
        const connectionRequest = await ConnectionRequest.find({
            $or: [
                { toUserId: loggedInUser._id },
                { fromUserId: loggedInUser._id },
            ],
        }).select("fromUserId toUserId");

        const hideUsersFromFeed = new Set();

        connectionRequest.forEach((request) => {
            hideUsersFromFeed.add(request.fromUserId.toString());
            hideUsersFromFeed.add(request.toUserId.toString());
        });

        const users = await User.find({
            $and: [
                { _id: { $ne: loggedInUser._id } },
                { _id: { $nin: Array.from(hideUsersFromFeed) } },
            ],
        })
            .select(USER_SAFE_DATA)
            .skip(skip)
            .limit(limit);

        res.json({
            message: "Connections users fetched successfully",
            data: users,
        });
    } catch (error) {
        res.send(400).json({
            message: "ERROR: " + error.message,
            error: true,
        });
    }
});

// TODO: Not to expose these routes. Adding just to keep old code.
// userRouter.get("/user", userAuth, async (req, res) => {
//     const emailId = req.body.email;

//     try {
//         const user = await User.find({ email: emailId });
//         if (!user.length) {
//             res.send(404).send("User not found");
//         }
//         res.send(user);
//     } catch (error) {
//         res.status(404).send("Not found");
//     }
// });

// // FEED API - GET /feed - get all users from the database
// userRouter.get("/feed", userAuth, async (req, res) => {
//     try {
//         const users = await User.find({});
//         if (!users.length) {
//             res.send(404).send("No user exists");
//         }
//         res.status(200).send(users);
//     } catch (error) {
//         res.status(400).send("Something went wrong while fetching users");
//     }
// });

// userRouter.patch("/user/:userId", userAuth, async (req, res) => {
//     const userId = req.params?.userId;
//     const data = req.body;
//     try {
//         const ALLOWED_UPDATES = [
//             "photoUrl",
//             "about",
//             "gender",
//             "age",
//             "skills",
//         ];
//         const isUpdateAllowed = Object.keys(data).every((key) => {
//             ALLOWED_UPDATES.includes(key);
//         });

//         if (!isUpdateAllowed) {
//             throw new Error("Update not allowed");
//         }

//         if (data?.skills.length > 10) {
//             throw new Error("Skills cannot be more than 10");
//         }
//         const user = await User.findByIdAndUpdate({ _id: userId }, data, {
//             returnDocument: "after", // return doc after update. before returns before update
//             runValidators: true,
//         });
//         res.status(200).send(
//             `User ${user?.firstName} with id ${userId} updated successfully`
//         );
//     } catch (error) {
//         res.status(400).send("Error deleting user");
//     }
// });

// userRouter.put("/user", userAuth, async (req, res) => {
//     const userId = req.body.userId;
//     try {
//         const user = await User.findByIdAndUpdate(
//             { _id: userId },
//             {
//                 firstName: "Puneet",
//                 lastName: "Thakker",
//                 age: 34,
//                 email: "punla@yahoo.com",
//                 password: "pund@890",
//                 gender: "Male",
//             },
//             {
//                 lean: trusted,
//                 returnDocument: "after", // return doc after update. before returns before update
//                 runValidators: true,
//             }
//         );
//         res.status(200).send(
//             `User ${user?.firstName} with id ${userId} updated successfully`
//         );
//     } catch (error) {
//         res.status(400).send("Error deleting user");
//     }
// });

// userRouter.delete("/user", userAuth, async (req, res) => {
//     const userId = req.body.userId;
//     try {
//         // const user = await User.findByIdAndDelete(userId);
//         // Same as above
//         const user = await User.findByIdAndDelete({ _id: userId });
//         res.status(200).send(
//             `User ${user?.firstName} with id ${userId} deleted successfully`
//         );
//     } catch (error) {
//         res.status(400).send("Error deleting user");
//     }
// });

module.exports = userRouter;
