
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const ordersRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connection Successful");
    }).catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend is running!');
});

