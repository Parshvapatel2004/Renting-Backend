const connectDB = require("../DB/db.Connect");

async function FetchAllUser(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Register");
    const userData = await collection.find().toArray();
    if (userData.length == 0) {
      res.status(400).json({ message: "No user found" });
    } else {
      res.status(200).json({ message: "User Found", Data: userData });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { FetchAllUser };
