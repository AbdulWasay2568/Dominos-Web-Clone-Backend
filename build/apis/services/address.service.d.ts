import { CreateAddressDto, UpdateAddressDto } from '../interfaces/address.interface.js';
export declare const createAddress: (data: CreateAddressDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}>;
export declare const getAllAddresses: () => Promise<({
    user: {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        profileImage: string | null;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
})[]>;
export declare const getAddressById: (id: number) => Promise<({
    user: {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        profileImage: string | null;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}) | null>;
export declare const getAddressesByUserId: (userId: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}[]>;
export declare const updateAddress: (id: number, data: UpdateAddressDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}>;
export declare const deleteAddress: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}>;
