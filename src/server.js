import express from "express";
import dotenv from "dotenv";
const app = express();
import router from "./routers/index.js"
import connect from "./helpers/connect.js";

// Environment Variables
dotenv.config({
    path: "src/config/env/config.env"
});


const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;


app.listen(PORT,async () => {
    // DB Connection    
    await connect();
    
    app.use("/api", router)
    console.log(`App started on ${PORT} : ${NODE_ENV}`);
})

