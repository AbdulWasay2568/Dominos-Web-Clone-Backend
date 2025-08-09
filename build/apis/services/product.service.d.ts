import { CreateProductDto, UpdateProductDto, CreateProductWithAddonsDto } from '../interfaces/product.interface.js';
export declare const createProduct: (data: CreateProductDto) => Promise<{
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const getAllProducts: () => Promise<({
    category: {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
    reviews: {
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
        rating: number;
        comment: string;
    }[];
} & {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
})[]>;
export declare const getProductById: (id: number) => Promise<({
    category: {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
    reviews: {
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
        rating: number;
        comment: string;
    }[];
    addons: ({
        options: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            optionName: string;
            additionalPrice: number;
            addonId: number;
        }[];
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
    })[];
} & {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}) | null>;
export declare const updateProduct: (id: number, data: UpdateProductDto) => Promise<{
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const deleteProduct: (id: number) => Promise<{
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const updateProductImageService: (productId: number, file: Express.Multer.File) => Promise<{
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const createProductWithAddonsService: (data: CreateProductWithAddonsDto, file: Express.Multer.File) => Promise<{
    category: {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
    addons: ({
        options: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            optionName: string;
            additionalPrice: number;
            addonId: number;
        }[];
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        productId: number;
    })[];
} & {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
