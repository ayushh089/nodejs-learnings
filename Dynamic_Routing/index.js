const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //static files ka path

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    if (err) return res.send("Wrong");

    res.render("index.ejs", { files: files });
  });
});

app.post("/create", function (req, res) {
  fs.writeFile(
    `./files/${req.body.title}.txt`,
    req.body.details,
    function (err) {
      if (err) console.log(err);
      res.redirect("/");
    }
  );
  console.log(req.body);
});
app.get("/file/:filename", function (req, res) {
  console.log("fsa");
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, data) => {
    if (err) return res.send(err.message);
    res.render("show.ejs", { filename: req.params.filename, fileData: data });
  });
});
app.get("/profile/:username", function (req, res) {
  req.params.username;
  res.send(req.params.username);
});
app.listen(3000);

// console.log(__dirname+'/public');
