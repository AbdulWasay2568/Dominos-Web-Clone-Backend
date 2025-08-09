"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProductImage = exports.uploadUserImage = exports.storage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Use memoryStorage for cloudinary stream
exports.storage = multer_1.default.memoryStorage();
const fileFilter = (req, file, cb) => {
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        cb(new Error('Only images are allowed'), false);
    }
    else {
        cb(null, true);
    }
};
exports.uploadUserImage = (0, multer_1.default)({
    storage: exports.storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});
exports.uploadProductImage = (0, multer_1.default)({
    storage: exports.storage,
    fileFilter,
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
});
