const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const user =  require('./controller/user')
const {authenticateToken} = require('./service/authMiddelware')


const app = express();
PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.use(morgan("default"));


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/login');
  console.log("Database connected...!!");
}

app.post('/signup',user.createUser)
app.post('/login',user.loginUser)
app.get('/getuser',authenticateToken,user.getallUser)

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT,()=>{
  console.log("Server started..!!");
  
})