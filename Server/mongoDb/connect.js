import mongoose from "mongoose";

const connectDB = (url) => {
  //this is gonna help with the search functionality
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
