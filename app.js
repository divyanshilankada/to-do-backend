const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors=require('cors');
app.use(cors());

const UserRegisterRoute = require('./routes/registerUserRoute');
const UserLoginRoute = require('./routes/userLoginRoute');
const UserActivityRoute = require('./routes/userActivityRoute');







app.use(bodyParser());
app.use("/register", UserRegisterRoute);
app.use("/login", UserLoginRoute);
app.use("/activity", UserActivityRoute);


module.exports = app;