console.log("First push done");
//express server required using required
const express = require("express");

//importing mongodb cluster
const connectDB = require("./config/database");
//using express server
const app = express();

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Virat",
    lastName: "Kholi",
    emails: "Virat@gmail.com",
    password: "Virat@18"

  }
  const user = new User(userObj);
  await user.save();
  res.send("User added successfully");
})

connectDB()
  .then(() => {
    console.log("Connected to database.....")
    //listening the app server on port 
    app.listen(9999, () => {
      console.log("Server is running on port 9999");
    })

  })
  .catch(() => {
    console.log("Failed to connect db,please try again")
  })
