const connectDB = require("../DB/db.Connect");

async function AddContactus(req,res){
    try{
        const db = await connectDB();
        const collection = db.collection("ContactUS");

        // extract input parameters from frontend
        const{firstname,lastname,email,phone,message} = req.body;
        // insert data into mongoDB
        // query insert one {Name:Parshva}
        await collection.insertOne({
           firstname,
           lastname,
           email,
           phone,
           message 
        })
        return res.status(200).json({message:"data stored"});

    }catch(error)
    {
        console.log(error);
        return res.status(500).json({message:"internal server error"});
    }
}

module.exports = {AddContactus}