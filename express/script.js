const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(function(req,res,next){
//   console.log(1);
//   next()
// })
// app.use(function(req,res,next){
//   console.log(2);
//     next()
// })
app.get("/", function (req, res) {
  res.send("Hello sfdsf");
});
app.get("/about", function (req, res, next) {
  return next(new Error("wrong"));
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("something braked");
});
app.listen(3000);
