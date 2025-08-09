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
exports.createProductWithAddonsService = exports.updateProductImageService = exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const client_1 = require("../../prisma/client");
const cloudinary_service_1 = require("./cloudinary.service");
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.product.create({ data });
});
exports.createProduct = createProduct;
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.product.findMany({
        include: {
            category: true,
            reviews: true,
        },
    });
});
exports.getAllProducts = getAllProducts;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.product.findUnique({
        where: { id },
        include: {
            category: true,
            reviews: true,
            addons: {
                include: {
                    options: true
                }
            },
        },
    });
});
exports.getProductById = getProductById;
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.product.update({
        where: { id },
        data,
    });
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield client_1.prisma.product.delete({
        where: { id },
    });
    return updatedProduct;
});
exports.deleteProduct = deleteProduct;
const updateProductImageService = (productId, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (!file)
        throw new Error('No image uploaded');
    const product = yield client_1.prisma.product.findUnique({ where: { id: productId } });
    if (!product)
        throw new Error('User not found');
    if (product.imageUrl) {
        yield (0, cloudinary_service_1.deleteFromCloudinary)(product.imageUrl);
    }
    const folder = 'dominos/products';
    const result = yield (0, cloudinary_service_1.uploadToCloudinary)(file.buffer, folder);
    const updatedProduct = yield client_1.prisma.product.update({
        where: { id: productId },
        data: { imageUrl: result.secure_url },
    });
    return updatedProduct;
});
exports.updateProductImageService = updateProductImageService;
const createProductWithAddonsService = (data, file) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, categoryId, addons } = data;
    const category = yield client_1.prisma.category.findUnique({ where: { id: categoryId } });
    if (!category)
        throw new Error('Category not found');
    if (!file)
        throw new Error('Product image is required');
    const folder = 'dominos/products';
    const result = yield (0, cloudinary_service_1.uploadToCloudinary)(file.buffer, folder);
    const imageUrl = result.secure_url;
    const product = yield client_1.prisma.product.create({
        data: {
            name,
            description,
            price,
            imageUrl,
            category: { connect: { id: categoryId } },
            addons: {
                create: (addons === null || addons === void 0 ? void 0 : addons.map((addon) => ({
                    name: addon.name,
                    options: {
                        create: addon.options.map((option) => ({
                            optionName: option.name,
                            additionalPrice: option.price,
                        })),
                    },
                }))) || [],
            },
        },
        include: {
            addons: { include: { options: true } },
            category: true,
        },
    });
    return product;
});
exports.createProductWithAddonsService = createProductWithAddonsService;
