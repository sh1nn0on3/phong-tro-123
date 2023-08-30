import express from "express";
import * as authController from "../controller/auth";

const router = express.Router();

let initRoutes = (app) => {
  // authentication routes
  router.post("/register", authController.register);
  router.post("/login", authController.login);

  return app.use("/", router);
};

export default initRoutes;
