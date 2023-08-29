import express from "express";

const router = express.Router();

let initWebRoutes = (app: any) => {
  router.get("/", (req, res) => {
    return res.send("chu mi na");
  });

  return app.use("/", router);
};
export default initWebRoutes;
