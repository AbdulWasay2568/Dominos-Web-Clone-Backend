import { prisma } from '../../prisma/client.js';
export const createCartItem = async (data) => {
    return await prisma.cartItem.create({ data });
};
export const getAllCartItems = async () => {
    return await prisma.cartItem.findMany({
        include: {
            cart: true,
            product: true,
        },
    });
};
export const getCartItemById = async (id) => {
    return await prisma.cartItem.findUnique({
        where: { id },
        include: {
            cart: true,
            product: true,
        },
    });
};
export const updateCartItem = async (id, data) => {
    return await prisma.cartItem.update({
        where: { id },
        data,
        include: {
            product: {
                include: {
                    addons: {
                        include: {
                            options: true,
                        },
                    },
                },
            },
            addonOptions: true,
        },
    });
};
export const deleteCartItem = async (id) => {
    return await prisma.cartItem.delete({
        where: { id },
    });
};
//# sourceMappingURL=cartItem.service.js.map