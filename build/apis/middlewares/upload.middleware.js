import multer from 'multer';
import path from 'path';
// Use memoryStorage for cloudinary stream
export const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        cb(new Error('Only images are allowed'), false);
    }
    else {
        cb(null, true);
    }
};
export const uploadUserImage = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});
export const uploadProductImage = multer({
    storage,
    fileFilter,
    limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
});
//# sourceMappingURL=upload.middleware.js.map