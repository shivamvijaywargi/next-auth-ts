import mongoose from "mongoose";

export async function connectToDB() {
  try {
    mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/next-auth-ts",
    );

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log(`Connected to MongoDB: ${connection.host}`);
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
    process.exit(1);
  }
}
