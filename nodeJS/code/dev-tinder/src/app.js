const express = require("express");

const app = express();
const PORT = 3001;

app.use("/", (req, res) => {
    res.send("Hello from express server");
});

app.listen(PORT, () => {
    console.log(`Express server listening on PORT ${PORT}`);
});
