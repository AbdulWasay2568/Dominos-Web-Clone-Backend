"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.registerUserController = void 0;
const auth_service_1 = require("../services/auth.service");
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name, role } = req.body;
    if (!email || !password || !role) {
        res.status(400).json({ message: "Email, password, and role are required" });
        return;
    }
    try {
        const { token, message } = yield (0, auth_service_1.registerUser)({ email, password, name, role });
        res.status(201).json({ token, message });
    }
    catch (error) {
        res.status(400).json({ message: error.message || "Registration failed" });
    }
});
exports.registerUserController = registerUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required" });
        return;
    }
    try {
        const { token, message } = yield (0, auth_service_1.loginUser)({ email, password });
        res.status(200).json({ token, message });
    }
    catch (error) {
        res.status(401).json({ message: error.message || "Invalid email or password" });
    }
});
exports.loginUserController = loginUserController;
