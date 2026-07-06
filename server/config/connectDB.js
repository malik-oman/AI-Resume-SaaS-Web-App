import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Data Base Connected")
    } catch (error) {
        console.log(`DB Conected error ${error}`)
    }
}

export default connectDB