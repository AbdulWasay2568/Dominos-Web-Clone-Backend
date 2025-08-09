import { CreateOrderItemDto, UpdateOrderItemDto } from '../interfaces/orderItem.interface.js';
export declare const createOrderItem: (data: CreateOrderItemDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    productId: number;
    orderId: number;
}>;
export declare const getAllOrderItems: () => Promise<({
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
    order: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.OrderStatus;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    productId: number;
    orderId: number;
})[]>;
export declare const getOrderItemById: (id: number) => Promise<({
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
    order: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        totalAmount: number;
        status: import(".prisma/client").$Enums.OrderStatus;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    productId: number;
    orderId: number;
}) | null>;
export declare const updateOrderItem: (id: number, data: UpdateOrderItemDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    productId: number;
    orderId: number;
}>;
export declare const deleteOrderItem: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    productId: number;
    orderId: number;
}>;
