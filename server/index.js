
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connection Successful");
    }).catch((err) => {
        console.error(err);
    });

app.use(express.json());
app.use("/api/auth", authRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend is running!');
});

