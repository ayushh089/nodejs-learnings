const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const userModel = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/create", (req, res) => {
  let { username, password, email, age } = req.body;

  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) return err.message;
    let createdUser = await userModel.create({
      username,
      password: hash,
      email,
      age,
    });
    let token = jwt.sign({ email }, "ayushbahutachahai");
    res.cookie("token", token);
    res.send(createdUser);
  });
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.send("Something is Wrong !!");
  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (err) return res.send(er.message);
    if (result) {
      let token = jwt.sign({ email: user.email }, "ayushbahutachahai");
      res.cookie("token", token);
      res.render("home");
    } else return res.send("Something is Wrong !!");
  });
});
app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.render("home");
});
app.listen(3000);
