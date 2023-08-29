"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("chu mi na");
    });
    return app.use("/", router);
};
exports.default = initWebRoutes;
//# sourceMappingURL=auth.js.map