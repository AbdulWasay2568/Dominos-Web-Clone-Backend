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
exports.deleteShippingInfo = exports.updateShippingInfo = exports.getShippingInfoById = exports.getAllShippingInfo = exports.createShippingInfo = void 0;
const client_1 = require("../../prisma/client");
const createShippingInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.shippingInfo.create({ data });
});
exports.createShippingInfo = createShippingInfo;
const getAllShippingInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.shippingInfo.findMany({
        include: { order: true },
    });
});
exports.getAllShippingInfo = getAllShippingInfo;
const getShippingInfoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.shippingInfo.findUnique({
        where: { id },
        include: { order: true },
    });
});
exports.getShippingInfoById = getShippingInfoById;
const updateShippingInfo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.shippingInfo.update({
        where: { id },
        data,
    });
});
exports.updateShippingInfo = updateShippingInfo;
const deleteShippingInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.shippingInfo.delete({
        where: { id },
    });
});
exports.deleteShippingInfo = deleteShippingInfo;
