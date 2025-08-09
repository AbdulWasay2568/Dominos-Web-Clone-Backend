import { prisma } from '../../prisma/client.js';
export const createAddon = async (data) => {
    return await prisma.addon.create({ data });
};
export const getAllAddons = async () => {
    return await prisma.addon.findMany({
        include: {
            options: true,
        },
    });
};
export const getAddonById = async (id) => {
    return await prisma.addon.findUnique({
        where: { id },
        include: {
            options: true,
        },
    });
};
export const deleteAddon = async (id) => {
    return await prisma.addon.delete({
        where: { id },
    });
};
//# sourceMappingURL=addons.service.js.map