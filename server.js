require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger.js");

const app = express();
app.use(
    cors({
        origin: "*",
    })
);

app.use(logger);
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
