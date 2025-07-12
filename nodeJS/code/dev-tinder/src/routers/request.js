const express = require("express");

const userAuth = require("../middlewares/auth");

const requestRouter = express.Router();

requestRouter.post("sendConnectionRequest", userAuth, async (req, res) => {
    const user = req.user;

    // Send a connection req
    console.log("Sending connection request");

    res.send(user.firstName + "has sent a request to connect");
});

module.exports = requestRouter;
