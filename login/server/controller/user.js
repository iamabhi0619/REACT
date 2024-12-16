const user = require("../model/userlogedin");
const bcrypt = require("bcrypt");
const { generateToken } = require("../service/login");

exports.createUser = async (req, res) => {
  try {
    const userdata = req.body;
    const { name, email, password } = userdata;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new user({
      name,
      email,
      password: hashedPassword,
      role: "member",
    });
    const savedUser = await createdUser.save();
    res.json({ status: "OK", user: savedUser });
  } catch (error) {
    console.log(error);
    res.json({status:"ERROR"})
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      console.log("User not found");
      return res.json({ status: "Error", message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.json({ status: "Error", message: "Incorrect Password" });
    }

    const token = generateToken(existingUser);
    return res.json({ status: "OK", message: token });
  } catch (error) {
    console.error(error);
    return res.json({ status: "Error", message: "Invalid Credentials" });
  }
};

exports.getallUser = async (req,res) =>{
  try {
    const users = await user.find({})
    res.json({status:"Ok", data:users})
  } catch (error) {
    console.log(error);
    res.json({status:"error"})
  }
}