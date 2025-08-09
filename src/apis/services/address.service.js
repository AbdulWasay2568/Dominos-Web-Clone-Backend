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
exports.deleteAddress = exports.updateAddress = exports.getAddressesByUserId = exports.getAddressById = exports.getAllAddresses = exports.createAddress = void 0;
const client_1 = require("../../prisma/client");
const createAddress = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.address.create({ data });
});
exports.createAddress = createAddress;
const getAllAddresses = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.address.findMany({
        include: {
            user: true,
        },
    });
});
exports.getAllAddresses = getAllAddresses;
const getAddressById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.address.findUnique({
        where: { id },
        include: {
            user: true,
        },
    });
});
exports.getAddressById = getAddressById;
const getAddressesByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.address.findMany({
        where: { userId },
    });
});
exports.getAddressesByUserId = getAddressesByUserId;
const updateAddress = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.address.update({
        where: { id },
        data,
    });
});
exports.updateAddress = updateAddress;
const deleteAddress = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.address.delete({
        where: { id },
    });
});
exports.deleteAddress = deleteAddress;
