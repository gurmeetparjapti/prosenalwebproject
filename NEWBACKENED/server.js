require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000


require("./db/connection");
const cors = require("cors");
const router = require("./routes/route");

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT,()=>{
    console.log(`application is runing at ${PORT}`);
})