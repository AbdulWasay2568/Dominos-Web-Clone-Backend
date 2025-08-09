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
exports.deleteCartItem = exports.updateCartItem = exports.getCartItemById = exports.getAllCartItems = exports.createCartItem = void 0;
const client_1 = require("../../prisma/client");
const createCartItem = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cartItem.create({ data });
});
exports.createCartItem = createCartItem;
const getAllCartItems = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cartItem.findMany({
        include: {
            cart: true,
            product: true,
        },
    });
});
exports.getAllCartItems = getAllCartItems;
const getCartItemById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cartItem.findUnique({
        where: { id },
        include: {
            cart: true,
            product: true,
        },
    });
});
exports.getCartItemById = getCartItemById;
const updateCartItem = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cartItem.update({
        where: { id },
        data,
        include: {
            product: {
                include: {
                    addons: {
                        include: {
                            options: true,
                        },
                    },
                },
            },
            addonOptions: true,
        },
    });
});
exports.updateCartItem = updateCartItem;
const deleteCartItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cartItem.delete({
        where: { id },
    });
});
exports.deleteCartItem = deleteCartItem;
