import { CreateCartDto, UpdateCartDto, AddItemToCartDto } from '../interfaces/cart.interface.js';
export declare const getAllCarts: () => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}[]>;
export declare const createCart: (data: CreateCartDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}>;
export declare const getCartByUserId: (userId: number) => Promise<({
    cartItems: ({
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
    })[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}) | null>;
export declare const updateCart: (id: number, data: UpdateCartDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}>;
export declare const deleteCart: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
}>;
export declare const addItemToCart: (dto: AddItemToCartDto) => Promise<{
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
