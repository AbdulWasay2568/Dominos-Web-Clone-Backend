import { prisma } from '../../prisma/client.js';
import { deleteFromCloudinary, uploadToCloudinary } from './cloudinary.service.js';
export const createProduct = async (data) => {
    return await prisma.product.create({ data });
};
export const getAllProducts = async () => {
    return await prisma.product.findMany({
        include: {
            category: true,
            reviews: true,
        },
    });
};
export const getProductById = async (id) => {
    return await prisma.product.findUnique({
        where: { id },
        include: {
            category: true,
            reviews: true,
            addons: {
                include: {
                    options: true
                }
            },
        },
    });
};
export const updateProduct = async (id, data) => {
    return await prisma.product.update({
        where: { id },
        data,
    });
};
export const deleteProduct = async (id) => {
    const updatedProduct = await prisma.product.delete({
        where: { id },
    });
    return updatedProduct;
};
export const updateProductImageService = async (productId, file) => {
    if (!file)
        throw new Error('No image uploaded');
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product)
        throw new Error('User not found');
    if (product.imageUrl) {
        await deleteFromCloudinary(product.imageUrl);
    }
    const folder = 'dominos/products';
    const result = await uploadToCloudinary(file.buffer, folder);
    const updatedProduct = await prisma.product.update({
        where: { id: productId },
        data: { imageUrl: result.secure_url },
    });
    return updatedProduct;
};
export const createProductWithAddonsService = async (data, file) => {
    const { name, description, price, categoryId, addons } = data;
    const category = await prisma.category.findUnique({ where: { id: categoryId } });
    if (!category)
        throw new Error('Category not found');
    if (!file)
        throw new Error('Product image is required');
    const folder = 'dominos/products';
    const result = await uploadToCloudinary(file.buffer, folder);
    const imageUrl = result.secure_url;
    const product = await prisma.product.create({
        data: {
            name,
            description,
            price,
            imageUrl,
            category: { connect: { id: categoryId } },
            addons: {
                create: addons?.map((addon) => ({
                    name: addon.name,
                    options: {
                        create: addon.options.map((option) => ({
                            optionName: option.name,
                            additionalPrice: option.price,
                        })),
                    },
                })) || [],
            },
        },
        include: {
            addons: { include: { options: true } },
            category: true,
        },
    });
    return product;
};
//# sourceMappingURL=product.service.js.map