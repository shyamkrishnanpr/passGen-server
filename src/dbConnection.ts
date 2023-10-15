import mongoose,{ConnectOptions} from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as Parameters<typeof mongoose.connect>[1];


  export const db =async():Promise<void>=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/passwordGen', mongooseOptions)
        
        console.log("Connected to database");
      } catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1);
      }
  }