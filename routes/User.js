const userRouter = require("express").Router();
const supabase = require("../supabase.js");

userRouter.get("/", async (req, res) => {
    const { data, error } = await supabase.from("Users").select();
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
});

userRouter.post("/", async (req, res) => {
    const {
        email,
        first_name,
        last_name,
        phone,
        adr_line_1,
        adr_line_2,
        pincode,
        city,
        state,
    } = req.body;
    const { data, error } = await supabase.from("Users").insert([
        {
            email,
            first_name,
            last_name,
            phone,
            adr_line_1,
            adr_line_2,
            pincode,
            city,
            state,
        },
    ]);
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({
        message: `User with email ${email} and pincode ${pincode} added successfully!`,
    });
});

userRouter.post("/email", async (req, res) => {
    const { email } = req.body;
    const { data, error } = await supabase
        .from("Users")
        .select()
        .eq("email", email);
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
});

userRouter.put("/email", async (req, res) => {
    const { email } = req.body;
    const { data, error } = await supabase
        .from("Users")
        .update({ ...req.body })
        .eq("email", email);
    if (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({
        message: `User with email ${email} updated successfully!`,
    });
});

module.exports = userRouter;
