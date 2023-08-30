import express from "express";
import * as authController from "../controller/auth";

const router = express.Router();

let initRoutes = (app) => {
  router.post("/register", authController.register);

  return app.use("/", router);
};

export default initRoutes;
