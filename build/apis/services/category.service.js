import { prisma } from '../../prisma/client.js';
export const createCategory = async (data) => {
    return prisma.category.create({ data });
};
export const getAllCategories = async () => {
    return await prisma.category.findMany({
        include: { products: true },
    });
};
export const getCategoryById = async (id) => {
    return await prisma.category.findUnique({
        where: { id },
        include: { products: true },
    });
};
export const updateCategory = async (id, data) => {
    return await prisma.category.update({
        where: { id },
        data,
    });
};
export const deleteCategory = async (id) => {
    return await prisma.category.delete({
        where: { id },
    });
};
//# sourceMappingURL=category.service.js.map