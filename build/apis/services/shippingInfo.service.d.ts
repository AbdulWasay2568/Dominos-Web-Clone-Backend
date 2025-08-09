import { CreateShippingInfoDto, UpdateShippingInfoDto } from '../interfaces/shippingInfo.interface.js';
export declare const createShippingInfo: (data: CreateShippingInfoDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}>;
export declare const getAllShippingInfo: () => Promise<({
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
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
})[]>;
export declare const getShippingInfoById: (id: number) => Promise<({
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
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}) | null>;
export declare const updateShippingInfo: (id: number, data: UpdateShippingInfoDto) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}>;
export declare const deleteShippingInfo: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    orderId: number;
    houseNo: string;
    street: string;
    society: string;
    city: string;
    zipCode: string;
}>;
