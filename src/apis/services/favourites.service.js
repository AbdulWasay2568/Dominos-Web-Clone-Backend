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
exports.deleteFavourite = exports.getFavouriteById = exports.getAllFavouritesByUserId = exports.createFavourite = void 0;
const client_1 = require("../../prisma/client");
const createFavourite = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.favourite.create({ data });
});
exports.createFavourite = createFavourite;
const getAllFavouritesByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.favourite.findMany({
        where: { userId },
        include: {
            product: true,
        },
    });
});
exports.getAllFavouritesByUserId = getAllFavouritesByUserId;
const getFavouriteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.favourite.findUnique({
        where: { id },
        include: {
            product: true,
        },
    });
});
exports.getFavouriteById = getFavouriteById;
const deleteFavourite = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.favourite.delete({
        where: { id },
    });
});
exports.deleteFavourite = deleteFavourite;
