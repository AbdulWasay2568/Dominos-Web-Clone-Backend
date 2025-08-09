import { CreateOrderDto, UpdateOrderDto } from '../interfaces/order.interfaces.js';
export declare const createOrder: (data: CreateOrderDto) => Promise<{
    orderItems: ({
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
        updatedAt: Date;
        quantity: number;
        productId: number;
        orderId: number;
    })[];
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
    totalAmount: number;
    status: import(".prisma/client").$Enums.OrderStatus;
}>;
export declare const getAllOrders: () => Promise<({
    orderItems: ({
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
        updatedAt: Date;
        quantity: number;
        productId: number;
        orderId: number;
    })[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    totalAmount: number;
    status: import(".prisma/client").$Enums.OrderStatus;
})[]>;
export declare const getOrderById: (id: number) => Promise<({
    orderItems: ({
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
        updatedAt: Date;
        quantity: number;
        productId: number;
        orderId: number;
    })[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    totalAmount: number;
    status: import(".prisma/client").$Enums.OrderStatus;
}) | null>;
export declare const updateOrder: (id: number, data: UpdateOrderDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    totalAmount: number;
    status: import(".prisma/client").$Enums.OrderStatus;
}>;
export declare const deleteOrder: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    totalAmount: number;
    status: import(".prisma/client").$Enums.OrderStatus;
}>;
export declare const getOrdersByUserId: (userId: number) => Promise<({
    orderItems: ({
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
        updatedAt: Date;
        quantity: number;
        productId: number;
        orderId: number;
    })[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    totalAmount: number;
    status: import(".prisma/client").$Enums.OrderStatus;
})[]>;
