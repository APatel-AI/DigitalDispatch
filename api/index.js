const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const dotenv = require("dotenv/config");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const secret = "cwfkjhdjkhf";
const jwt = require("jsonwebtoken");

mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});
app.listen(4000);

// if (response.status === 200) {
//   toast.success('Successfully created!');

// } else {
//   toast.error('This is an error!');

// }
