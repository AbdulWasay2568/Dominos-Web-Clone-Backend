import { prisma } from '../../prisma/client.js';
export const createOption = async (data) => {
    return await prisma.addonOption.create({ data });
};
export const getAllOptions = async () => {
    return await prisma.addonOption.findMany({
        include: {
            addon: true,
        },
    });
};
export const getOptionById = async (id) => {
    return await prisma.addonOption.findUnique({
        where: { id },
        include: {
            addon: true,
        },
    });
};
export const updateOption = async (id, data) => {
    return await prisma.addonOption.update({
        where: { id },
        data,
    });
};
export const deleteOption = async (id) => {
    return await prisma.addonOption.delete({
        where: { id },
    });
};
//# sourceMappingURL=addonOptions.service.js.map