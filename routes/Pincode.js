const pincodeRouter = require("express").Router();
const supabase = require("../supabase");
const axios = require("axios");

pincodeRouter.post("/", async (req, res) => {
    const { pincode } = req.body;
    const options = {
        method: "POST",
        url: "https://get-details-by-pin-code-india.p.rapidapi.com/detailsbypincode",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
                "0537b8df84msh9ddd242f693c849p19779ajsn2a3dfeb14aba",
            "X-RapidAPI-Host": "get-details-by-pin-code-india.p.rapidapi.com",
        },
        data: { pincode: pincode },
    };
    try {
        const response = await axios.request(options);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});

module.exports = pincodeRouter;
