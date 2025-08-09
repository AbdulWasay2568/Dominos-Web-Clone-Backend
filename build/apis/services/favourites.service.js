import { prisma } from '../../prisma/client.js';
export const createFavourite = async (data) => {
    return await prisma.favourite.create({ data });
};
export const getAllFavouritesByUserId = async (userId) => {
    return await prisma.favourite.findMany({
        where: { userId },
        include: {
            product: true,
        },
    });
};
export const getFavouriteById = async (id) => {
    return await prisma.favourite.findUnique({
        where: { id },
        include: {
            product: true,
        },
    });
};
export const deleteFavourite = async (id) => {
    return await prisma.favourite.delete({
        where: { id },
    });
};
//# sourceMappingURL=favourites.service.js.map