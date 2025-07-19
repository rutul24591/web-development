const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./config/database");

const authRouter = require("./routers/auth");
const profileRouter = require("./routers/profile");
const requestRouter = require("./routers/request");
const userRouter = require("./routers/user");

const app = express();
const PORT = 3001;

// app.use("/", (req, res) => {
//     res.send("Hello from express server");
// });

// Cookies wont get set in local. In prod it will.
// To make cookies set in local, whitelist the UI url here. Also with all axios call pass withCredentials: true
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    })
);
/**
 * Without this middleware you won't be able to read the req data(comes in stream)
 * This is a built-in middleware function in Express.js (available from version 4.16.0 onwards)
 * that is used to parse incoming request bodies with JSON payloads.
 * When a client sends data to your Express server in JSON format
 * (e.g., via a POST or PUT request with Content-Type: application/json),
 * express.json() automatically parses this JSON data
 * and makes it available in the req.body object within your route handlers.
 * Without this middleware, Express would not automatically parse the raw JSON data in the request body.
 * */
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectToDB()
    .then(() => {
        console.log("Successfully established connection to Database");
        app.listen(PORT, () => {
            console.log(`Express server listening on PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error establishing connection to Database");
        console.log(error);
    });
