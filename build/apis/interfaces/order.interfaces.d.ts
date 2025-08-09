import { OrderStatus } from './enums.interface.js';
import { CreateOrderItemDto } from './orderItem.interface.js';
export interface CreateOrderDto {
    userId: number;
    totalAmount: number;
    status?: OrderStatus;
    orderItems: CreateOrderItemDto[];
}
export interface UpdateOrderDto {
    totalAmount?: number;
    status?: OrderStatus;
    orderItems?: CreateOrderItemDto[];
}
