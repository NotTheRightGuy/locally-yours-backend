require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://fxwjfdwpvgwintqbikwv.supabase.co";
const supabaseKey = process.env.KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
