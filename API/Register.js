const connectDB = require("../DB/db.Connect");

async function Register(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Register");

    // extract input parameters
    const { name, email, phone, password } = req.body;
    // query
    await collection.insertOne({
      name,
      email,
      phone,
      password,
    });
    return res.status(200).json({ message: "Register successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error" });
  }
}

module.exports = {Register}