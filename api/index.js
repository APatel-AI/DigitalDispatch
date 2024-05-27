const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const dotenv = require("dotenv/config");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);


mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL);
app.use(cors());

app.use(express.json());

app.post('/register', async (req,res) => {
  const {username,password} = req.body;
  try{
    const userDoc = await User.create({
      username,
      password:bcrypt.hashSync(password,salt),
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});
app.listen(4000);
