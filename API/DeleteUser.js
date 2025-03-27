const connectDB = require("../DB/db.Connect");
const { ObjectId } = require("mongodb");

async function DeleteUser(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Register");
    const { id } = req.body;
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount == 0) {
      res.status(400).json({ message: "No user found" });
    } else {
      res.status(200).json({ message: "User Deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
}

module.exports = { DeleteUser };
