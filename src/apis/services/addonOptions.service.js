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
exports.deleteOption = exports.updateOption = exports.getOptionById = exports.getAllOptions = exports.createOption = void 0;
const client_1 = require("../../prisma/client");
const createOption = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addonOption.create({ data });
});
exports.createOption = createOption;
const getAllOptions = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addonOption.findMany({
        include: {
            addon: true,
        },
    });
});
exports.getAllOptions = getAllOptions;
const getOptionById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addonOption.findUnique({
        where: { id },
        include: {
            addon: true,
        },
    });
});
exports.getOptionById = getOptionById;
const updateOption = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addonOption.update({
        where: { id },
        data,
    });
});
exports.updateOption = updateOption;
const deleteOption = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.addonOption.delete({
        where: { id },
    });
});
exports.deleteOption = deleteOption;
