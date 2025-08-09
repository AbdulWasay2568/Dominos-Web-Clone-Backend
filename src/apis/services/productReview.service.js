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
exports.deleteReview = exports.updateReview = exports.getReviewById = exports.getAllReviews = exports.createReview = void 0;
const client_1 = require("../../prisma/client");
const createReview = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.productReview.create({ data });
});
exports.createReview = createReview;
const getAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.productReview.findMany({
        include: {
            product: true,
            user: true,
        },
    });
});
exports.getAllReviews = getAllReviews;
const getReviewById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.productReview.findUnique({
        where: { id },
        include: {
            product: true,
            user: true,
        },
    });
});
exports.getReviewById = getReviewById;
const updateReview = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.productReview.update({
        where: { id },
        data,
    });
});
exports.updateReview = updateReview;
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_1.prisma.productReview.delete({
        where: { id },
    });
});
exports.deleteReview = deleteReview;
