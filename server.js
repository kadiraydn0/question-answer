const express = require("express");
const dotenv = require("dotenv");
const app = express();

// Environment Variables
dotenv.config({
    path: "config/env/config.env"
});

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;


app.get("/", (req,res) => res.send('<h1>Selamun Aleyküm Beyler</h1>'))

app.listen(PORT, () => {

    console.log(`App started on ${PORT} : ${NODE_ENV}`);
})

