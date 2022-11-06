const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors=require('cors');
app.use(cors());

const UserRegisterRoute = require('./routes/registerUserRoute');
const UserLoginRoute = require('./routes/userLoginRoute');






app.use(bodyParser());
app.use("/register", UserRegisterRoute);
app.use("/login", UserLoginRoute);


module.exports = app;