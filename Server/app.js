const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connect = require("./database/db");
const {tokenVerify} = require("./middleware");

// connect to mongoDB server
connect().then(() => {
    console.log("connected to mongoDB");
});

// middlewares 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200,
    credentials: true
}));

// import routers 
const auth = require("./routes/auth");
const tweets = require("./routes/tweets");
const users = require("./routes/users");

app.use("/api/v1/auth", auth);
app.use("/api/v1/tweets", tokenVerify, tweets);
app.use("/api/v1/users", tokenVerify, users);

app.listen(process.env.PORT);