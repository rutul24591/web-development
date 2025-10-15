const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

// Initialize data value;
let data = "Initial Data";

// Array to store waiting client connections
const waitingClients = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
    console.log(`Client last known data: ${req.query.lastData}`);
    console.log(`Current data on server: ${data}`);

    if (data !== req.query.lastData) {
        console.log("Data has changed. Sending new data to client");
        res.json({ data });
    } else {
        console.log(
            "Data has not changed. Holding the connection and waiting for data change"
        );
        waitingClients.push(res);

        console.log(`Number of waiting clients: ${waitingClients.length}`);
    }
});

// Use post/put to update
app.get("/updatedData", (req, res) => {
    console.log(`Old data: ${data}`);
    data = req.query.data;
    // console.log(`New data to update: ${newData}`);

    // data = newData;

    // Send the new data to all waiting clients
    console.log(
        `Sending updated data to all ${waitingClients.length} waiting clients`
    );

    while (waitingClients?.length > 0) {
        const client = waitingClients.pop();
        client.json({ data });
    }

    // Clear waiting list
    // waitingClients = [];
    waitingClients.length = 0;
    console.log(`Waiting clients cleared`);

    res.send({ success: true, message: "Data updated successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
