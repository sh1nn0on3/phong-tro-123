"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const configDB_1 = __importDefault(require("./config/configDB"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
(0, routes_1.default)(app);
(0, configDB_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.listen(port, () => {
    console.log(`Server is running on port http ${port}`);
});
//# sourceMappingURL=index.js.map