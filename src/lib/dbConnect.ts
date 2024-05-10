import mongoose, { connections } from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database ");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    console.log("db", db);

    connection.isConnected = db.connections[0].readyState;
    console.log("connections", connections);

    console.log("DB connected successfully");
  } catch (error) {
    console.log("database connnection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
