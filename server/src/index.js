require("dotenv").config();
import cors from "cors";
import express from "express";
import initRoutes from "./routes";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

initRoutes(app);
connectDB();


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
