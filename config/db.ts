import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log('connect');
    } catch (error: any) {
        console.log(error.message);
    }
}

export default dbConnect;












