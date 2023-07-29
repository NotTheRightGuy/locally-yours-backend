const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
// const supabase = require("../supabase.js")

// const {createClient} = require("@supabase/supabase-js")
// const API="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphc2JncnVtamdtZnJub3djYWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1OTIzMzEsImV4cCI6MjAwNTE2ODMzMX0.v3aaBVcA4lCBSVRmU-UWH6X6MsNIC-fdVEYCfQh0gDY"
// const URL="https://zasbgrumjgmfrnowcabo.supabase.co"

// const supabase=createClient(URL,API)
const jsonParser = bodyParser.json()
app.use(cors())

// const NewsAPI = require("newsapi");
// const news = new NewsAPI(process.env.NEWS_API);
const cityFetch=()=>{

    input={
        "pincode":"123456"
    }

    fetch("https://reqres.in/api/users",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
            body:JSON.stringify(input)
        })
        .then(res=>res.json())
        .then(res=>res["output"])
    // console.log(res)
    newsFetch(res)
}

const newsFetch=(city)=>{
    input=city
    fetch("news/endpoint",{
        method:"POST"   ,
        headers:{
            'Content-Type':"application/json"
        },
            body:JSON.stringify(input)
        })
        .then(res=>res.json())
        .then(res=>res["output"])
    console.log(res)
    newsFetch(res)
}

// app.post("/api/posting",jsonParser,async (req,res) => {
//     input={
//         "name":"morpheus",
//         "job":"leader"
//     }

//     fetch("https://reqres.in/api/users",{
//         method:"POST",
//         headers:{
//             'Content-Type':"application/json"
//         },
//             body:JSON.stringify(input)
//         })
//         .then(res=>res.json())
//         .then(res=>res["output"])
//         res.send(res)   
// })
//     let output=false;

    // res.json({"output":data})
// })
