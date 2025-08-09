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
exports.deleteCategory = exports.updateCategory = exports.getCategoryById = exports.getAllCategories = exports.createCategory = void 0;
const client_1 = require("../../prisma/client");
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return client_1.prisma.category.create({ data });
});
exports.createCategory = createCategory;
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.category.findMany({
        include: { products: true },
    });
});
exports.getAllCategories = getAllCategories;
const getCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.category.findUnique({
        where: { id },
        include: { products: true },
    });
});
exports.getCategoryById = getCategoryById;
const updateCategory = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.category.update({
        where: { id },
        data,
    });
});
exports.updateCategory = updateCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.category.delete({
        where: { id },
    });
});
exports.deleteCategory = deleteCategory;
