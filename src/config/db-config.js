import mongoose from "mongoose";
import { DB_PASS } from "./server-config.js";

const connect = async () => {
    mongoose.connect(DB_PASS);
    
}

export default connect;