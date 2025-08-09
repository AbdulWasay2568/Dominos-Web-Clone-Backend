// Middleware to authorize based on role
export const authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: Insufficient permission" });
        }
        next();
    };
};
//# sourceMappingURL=authorize.middleware.js.map