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
exports.deleteAddon = exports.getAddonById = exports.getAllAddons = exports.createAddon = void 0;
const client_1 = require("../../prisma/client");
const createAddon = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addon.create({ data });
});
exports.createAddon = createAddon;
const getAllAddons = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addon.findMany({
        include: {
            options: true,
        },
    });
});
exports.getAllAddons = getAllAddons;
const getAddonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addon.findUnique({
        where: { id },
        include: {
            options: true,
        },
    });
});
exports.getAddonById = getAddonById;
const deleteAddon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addon.delete({
        where: { id },
    });
});
exports.deleteAddon = deleteAddon;
