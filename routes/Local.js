const localNews = require("express").Router();
const supabase = require("../supabase");
const axios = require("axios");

let postOffice = "";

localNews.post("/", async (req, res) => {
    const { pincode } = req.body;

    await axios.post("/pincode", { pincode: pincode }).then((response) => {
        postOffice = response.data;
    });
});

module.exports = localNews;
