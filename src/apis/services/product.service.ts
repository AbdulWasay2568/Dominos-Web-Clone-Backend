import { prisma } from '../../prisma/client';
import { CreateProductDto, UpdateProductDto } from '../interfaces/product.interface';
import { deleteFromCloudinary, uploadToCloudinary } from './cloudinary.service';

export const createProduct = async (data: CreateProductDto) => {
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

export const getProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      reviews: true,
      addons: {
        include:{
          options: true
        }
      },
    },
  });
};

export const updateProduct = async (id: number, data: UpdateProductDto) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({
    where: { id },
  });
};

export const updateProductImageService = async (productId: number, file: Express.Multer.File) => {
  if (!file) throw new Error('No image uploaded');

  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) throw new Error('User not found');

  if (product.imageUrl) {
    await deleteFromCloudinary(product.imageUrl);
  }

  const folder = 'dominos/products';
  const result = await uploadToCloudinary(file.buffer, folder);

  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data: { imageUrl: result.secure_url },
  });

  return updatedProduct.imageUrl;
};