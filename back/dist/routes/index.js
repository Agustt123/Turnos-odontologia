"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = require("../controllers/user");
var router = express_1.default.Router();
router.get("/users", user_1.getAllUsers);
router.get("/users/:id", user_1.getUserById);
router.post("/register", user_1.registerUser);
router.post("/login", user_1.loginUser);
exports.default = router;
