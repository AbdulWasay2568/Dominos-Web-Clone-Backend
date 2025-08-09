import { CreateUserDto, UpdateUserDto } from '../interfaces/users.interface.js';
export declare const createUser: (data: CreateUserDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    phone: string | null;
    password: string;
    role: import(".prisma/client").$Enums.Role;
    profileImage: string | null;
}>;
export declare const getUserById: (id: number) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    phone: string | null;
    role: import(".prisma/client").$Enums.Role;
    profileImage: string | null;
} | null>;
export declare const getAllUsers: () => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    phone: string | null;
    password: string;
    role: import(".prisma/client").$Enums.Role;
    profileImage: string | null;
}[]>;
export declare const updateUser: (id: number, data: UpdateUserDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    phone: string | null;
    password: string;
    role: import(".prisma/client").$Enums.Role;
    profileImage: string | null;
}>;
export declare const deleteUser: (id: number) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    phone: string | null;
    password: string;
    role: import(".prisma/client").$Enums.Role;
    profileImage: string | null;
}>;
export declare const updateUserImageService: (userId: number, file: Express.Multer.File) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    phone: string | null;
    password: string;
    role: import(".prisma/client").$Enums.Role;
    profileImage: string | null;
}>;
