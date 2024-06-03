"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var user_1 = __importDefault(require("../routes/user/user"));
var appointment_1 = __importDefault(require("../routes/appointment/appointment"));
var server_1 = require("./server");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/users', user_1.default);
app.use('/appointments', appointment_1.default);
if (require.main === module) {
    (0, server_1.serverInitializer)();
}
exports.default = app;
