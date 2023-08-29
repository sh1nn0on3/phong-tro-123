require("dotenv").config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import initWebRoutes from "./routes";
import connectDB from "./config/configDB";

const app = express();
const port: any = process.env.PORT || 5000;

initWebRoutes(app);
connectDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    // origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.listen(port, () => {
  console.log(`Server is running on port http ${port}`);
});
