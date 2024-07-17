const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/test')
.then(() => console.log('Connected!'));
console.log("fsd");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});
module.exports=mongoose.model("user",userSchema)