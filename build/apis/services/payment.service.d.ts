import { CreatePaymentDto, UpdatePaymentDto } from '../interfaces/payment.interface.js';
export declare const createPayment: (data: CreatePaymentDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    status: import(".prisma/client").$Enums.PaymentStatus;
    amount: number;
    method: string;
}>;
export declare const getAllPayments: () => Promise<({
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
    orderId: number;
    status: import(".prisma/client").$Enums.PaymentStatus;
    amount: number;
    method: string;
})[]>;
export declare const getPaymentById: (id: number) => Promise<({
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
    orderId: number;
    status: import(".prisma/client").$Enums.PaymentStatus;
    amount: number;
    method: string;
}) | null>;
export declare const updatePayment: (id: number, data: UpdatePaymentDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    status: import(".prisma/client").$Enums.PaymentStatus;
    amount: number;
    method: string;
}>;
export declare const deletePayment: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    status: import(".prisma/client").$Enums.PaymentStatus;
    amount: number;
    method: string;
}>;
