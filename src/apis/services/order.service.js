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
exports.getOrdersByUserId = exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const client_1 = require("../../prisma/client");
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.order.create({
        data: {
            user: { connect: { id: data.userId } },
            totalAmount: data.totalAmount,
            status: data.status,
            orderItems: {
                create: data.orderItems.map(item => ({
                    product: { connect: { id: item.productId } },
                    quantity: item.quantity,
                    addonOptions: item.addonOptions
                        ? { connect: item.addonOptions.map(addonId => ({ id: addonId })) }
                        : undefined,
                })),
            },
        },
        include: {
            user: true,
            orderItems: {
                include: {
                    product: true,
                },
            },
        },
    });
});
exports.createOrder = createOrder;
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.order.findMany({
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            }
        },
    });
});
exports.getAllOrders = getAllOrders;
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.order.findUnique({
        where: { id },
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            }
        },
    });
});
exports.getOrderById = getOrderById;
// Optional: update only basic fields, not nested writes
const updateOrder = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.order.update({
        where: { id },
        data: {
            totalAmount: data.totalAmount,
            status: data.status,
            // For nested updates, use separate service
        },
    });
});
exports.updateOrder = updateOrder;
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.order.delete({
        where: { id },
    });
});
exports.deleteOrder = deleteOrder;
// get all orders of a user
const getOrdersByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.order.findMany({
        where: { userId },
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            }
        },
    });
});
exports.getOrdersByUserId = getOrdersByUserId;
