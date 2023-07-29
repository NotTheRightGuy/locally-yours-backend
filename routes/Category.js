const categoryRouter = require("express").Router();
const supabase = require("../supabase");

categoryRouter.post("/email", async (req, res) => {
    const { email } = req.body;
    const {
        technology,
        tech_time,
        politics,
        politics_time,
        sports,
        sports_time,
        fashion,
        fashion_time,
        anime,
        anime_time,
    } = req.body;
    console.log(
        email,
        technology,
        tech_time,
        politics,
        politics_time,
        sports,
        sports_time,
        fashion,
        fashion_time,
        anime,
        anime_time
    );
    const { data, error } = await supabase
        .from("Users")
        .update({
            technology,
            tech_time,
            politics,
            politics_time,
            sports,
            sports_time,
            fashion,
            fashion_time,
            anime,
            anime_time,
        })
        .eq("email", email);
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ message: "Category updated successfully!" });
});

module.exports = categoryRouter;
