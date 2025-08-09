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
exports.deleteOrderItem = exports.updateOrderItem = exports.getOrderItemById = exports.getAllOrderItems = exports.createOrderItem = void 0;
const client_1 = require("../../prisma/client");
const createOrderItem = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.orderItem.create({
        data: {
            orderId: data.orderId,
            productId: data.productId,
            quantity: data.quantity,
            addonOptions: {
                connect: data.addonOptions.map((id) => ({ id }))
            }
        }
    });
});
exports.createOrderItem = createOrderItem;
const getAllOrderItems = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.orderItem.findMany({
        include: {
            order: true,
            product: true,
        },
    });
});
exports.getAllOrderItems = getAllOrderItems;
const getOrderItemById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.orderItem.findUnique({
        where: { id },
        include: {
            order: true,
            product: true,
        },
    });
});
exports.getOrderItemById = getOrderItemById;
const updateOrderItem = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.orderItem.update({
        where: { id },
        data: {
            quantity: data.quantity,
            addonOptions: {
                connect: data.addonOptions.map((id) => ({ id }))
            }
        }
    });
});
exports.updateOrderItem = updateOrderItem;
const deleteOrderItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.orderItem.delete({
        where: { id },
    });
});
exports.deleteOrderItem = deleteOrderItem;
