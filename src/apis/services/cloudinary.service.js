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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromCloudinary = exports.uploadToCloudinary = void 0;
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const stream_1 = require("stream");
const uploadToCloudinary = (buffer, folder, public_id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const stream = cloudinary_1.default.uploader.upload_stream({
            folder,
            public_id,
            overwrite: true,
            resource_type: 'image',
        }, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
        stream_1.Readable.from(buffer).pipe(stream);
    });
});
exports.uploadToCloudinary = uploadToCloudinary;
const deleteFromCloudinary = (imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const parts = imageUrl.split('/');
    const publicIdWithExt = parts[parts.length - 1];
    const publicId = publicIdWithExt.split('.')[0];
    const folder = parts.slice(parts.indexOf('dominos')).slice(0, -1).join('/'); // e.g., dominos/users/customer
    const fullPublicId = `${folder}/${publicId}`;
    yield cloudinary_1.default.uploader.destroy(fullPublicId);
});
exports.deleteFromCloudinary = deleteFromCloudinary;
