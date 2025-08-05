import { prisma } from '../../prisma/client';
import { CreateUserDto, UpdateUserDto } from '../interfaces/users.interface';
import { uploadToCloudinary, deleteFromCloudinary } from './cloudinary.service';

export const createUser = async (data: CreateUserDto) => {
  return prisma.users.create({ data });
};

export const getUserById = async (id: number) => {
  return prisma.users.findUnique(
    { where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        profileImage: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      }
    }
  );
};

export const getAllUsers = async () => {
  return prisma.users.findMany();
};

export const updateUser = async (id: number, data: UpdateUserDto) => {
  return prisma.users.update({ where: { id }, data });
};

export const deleteUser = async (id: number) => {
  return prisma.users.delete({ where: { id } });
}; 

export const updateUserImageService = async (userId: number, file: Express.Multer.File) => {
  if (!file) throw new Error('No image uploaded');

  const user = await prisma.users.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');

  if (user.profileImage) {
    await deleteFromCloudinary(user.profileImage);
  }

  const folder = user.role === 'VENDOR' ? 'dominos/users/vendor' : 'dominos/users/customer';
  const result = await uploadToCloudinary(file.buffer, folder);

  const updatedUser = await prisma.users.update({
    where: { id: userId },
    data: { profileImage: result.secure_url },
  });

  return updatedUser;
};