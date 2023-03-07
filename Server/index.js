//express.js setup
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDb/connect.js"; //.js because we are in node.js for react it will work without the .js suffix

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

//creation of api end points to connect with our front end
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E ;)");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("server has started on port: http://localhost:8080 ")
    );
  } catch (error) {
    console.log("could not access mongodb" + error);
  }
};

startServer();
