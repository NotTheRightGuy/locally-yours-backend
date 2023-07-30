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

//Importing Routes
const userRouter = require("./routes/User.js");
const newsRouter = require("./routes/News.js");
const categoryRouter = require("./routes/Category.js");
const pincode = require("./routes/Pincode.js");
const localNews = require("./routes/Local.js");

app.use("/users", userRouter);
app.use("/news", newsRouter);
app.use("/category", categoryRouter);
app.use("/pincode", pincode);
app.use("/local", localNews);

app.get("/", (req, res) => {
    res.send("Hosted server is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
