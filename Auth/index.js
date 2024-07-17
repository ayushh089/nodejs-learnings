const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.cookie("name", "ayush");
//   res.send("done");
// });
// app.get("/read", (req, res) => {
//   console.log(req.cookies);
//   res.send("done");
// });
// app.get("/", (req, res) => {
//   bcrypt.hash("ayush123", 10, (err, hash) => {
//     console.log(hash);
//     res.send(hash);
//     bcrypt.compare("ayush123", hash, function (err, result) {
//       // result == a
//       console.log(result);
//     });
//   });
//   res.send(bcrypt.hash);
// });

app.get("/", (req, res) => {
  let token = jwt.sign({ email: "guptaayush1280@gmail.com" }, "gadbad");
  res.cookie("token", token);
  res.send("done");
  // console.log(token);
  console.log(req.cookies);
});
app.get("/read", (req, res) => {
  let data = jwt.verify(req.cookies.token, "gadbad");
  console.log(data);
});
app.listen(3000);
