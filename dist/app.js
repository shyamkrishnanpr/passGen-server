"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConnection_1 = require("./dbConnection");
(0, dbConnection_1.db)();
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:8000"],
    optionsSuccessStatus: 200,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map