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
exports.addItemToCart = exports.deleteCart = exports.updateCart = exports.getCartByUserId = exports.createCart = exports.getAllCarts = void 0;
const client_1 = require("../../prisma/client");
const getAllCarts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cart.findMany();
});
exports.getAllCarts = getAllCarts;
const createCart = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cart.create({ data });
});
exports.createCart = createCart;
const getCartByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cart.findUnique({
        where: { userId },
        include: {
            cartItems: {
                include: {
                    product: true,
                    addonOptions: true
                },
            },
        },
    });
});
exports.getCartByUserId = getCartByUserId;
const updateCart = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cart.update({
        where: { id },
        data,
    });
});
exports.updateCart = updateCart;
const deleteCart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.cart.delete({
        where: { id },
    });
});
exports.deleteCart = deleteCart;
const addItemToCart = (dto) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, quantity, addonOptionIds = [] } = dto;
    let cart = yield client_1.prisma.cart.findUnique({ where: { userId } });
    if (!cart) {
        cart = yield client_1.prisma.cart.create({ data: { userId } });
    }
    return yield client_1.prisma.cartItem.create({
        data: {
            cartId: cart.id,
            productId,
            quantity,
            addonOptions: {
                connect: addonOptionIds.map((id) => ({ id })),
            },
        },
        include: {
            addonOptions: true,
            product: true
        },
    });
});
exports.addItemToCart = addItemToCart;
