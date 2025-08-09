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
exports.updateUserImageService = exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.getUserById = exports.createUser = void 0;
const client_1 = require("../../prisma/client");
const cloudinary_service_1 = require("./cloudinary.service");
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.users.create({ data });
});
exports.createUser = createUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.users.findUnique({ where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            profileImage: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        }
    });
});
exports.getUserById = getUserById;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.users.findMany();
});
exports.getAllUsers = getAllUsers;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.users.update({ where: { id }, data });
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.users.delete({ where: { id } });
});
exports.deleteUser = deleteUser;
const updateUserImageService = (userId, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (!file)
        throw new Error('No image uploaded');
    const user = yield client_1.prisma.users.findUnique({ where: { id: userId } });
    if (!user)
        throw new Error('User not found');
    if (user.profileImage) {
        yield (0, cloudinary_service_1.deleteFromCloudinary)(user.profileImage);
    }
    const folder = user.role === 'VENDOR' ? 'dominos/users/vendor' : 'dominos/users/customer';
    const result = yield (0, cloudinary_service_1.uploadToCloudinary)(file.buffer, folder);
    const updatedUser = yield client_1.prisma.users.update({
        where: { id: userId },
        data: { profileImage: result.secure_url },
    });
    return updatedUser;
});
exports.updateUserImageService = updateUserImageService;
