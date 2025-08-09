"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRole = void 0;
// Middleware to authorize based on role
const authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: Insufficient permission" });
        }
        next();
    };
};
exports.authorizeRole = authorizeRole;
