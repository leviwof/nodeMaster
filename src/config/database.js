const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/Datahub",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
};

module.exports = connectDB;
// connectDB()
//     .then(() => {
//         console.log("Connected to Mongo data........");
//     })
//     .catch(() => {
//         console.error("Database not connected,Try again.");
//     });

// /mongoose.connect give promises thats why put it in async