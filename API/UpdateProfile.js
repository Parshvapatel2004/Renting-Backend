const connectDB = require("../DB/db.Connect");
const { ObjectId } = require("mongodb");

async function UpdateProfile(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Register");
    const { name, email, phone, password , id } = req.body;
    // update quaery
    const updateData = {
      $set: {
        name,
        email,
        phone,
        password,
      },
    };
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      updateData
    );
    if (result.modifiedCount == 0) {
      res.status(400).json({ message: "No user found" });
    } else {
        return res.status(200).json({ message: "User updated successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { UpdateProfile };
