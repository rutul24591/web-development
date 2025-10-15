const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/sse-event", (req, res) => {
    // setup sse logic
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    /** !!!
     * For Server-Sent Events to work, each message must be prefixed with data:
     * and followed by two newlines (\n\n)
     */
    res.write("data: Welcome to Server side event\n\n");
    res.write("data: Starting with message stream\n\n");

    const interval = setInterval(() => {
        const data = new Date().toLocaleTimeString();
        res.write(`data: ${data}\n\n`);
    }, 3000);

    req.on("close", () => {
        clearInterval(interval);
    });
});

app.listen(PORT, () => {
    console.log(`SSE server listening on port ${PORT}`);
});
