import mongoose from "mongoose";

export default async function ConnectToDB() {
  const URL = process.env.MONGO_URI;
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    console.log("DB connected");
    return;
  }
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo db");
  });
  // mongoose.connection.on("error", (err) => {
  //   console.log(`db connection problem`, err.message);
  // });
  return mongoose.connect(URL);
}
