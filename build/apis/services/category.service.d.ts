import { CreateCategoryDto, UpdateCategoryDto } from '../interfaces/category.interface.js';
export declare const createCategory: (data: CreateCategoryDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const getAllCategories: () => Promise<({
    products: {
        id: number;
        name: string;
        description: string;
        price: number;
        categoryId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
})[]>;
export declare const getCategoryById: (id: number) => Promise<({
    products: {
        id: number;
        name: string;
        description: string;
        price: number;
        categoryId: number;
        imageUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}) | null>;
export declare const updateCategory: (id: number, data: UpdateCategoryDto) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const deleteCategory: (id: number) => Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
