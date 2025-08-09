import { prisma } from '../../prisma/client.js';
export const getAllCarts = async () => {
    return await prisma.cart.findMany();
};
export const createCart = async (data) => {
    return await prisma.cart.create({ data });
};
export const getCartByUserId = async (userId) => {
    return await prisma.cart.findUnique({
        where: { userId },
        include: {
            cartItems: {
                include: {
                    product: true,
                    addonOptions: true
                },
            },
        },
    });
};
export const updateCart = async (id, data) => {
    return await prisma.cart.update({
        where: { id },
        data,
    });
};
export const deleteCart = async (id) => {
    return await prisma.cart.delete({
        where: { id },
    });
};
export const addItemToCart = async (dto) => {
    const { userId, productId, quantity, addonOptionIds = [] } = dto;
    let cart = await prisma.cart.findUnique({ where: { userId } });
    if (!cart) {
        cart = await prisma.cart.create({ data: { userId } });
    }
    return await prisma.cartItem.create({
        data: {
            cartId: cart.id,
            productId,
            quantity,
            addonOptions: {
                connect: addonOptionIds.map((id) => ({ id })),
            },
        },
        include: {
            addonOptions: true,
            product: true
        },
    });
};
//# sourceMappingURL=cart.service.js.map