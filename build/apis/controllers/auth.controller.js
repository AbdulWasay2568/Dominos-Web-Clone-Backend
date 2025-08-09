import { registerUser, loginUser } from "../services/auth.service.js";
export const registerUserController = async (req, res) => {
    const { email, password, name, role } = req.body;
    if (!email || !password || !role) {
        res.status(400).json({ message: "Email, password, and role are required" });
        return;
    }
    try {
        const { token, message } = await registerUser({ email, password, name, role });
        res.status(201).json({ token, message });
    }
    catch (error) {
        res.status(400).json({ message: error.message || "Registration failed" });
    }
};
export const loginUserController = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required" });
        return;
    }
    try {
        const { token, message } = await loginUser({ email, password });
        res.status(200).json({ token, message });
    }
    catch (error) {
        res.status(401).json({ message: error.message || "Invalid email or password" });
    }
};
//# sourceMappingURL=auth.controller.js.map