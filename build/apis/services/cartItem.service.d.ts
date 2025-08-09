import { CreateCartItemDto, UpdateCartItemDto } from '../interfaces/cartItem.interface.js';
export declare const createCartItem: (data: CreateCartItemDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    cartId: number;
    productId: number;
}>;
export declare const getAllCartItems: () => Promise<({
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
    cart: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    cartId: number;
    productId: number;
})[]>;
export declare const getCartItemById: (id: number) => Promise<({
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
    cart: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    cartId: number;
    productId: number;
}) | null>;
export declare const updateCartItem: (id: number, data: UpdateCartItemDto) => Promise<{
    product: {
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
    };
    addonOptions: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        optionName: string;
        additionalPrice: number;
        addonId: number;
    }[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    cartId: number;
    productId: number;
}>;
export declare const deleteCartItem: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    cartId: number;
    productId: number;
}>;
