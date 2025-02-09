console.log("First push done");

//express server required using required
const express = require("express");
//using express server
const app = express();

//listening the app server on port 
app.listen(9999, () => {
    console.log("Server is running on port 9999");
})

//demo request handler
app.use("/demo1", (req, res) => {
    res.send("Namaste Duniya bhai");
})

//demo request handler
app.use("/demo2", (req, res) => {
    res.send("hello jo");
})