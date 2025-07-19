const express = require("express");

const userAuth = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequestModel");
const User = require("../models/userModel");

const requestRouter = express.Router();

// requestRouter.post("sendConnectionRequest", userAuth, async (req, res) => {
//     const user = req.user;

//     // Send a connection req
//     console.log("Sending connection request");

//     res.send(user.firstName + "has sent a request to connect");
// });

requestRouter.post(
    "/request/send/:status/:toUserId",
    userAuth,
    async (req, res) => {
        try {
            const user = req.user;
            const toUserId = req.params.toUserId;
            const fromUserId = req.user._id;
            const status = req.params.status;

            const allowedStatuses = ["interested", "ignored"];

            // Check status is allowed
            if (!allowedStatuses.includes(status)) {
                throw new Error("Incorrect status type: ", status);
            }

            console.log("Status check Completed:  ✅");

            // Check if toUserId exists in system
            const toUser = await User.findById(toUserId);

            if (!toUser) {
                return res.status(404).json({
                    message: "User does not exists",
                    success: false,
                });
            }

            console.log("Existing user check Completed:  ✅");

            // Check for existing connection request from each other
            const checkForExistingConnection = await ConnectionRequest.findOne({
                $or: [
                    { fromUserId, toUserId },
                    { fromUserId: toUserId, toUserId: fromUserId },
                ],
            });

            if (checkForExistingConnection) {
                throw new Error("Already sent the connection request before");
            }

            console.log("Existing connection check Completed:  ✅");

            const connectionRequest = new ConnectionRequest({
                fromUserId,
                toUserId,
                status,
            });

            console.log(`connectionRequest: `, connectionRequest);

            const data = await connectionRequest.save();

            console.log(`data: `, data);

            console.log("Connection save check Completed:  ✅");

            res.status(200).json({
                message:
                    status === "interested"
                        ? user.firstName +
                          " is " +
                          status +
                          " in " +
                          toUser.firstName
                        : user.firstName + status + " your connection request.",
                data,
                success: true,
            });
        } catch (error) {
            res.status(400).send("ERROR: " + error.message);
        }
    }
);

// TODO
requestRouter.post(
    "/request/review/:status/:requestId",
    userAuth,
    async (req, res) => {
        try {
            const loggedInUser = req.user;
            const status = req.params.status;
            const requestId = req.params.requestId;

            const allowedStatuses = ["accepted", "rejected"];

            if (!allowedStatuses.includes(status)) {
                return res
                    .status(400)
                    .json({ message: "Incorrect status type", status });
            }

            const connectionRequest = await ConnectionRequest.findOne({
                _id: requestId,
                toUserId: loggedInUser._id,
                status: "interested",
            });

            if (!connectionRequest) {
                return res.status(404).json({
                    message: "Connection request not found",
                });
            }

            connectionRequest.status = status;

            const data = await connectionRequest.save();

            res.status(200).json({
                message:
                    "Connection request " +
                    status +
                    " from " +
                    loggedInUser.firstName,
                data,
            });
        } catch (error) {
            res.status(400).send("ERROR: " + error.message);
        }
    }
);

module.exports = requestRouter;
