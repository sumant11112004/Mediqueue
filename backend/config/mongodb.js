
//CONNECTIVITY TO DATABASE ON MONGODB ATLAS

import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', ()=> console.log("Database Connected") )
    await mongoose.connect(`${process.env.MONGODB_URI}/MediQueue`)
}

export default connectDB