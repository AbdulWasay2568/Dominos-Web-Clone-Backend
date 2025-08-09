import { CreateFavouriteDto } from '../interfaces/favourites.interface.js';
export declare const createFavourite: (data: CreateFavouriteDto) => Promise<{
    id: number;
    createdAt: Date;
    productId: number;
    userId: number;
}>;
export declare const getAllFavouritesByUserId: (userId: number) => Promise<({
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        categoryId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: number;
    createdAt: Date;
    productId: number;
    userId: number;
})[]>;
export declare const getFavouriteById: (id: number) => Promise<({
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        categoryId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: number;
    createdAt: Date;
    productId: number;
    userId: number;
}) | null>;
export declare const deleteFavourite: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    productId: number;
    userId: number;
}>;
