const express = require("express");
const cors = require("cors");
const app = express();
const User = require('./models/User')
require('dotenv').config()
const { mongoose } = require('mongoose');


app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("Test Works");
});

// Register Route
app.post('/register', async (req, res) => {
    const { username, email, password, firstName, lastName, address, phone, food} = req.body
    try {
        const userInfo = await User.create({
            username,
            email,
            password,
            firstName,
            lastName,
            address,
            phone, 
            food
        })
        res.json(userInfo)
    } catch (error) {
        res.status(422).json(error)
    }
})

app.listen(4000);
