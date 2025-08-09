import { CreateProductReviewDto, UpdateProductReviewDto } from '../interfaces/productReview.interface.js';
export declare const createReview: (data: CreateProductReviewDto) => Promise<{
    id: number;
    createdAt: Date;
    productId: number;
    userId: number;
    rating: number;
    comment: string;
}>;
export declare const getAllReviews: () => Promise<({
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
    productId: number;
    userId: number;
    rating: number;
    comment: string;
})[]>;
export declare const getReviewById: (id: number) => Promise<({
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
    productId: number;
    userId: number;
    rating: number;
    comment: string;
}) | null>;
export declare const updateReview: (id: number, data: UpdateProductReviewDto) => Promise<{
    id: number;
    createdAt: Date;
    productId: number;
    userId: number;
    rating: number;
    comment: string;
}>;
export declare const deleteReview: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    productId: number;
    userId: number;
    rating: number;
    comment: string;
}>;
