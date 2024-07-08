import mongoose from "mongoose";

const connectMongoDB= async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Mongodb connected : ${conn.connection.host}`)
        
    } catch (error) {
        console.error(`Error in connection : ${error.message}`)
        process.exit(1)
    }

}
export default connectMongoDB