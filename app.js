const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors=require('cors');
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

const UserRegisterRoute = require('./routes/registerUserRoute');
const UserLoginRoute = require('./routes/userLoginRoute');
const UserActivity = require('./routes/userActivityRoute');







app.use(bodyParser());
app.use("/register", UserRegisterRoute);
app.use("/login", UserLoginRoute);
app.use("/activity", UserActivity);


module.exports = app;