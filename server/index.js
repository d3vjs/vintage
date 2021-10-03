
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const userRoute = require('./routes/user');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connection Successful");
    }).catch((err) => {
        console.error(err);
    });

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend is running!');
});

