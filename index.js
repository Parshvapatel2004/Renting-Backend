const dbConnect=require('./DB/db.Connect');
const express = require("express");
const cors = require("cors");
const { AddContactus } = require('./API/AddContactus');
const { Register } = require('./API/Register');


dbConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// create route

app.post("/AddContactus",AddContactus);
app.post("/Register",Register);

const PORT = 8000;
app.listen(PORT);