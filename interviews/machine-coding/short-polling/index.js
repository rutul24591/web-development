// import express from 'express'; Change the package.json to use "type": "module" to use this syntax

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3001;
let data = "Initial Data";

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
    res.send({ data });
});

app.get("/getUpdatedData", (req, res) => {
    data = `Sending new data at ${new Date().toLocaleTimeString()}`;
    res.send({ data });
});

app.listen(PORT, () => {
    console.log(`SERVER RUNNING AT PORT ${PORT}`);
});
