const { log } = require("console");
const fs = require("fs");

// fs.appendFile("hey.txt","hey",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
// fs.rename("hey.txt","cute.txt",function(err)
// {
//     if(err) console.log(err);
//     else console.log("changed");
// })
// fs.unlink("cute.txt", function (err) {
//   if (err) console.log(err.message);
//   else console.log("changed");
// });
// fs.rm("./hey",{recursive:true},function(err){
//     if(err) console.log(err);
//     else console.log(err);
// })
fs.readFile("cute.txt","utf8",function(err,data){
    if(err) console.log(err);
    else console.log(data);
})