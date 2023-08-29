import express from "express";

const router = express.Router();

let initRoutes = (app) => {
    router.get("/hello", (req, res) => {
        res.send("Hello World!");
    });
    
    return app.use("/", router);
}

export default initRoutes;