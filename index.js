const dbConnect = require("./DB/db.Connect");
const express = require("express");
const cors = require("cors");
const { AddContactus } = require("./API/AddContactus");
const { Register } = require("./API/Register");
const { Login } = require("./API/Login");
const { FetchAllUser } = require("./API/FetchAllData");
const { UpdateProfile } = require("./API/UpdateProfile");
const { DeleteUser } = require("./API/DeleteUser");

dbConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// create route

app.post("/AddContactus", AddContactus);
app.post("/Register", Register);
app.post("/Login", Login);
app.get("/fetchalluser", FetchAllUser);
app.post("/updateprofile", UpdateProfile);
app.post("/deleteuser", DeleteUser);

const PORT = 5000;
app.listen(PORT);
