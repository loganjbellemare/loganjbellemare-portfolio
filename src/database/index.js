import { config } from "dotenv";
import mongoose from "mongoose";
import path from "path";

export default async function ConnectToDB() {
  config({ path: path.resolve(__dirname, "./.env") });
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    console.log("DB connected");
    return;
  }
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo db");
  });
  mongoose.connection.on("error", (err) => {
    console.log(`db connection problem`, err.message);
  });
  return mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
}
