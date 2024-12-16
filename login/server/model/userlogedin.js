const mongoose = require("mongoose");
const { Schema } = mongoose;

const userdetails = new Schema({
  name:{
    type: "String"
  },
  email:{
    type:"String",
    unique: true
  },
  password:{
    type:"String"
  },
  role:{
    type: "String",
    enum:["admin","member"],
    default:"members"
  }
})

module.exports = mongoose.model('User', userdetails);