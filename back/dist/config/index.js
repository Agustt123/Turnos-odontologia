"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENVIRONMENT = exports.HOST = exports.PROTO = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./src/config/.env" });
var ENVIRONMENT = process.env.ENVIRONMENT;
exports.ENVIRONMENT = ENVIRONMENT;
var PORT = Number(process.env.PORT);
exports.PORT = PORT;
var PROTO = process.env.PROTO || "http";
exports.PROTO = PROTO;
var HOST = process.env.HOST || "localhost";
exports.HOST = HOST;
