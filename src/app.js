console.log("First push done");
//express server required using required
const express = require("express");

//importing mongodb cluster
const connectDB = require("./config/database");
//using express server
const app = express();

//started middleware for json for req.body
app.use(express.json());

// User model for databse
const User = require("./models/user");

//find a single user
app.get("/user", async (req, res) => {
  try {
    const userEmail = req.body.emailId;
    const users = await User.findOne({ emailId: userEmail })
    if (users.length === 0 || !users) {
      res.send("User not found")
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send(error);
  }
})
//find all users
app.get("/getAllUser", async (req, res) => {
  try {
    const userEmail = req.body.emailId;
    const user = await User.find({})
    if (user.length === 0) {
      res.send("User not found")
    } else {
      res.send(user)
    }
  } catch (error) {
    res.status(400).send(error);
  }
})

//Delete a user
app.delete("/deleteUser", async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findByIdAndDelete({ _id: userId });
    // const user = await User.findByIdAndDelete(userId);
    if (!user || user.length === 0) {
      res.send("User not found");
    } else {
      res.send("User deleted successfully");
    }
  } catch (error) {
    res.status(400).send(error);
  }
})

// Update data for a user
app.patch("/updateUser", async (req, res) => {
  const data = req.body;
  const userId = req.body.userId;
  console.log(data)
  try {
    const userData = await User.findByIdAndUpdate({ _id: userId },
      data,
      { runValidators: true });
    console.log(userData)
    if (!userData || userData.length === 0) {
      res.send("User not found")
    } else {
      res.send("User updated successfully")
    }
  } catch (error) {
    res.status(400).send("Update failed" + error.message);
  }
})
//add new user in databse 
app.post("/signup", async (req, res) => {
  console.log("00000000000000", req.body)
  try {
    const userObj = req.body;
    const user = new User(userObj);
    console.log("111111111", user)
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
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
