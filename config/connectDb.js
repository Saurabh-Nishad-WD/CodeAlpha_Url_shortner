import mongoose from "mongoose";
const connectDb = async (req,res) => {
    try{

        await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongo database connected to ${mongoose.connection.host}`);

    }
    catch(err){
        res.status(500).send({
            message:"error",
            err
        })
    }
};

export default connectDb;