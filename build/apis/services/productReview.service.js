import { prisma } from '../../prisma/client.js';
export const createReview = async (data) => {
    return await prisma.productReview.create({ data });
};
export const getAllReviews = async () => {
    return await prisma.productReview.findMany({
        include: {
            product: true,
            user: true,
        },
    });
};
export const getReviewById = async (id) => {
    return await prisma.productReview.findUnique({
        where: { id },
        include: {
            product: true,
            user: true,
        },
    });
};
export const updateReview = async (id, data) => {
    return await prisma.productReview.update({
        where: { id },
        data,
    });
};
export const deleteReview = async (id) => {
    return await prisma.productReview.delete({
        where: { id },
    });
};
//# sourceMappingURL=productReview.service.js.map