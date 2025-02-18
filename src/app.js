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
app.get("/demo1", (req, res) => {
    res.send("Namaste Duniya bhai");
})

//demo request handler
app.post("/demo2", (req, res) => {
    res.send("hello jo");
})

//default reqesut handler
app.use("/admin", (req, res, next) => {
    res.send("Welcome to my server");
    const token = "oye";
    const isAdminAuth = token === "xyz";
    if (!isAdminAuth) {
        res.send("Unauthorized hai admin")
    } else {
        next();
    }
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
})

app.get("/admin/deleteUSer", (req, res) => {
    res.send("Deleted a user");
})

//1st best way is try catch
//2nd best way of error handling 
app.use("/", (err, req, res, next) => {
    if (err) {
        res.send("Something went wrong ");
    }
});